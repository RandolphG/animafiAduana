import React, { FC, Fragment } from "react";
import "./styles/_notFoundStyles.scss";

/**
 * Not Found page
 * @constructor
 */
const Notfound: FC = () => {
  return (
    <Fragment>
      <div className="page_404">
        <div className="page_404_container">
          <div className="row">
            <div>
              <div>
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="content_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not available!</p>

                  <a href="" className="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Notfound;
