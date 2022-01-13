import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [clickedFlag, setClickedFlag] = useState(1);
  const [logoView, setLogoView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <= 768 ? setLogoView(true) : setLogoView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  });

  const handleClick = (flag: any) => {
    setClickedFlag(flag);
  };

  return (
    <div className="x-dashboard">
      <div className="x-sidebar">
        <div className="x-sidebar-logo">
          {!logoView ? (
            <img src="/images/logo.png" alt="logo" />
          ) : (
            <img src="/images/logo-eagle.png" alt="logo" />
          )}
        </div>
        <div className="x-sidebar-nav">
          <h4>Owner of lot: Atari</h4>
          <ul>
            <li
              className={`x-nav-item ${
                clickedFlag == 1 ? "x-item-effect" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              <Link to="/">
                <div className="x-sidebar-item">
                  {clickedFlag == 1 ? (
                    <img src="/images/tool.png" width={30} />
                  ) : (
                    <img src="/images/tool-color.png" width={30} />
                  )}

                  <h5>Price of lot</h5>
                </div>
              </Link>
            </li>
            <li
              className={`x-nav-item ${
                clickedFlag == 2 ? "x-item-effect" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              <Link to="/">
                <div className="x-sidebar-item">
                  {clickedFlag == 2 ? (
                    <img src="/images/house.png" width={30} />
                  ) : (
                    <img src="/images/house-color.png" width={30} />
                  )}
                  <h5>Village</h5>
                </div>
              </Link>
            </li>
            <li
              className={`x-nav-item ${
                clickedFlag == 3 ? "x-item-effect" : ""
              }`}
              onClick={() => handleClick(3)}
            >
              <Link to="/">
                <div className="x-sidebar-item">
                  {clickedFlag == 3 ? (
                    <img src="/images/apartment.png" width={30} />
                  ) : (
                    <img src="/images/apartment-color.png" width={30} />
                  )}
                  <h5>City</h5>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-10 col-sm-10 col-xs-10 col-10 x-container">
        <div className="x-header">
          <div className="x-header-button">
            <span className="x-font-normal">BUY NFT LAND</span>
          </div>
        </div>
        <div className="x-map">
          <div className="x-map-zoom">
            <span className="x-font-bg x-map-zoom-out">+</span>
            <span className="x-font-bg x-map-zoom-in">-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
