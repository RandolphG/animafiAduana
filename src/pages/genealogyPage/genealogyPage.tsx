import React, { useEffect } from "react";
import * as d3 from "d3";
import $ from "jquery";
import { json } from "./utils";

const GenealogyPage = () => {
  useEffect(() => {
    let x: any = null;
    let y: any = null;
    let nodePaths: any = null;
    let links: any = null;
    let nodesExit: any = null;
    let parentLink: any = null;
    let dragStarted: any = null;
    let domNode: any = null;
    let scale: any = null;
    let node: any = null;
    let nodes: any = null;
    let dragListener: any = null;
    let panTimer: any = null;
    let translateX: any = null;
    let translateY: any = null;
    let scaleX: any = null;
    let scaleY: any = null;
    let translateCoords: any = null;
    let relCoords: any | null = null;
    let treeData: any = json;
    let totalNodes = 0;
    let maxLabelLength = 0;
    /* variables for drag/drop */
    let selectedNode: any = null;
    let draggingNode: any = null;
    /* panning variables */
    let panSpeed = 200;
    /* Within 20px from edges will pan when dragging.*/
    let panBoundary = 20;
    /* Misc. variables */
    let i = 0;
    let duration = 750;
    let root: any;

    /* size of the diagram */
    let viewerWidth: any = $(document).width();
    let viewerHeight: any = $(document).height();

    let tree = d3.layout.tree().size([viewerHeight, viewerWidth]);

    /* define a d3 diagonal projection for use by the node paths later on. */
    let diagonal = d3.svg.diagonal().projection(function (d: any) {
      return [d.y, d.x];
    });

    // A recursive helper function for performing some setup by walking through all nodes

    function visit(parent: any, visitFn: any, childrenFn: any) {
      if (!parent) return;

      visitFn(parent);

      let children = childrenFn(parent);
      if (children) {
        let count = children.length;
        for (let i = 0; i < count; i++) {
          visit(children[i], visitFn, childrenFn);
        }
      }
    }

    // Call visit function to establish maxLabelLength
    visit(
      treeData,
      function (d: any) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);
      },
      function (d: any) {
        return d.children && d.children.length > 0 ? d.children : null;
      }
    );

    // sort the tree according to the node names

    function sortTree() {
      tree.sort(function (a: any, b: any) {
        return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
      });
    }
    /* Sort the tree initially in case the JSON isn't in a sorted order. */
    sortTree();

    function pan(domNode: any, direction: any) {
      let speed = panSpeed;
      if (panTimer) {
        clearTimeout(panTimer);
        translateCoords = d3.transform(svgGroup.attr("transform"));
        if (direction == "left" || direction == "right") {
          translateX =
            direction == "left"
              ? translateCoords.translate[0] + speed
              : translateCoords.translate[0] - speed;
          translateY = translateCoords.translate[1];
        } else if (direction == "up" || direction == "down") {
          translateX = translateCoords.translate[0];
          translateY =
            direction == "up"
              ? translateCoords.translate[1] + speed
              : translateCoords.translate[1] - speed;
        }
        scaleX = translateCoords.scale[0];
        scaleY = translateCoords.scale[1];
        scale = zoomListener.scale();
        svgGroup
          .transition()
          .attr(
            "transform",
            "translate(" +
              translateX +
              "," +
              translateY +
              ")scale(" +
              scale +
              ")"
          );
        d3.select(domNode)
          .select("g.node")
          .attr(
            "transform",
            "translate(" + translateX + "," + translateY + ")"
          );
        zoomListener.scale(zoomListener.scale());
        zoomListener.translate([translateX, translateY]);
        panTimer = setTimeout(function () {
          pan(domNode, speed, direction);
        }, 50);
      }
    }

    // Define the zoom function for the zoomable tree

    function zoom() {
      svgGroup.attr(
        "transform",
        "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"
      );
    }

    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    let zoomListener = d3.behavior
      .zoom()
      .scaleExtent([0.1, 3])
      .on("zoom", zoom);

    function initiateDrag(d: any, domNode: any) {
      draggingNode = d;
      d3.select(domNode).select(".ghostCircle").attr("pointer-events", "none");
      d3.selectAll(".ghostCircle").attr("class", "ghostCircle show");
      d3.select(domNode).attr("class", "node activeDrag");

      svgGroup.selectAll("g.node").sort(function (a: any) {
        // select the parent and sort the path's
        if (a.id != draggingNode.id) return 1;
        // a is not the hovered element, send "a" to the back
        else return -1; // a is the hovered element, bring "a" to the front
      });
      // if nodes has children, remove the links and nodes
      if (nodes.length > 1) {
        // remove link paths
        links = tree.links(nodes);
        nodePaths = svgGroup
          .selectAll("path.link")
          .data(links, function (d: any) {
            return d.target.id;
          })
          .remove();
        // remove child nodes
        nodesExit = svgGroup
          .selectAll("g.node")
          .data(nodes, function (d: any) {
            return d.id;
          })
          .filter(function (d: any) {
            return d.id != draggingNode.id;
          })
          .remove();
      }

      // remove parent link
      parentLink = tree.links(tree.nodes(draggingNode.parent));
      svgGroup
        .selectAll("path.link")
        .filter(function (d: any) {
          return d.target.id == draggingNode.id;
        })
        .remove();

      dragStarted = null;
    }

    // define the baseSvg, attaching a class for styling and the zoomListener
    let baseSvg = d3
      .select("#tree-container")
      .append("svg")
      .attr("width", viewerWidth)
      .attr("height", viewerHeight)
      .attr("class", "overlay")
      .call(zoomListener);

    // Define the drag listeners for drag/drop behaviour of nodes.
    dragListener = d3.behavior
      .drag()
      .on("dragstart", function (d: any) {
        if (d === root) {
          return;
        }
        dragStarted = true;
        nodes = tree.nodes(d);
        d3.event.sourceEvent.stopPropagation();
        // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
      })
      .on("drag", function (d: any) {
        if (d === root) {
          return;
        }
        if (dragStarted) {
          domNode = this;
          initiateDrag(d, domNode);
        }

        // get coords of mouseEvent relative to svg container to allow for panning
        relCoords = d3.mouse($("svg").get(0));
        if (relCoords[0] < panBoundary) {
          panTimer = true;
          pan(domNode, "left");
        } else if (relCoords[0] > $("svg").width() - panBoundary) {
          panTimer = true;
          pan(domNode, "right");
        } else if (relCoords[1] < panBoundary) {
          panTimer = true;
          pan(domNode, "up");
        } else if (relCoords[1] > $("svg").height() - panBoundary) {
          panTimer = true;
          pan(domNode, "down");
        } else {
          try {
            clearTimeout(panTimer);
          } catch (e) {}
        }

        d.x0 += d3.event.dy;
        d.y0 += d3.event.dx;
        let node = d3.select(domNode);
        node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
        updateTempConnector();
      })
      .on("dragend", function (d: any) {
        if (d == root) {
          return;
        }
        domNode = this;
        if (selectedNode) {
          // now remove the element from the parent, and insert it into the new elements children
          let index = draggingNode.parent.children.indexOf(draggingNode);
          if (index > -1) {
            draggingNode.parent.children.splice(index, 1);
          }
          if (
            typeof selectedNode.children !== "undefined" ||
            typeof selectedNode._children !== "undefined"
          ) {
            if (typeof selectedNode.children !== "undefined") {
              selectedNode.children.push(draggingNode);
            } else {
              selectedNode._children.push(draggingNode);
            }
          } else {
            selectedNode.children = [];
            selectedNode.children.push(draggingNode);
          }
          // Make sure that the node being added to is expanded so user can see added node is correctly moved
          expand(selectedNode);
          sortTree();
          endDrag();
        } else {
          endDrag();
        }
      });

    function endDrag() {
      selectedNode = null;
      d3.selectAll(".ghostCircle").attr("class", "ghostCircle");
      d3.select(domNode).attr("class", "node");
      // now restore the mouseover event or we won't be able to drag a 2nd time
      d3.select(domNode).select(".ghostCircle").attr("pointer-events", "");
      updateTempConnector();
      if (draggingNode !== null) {
        update(root);
        centerNode(draggingNode);
        draggingNode = null;
      }
    }

    // Helper functions for collapsing and expanding nodes.

    function collapse(d: any) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function expand(d: any) {
      if (d._children) {
        d.children = d._children;
        d.children.forEach(expand);
        d._children = null;
      }
    }

    let overCircle = function (d: any) {
      selectedNode = d;
      updateTempConnector();
    };
    let outCircle = function () {
      selectedNode = null;
      updateTempConnector();
    };

    // Function to update the temporary connector indicating dragging affiliation
    let updateTempConnector = function () {
      let data: any = [];
      if (draggingNode !== null && selectedNode !== null) {
        // have to flip the source coordinates since we did this for the existing connectors on the original tree
        data = [
          {
            source: {
              x: selectedNode.y0,
              y: selectedNode.x0,
            },
            target: {
              x: draggingNode.y0,
              y: draggingNode.x0,
            },
          },
        ];
      }
      let link = svgGroup.selectAll(".templink").data(data);

      link
        .enter()
        .append("path")
        .attr("class", "templink")
        .attr("d", d3.svg.diagonal())
        .attr("pointer-events", "none");

      link.attr("d", d3.svg.diagonal());

      link.exit().remove();
    };

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
      scale = zoomListener.scale();
      x = -source.y0;
      y = -source.x0;
      x = x * scale + viewerWidth / 2;
      y = y * scale + viewerHeight / 2;
      d3.select("g")
        .transition()
        .duration(duration)
        .attr(
          "transform",
          "translate(" + x + "," + y + ")scale(" + scale + ")"
        );
      zoomListener.scale(scale);
      zoomListener.translate([x, y]);
    }

    // Toggle children function

    function toggleChildren(d: any) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else if (d._children) {
        d.children = d._children;
        d._children = null;
      }
      return d;
    }
    /////////////////////////////////////////////////
    ///////////////// IMAGE DEFS ////////////////////
    /////////////////////////////////////////////////

    d3.select("svg")
      .append("defs")
      .append("pattern")
      .attr("id", "img1")
      .attr("patternUnits", "objectBoundingBox")

      .attr("width", "25")
      .attr("height", "25")
      .append("image")

      .attr(
        "xlink:href",
        "https://dl.dropboxusercontent.com/u/89221222/bean.png"
      )
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 40)
      .attr("height", 40);

    // Toggle children on click.

    function click(d: any) {
      if (d3.event.defaultPrevented) return; // click suppressed
      d = toggleChildren(d);
      update(d);
      centerNode(d);
    }

    function update(source: any) {
      // Compute the new height, function counts total children of root node and sets tree height accordingly.
      // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
      // This makes the layout more consistent.
      let levelWidth = [1];
      let childCount = function (level: any, n: any) {
        if (n.children && n.children.length > 0) {
          if (levelWidth.length <= level + 1) levelWidth.push(0);

          levelWidth[level + 1] += n.children.length;
          n.children.forEach(function (d: any) {
            childCount(level + 1, d);
          });
        }
      };
      childCount(0, root);
      /* 25 pixels per line  Determines the spacing */
      let newHeight: any = d3.max(levelWidth) * 105;
      tree = tree.size([newHeight, viewerWidth]);

      // Compute the new tree layout.
      let nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

      // Set widths between levels based on maxLabelLength.
      nodes.forEach(function (d: any) {
        d.y = d.depth * (maxLabelLength * 10); //maxLabelLength * 10px
        // alternatively to keep a fixed scale one can set a fixed depth per level
        // Normalize for fixed-depth by commenting out below line
        // d.y = (d.depth * 500); //500px per level.
      });

      // Update the nodes…
      node = svgGroup.selectAll("g.node").data(nodes, function (d: any) {
        return d.id || (d.id = ++i);
      });

      // Enter any new nodes at the parent's previous position.
      let nodeEnter = node
        .enter()
        .append("g")
        .call(dragListener)
        .attr("class", "node")
        .attr("transform", function () {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", click);

      nodeEnter
        .append("circle")
        .attr("class", "nodeCircle")
        .attr("r", 0)
        .style("fill", function (d: any) {
          return d._children ? "lightsteelblue" : "#fff";
        });

      nodeEnter
        .append("text")
        .attr("x", function (d: any) {
          return d.children || d._children ? -10 : 10;
        })
        .attr("dy", ".35em")
        .attr("class", "nodeText")
        .attr("text-anchor", function (d: any) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function (d: any) {
          return d.name;
        })
        .style("fill-opacity", 0);

      /* phantom node to give us mouseover in a radius around it */
      nodeEnter
        .append("circle")
        .attr("class", "ghostCircle")
        .attr("r", 30)
        .attr("opacity", 0.2) // change this to zero to hide the target area
        .style("fill", "red")
        .attr("pointer-events", "mouseover")
        .on("mouseover", function (node) {
          overCircle(node);
        })
        .on("mouseout", function (node) {
          outCircle(node);
        });

      /* Update the text to reflect whether node has children or not. */
      node
        .select("text")
        .attr("x", function (d: any) {
          return d.children || d._children ? -30 : 30;
        })
        .attr("text-anchor", function (d: any) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function (d: any) {
          return d.name;
        });

      /* Change the circle fill depending on whether it has children and is collapsed */
      node
        .select("circle.nodeCircle")
        .attr("r", 20.5) /* THIS IS DETERMINING RADIUS */
        .style("fill", function (d: any) {
          return d._children ? "lightsteelblue" : "url(#img1)";
        });

      /* Transition nodes to their new position. */
      let nodeUpdate = node
        .transition()
        .duration(duration)
        .attr("transform", function (d: any) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      /* Fade the text in */
      nodeUpdate.select("text").style("fill-opacity", 1);

      /* Transition exiting nodes to the parent's new position. */
      let nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function () {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      nodeExit.select("circle").attr("r", 0);

      nodeExit.select("text").style("fill-opacity", 0);

      /* Update the links… */
      let link = svgGroup.selectAll("path.link").data(links, function (d: any) {
        return d.target.id;
      });

      /* Enter any new links at the parent's previous position. */
      link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", function () {
          let o = {
            x: source.x0,
            y: source.y0,
          };
          return diagonal({
            source: o,
            target: o,
          });
        });

      /* Transition links to their new position. */
      link.transition().duration(duration).attr("d", diagonal);

      /* Transition exiting nodes to the parent's new position. */
      link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function () {
          let o = {
            x: source.x,
            y: source.y,
          };
          return diagonal({
            source: o,
            target: o,
          });
        })
        .remove();

      /* Stash the old positions for transition. */
      nodes.forEach(function (d: any) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    /* Append a group which holds all nodes and which the zoom Listener can act upon. */
    let svgGroup = baseSvg.append("g");

    /* Define the root */
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    /* Layout the tree initially and center on the root node. */
    update(root);
    centerNode(root);
  });

  return <div id="tree-container" />;
};

export default GenealogyPage;
