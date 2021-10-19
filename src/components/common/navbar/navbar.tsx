import React, { useEffect } from "react";
import "./styles/_navbarStyles.scss";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Navbar
 * @constructor
 */
const Navbar = () => {
  let reflow: any = null;
  let historyApp = useHistory();

  function goToLink(link: any) {
    historyApp.push(`/${link}`);
  }

  useEffect(() => {
    const container: Element | null = document.querySelector(".container");
    const items = document.querySelectorAll(".item");
    let current = 0;
    items.forEach((item, i) =>
      item.addEventListener("click", () => {
        if (container) {
          if (i < current) {
            container.className = "container right instant";
            // @ts-ignore
            reflow = container.offsetHeight;
            container.className = `container left pos${i}`;
          } else if (i > current) {
            container.className = "container left instant";
            // @ts-ignore
            reflow = container.offsetHeight;
            container.className = `container right pos${i}`;
          }
          current = i;
        }
      })
    );
  });

  const links = [
    { link: "About", name: "aboutPage" },
    { link: "Heritage", name: "" },
    { link: "Genealogy", name: "" },
    { link: "Donate", name: "" },
    { link: "Financials", name: "" },
    { link: "Projects", name: "" },
    { link: "Events", name: "" },
  ];

  const motionSettings = {
    initial: { opacity: 0, y: -25 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -25 },
  };

  return (
    <motion.div {...motionSettings} className="container">
      <svg className="snake" viewBox="0 0 100 100">
        <path d="M 5,50.000015 H 35 C 35,50.000015 35.966338,49.750005 36.875001,49.750005 C 37.783664,49.750005 38.749998,50.000015 38.749998,50.000015 C 38.749998,50.000015 39.622117,50.500015 40.624999,50.500015 C 41.627882,50.500015 42.5,50.000015 42.5,50.000015 C 42.5,50.000015 43.476418,48.5 44.374997,48.5 C 45.273576,48.5 46.249998,50.000015 46.249998,50.000015 C 46.249998,50.000015 47.22755,53 48.124999,53 C 49.022448,53 50,50.000015 50,50.000015 C 50,50.000015 50.977541,47 51.875001,47 C 52.772461,47 53.749998,50.000015 53.749998,50.000015 C 53.749998,50.000015 54.726428,51.5 55.624999,51.5 C 56.52357,51.5 57.5,50.000015 57.5,50.000015 C 57.5,50.000015 58.486661,49.500025 59.375001,49.500025 C 60.263341,49.500025 61.249998,50.000015 61.249998,50.000015 C 61.249998,50.000015 62.232702,50.249995 63.124999,50.249995 C 64.017296,50.249995 65,50.000015 65,50.000015 H 95" />
      </svg>
      <div className="menu">
        {links.map(({ link, name }, idx) => (
          <div className="item" onClick={() => goToLink(name)}>
            {link}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;