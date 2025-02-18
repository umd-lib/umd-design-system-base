"use client";

import React, { forwardRef, useState } from "react";
import "./Navigation.css";
import Image from "next/image";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_NAVIGATION_CLASSES = "";

const Navigation = forwardRef(({ children, className, ...props }, ref) => {
  const navigationClasses = cn(BASE_NAVIGATION_CLASSES, className);

  const [isPreviousMenu, setIsPreviousMenu] = useState(false);

  const handleBackClick = () => {
    setIsPreviousMenu(!isPreviousMenu);
  };

  return (
    <header
      role="contentinfo"
      ref={ref}
      className={navigationClasses}
      {...props}
    >
      <div className="header--content s-box-page-default-h s-box-page-small-v s-center">
        <div className="header--header">
          <div className="header--logo">
            <Image
              src="./logo.svg"
              alt="University Libraries"
              width={270}
              height={81}
            />
          </div>
        </div>
        <input
          type="checkbox"
          className="header--menu-toggle"
          id="menu-toggle"
          hidden
        ></input>
        <label htmlFor="menu-toggle" className="menu-toggle-container">
          <div className="menu-toggle-icon"></div>
        </label>

        <div className="header--rows">
          {/* main navigtaion menu */}
          <div className="header--row-main">
            <nav aria-labelledby="" className="">
              <p className="sr-only">
                Expand main navigation buttons to view related content groups
                and associated links.
              </p>
              <ul className="header--menu-main">
                <li className="header--menu-main-item">
                  <a href="/" className="t-body-small t-interactive-sub">
                    Find, Borrow, Request
                  </a>
                  <button
                    onClick={handleBackClick}
                    className="back-button"
                    id="back-button"
                  >
                    <div className="i-chevron-down"></div>
                  </button>
                  <div
                    className={`header--menu-main-dropdown-container menu-container ${
                      isPreviousMenu ? "previous-menu" : ""
                    }`}
                    id="menu-container"
                  >
                    <ul className="header--menu-main-sub s-box-large-v s-box-large-h t-body-small">
                      <li>
                        <button
                          onClick={handleBackClick}
                          className="back-button t-label"
                          id="back-button"
                        >
                          <div className="i-chevron-down"></div>
                          Back
                        </button>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="sub-menu-title t-interactive-sub ani-underline c-underline-primary"
                        >
                          Find, Borrow, Request
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="sub-menu-title ani-underline c-underline-primary"
                        >
                          Sub Menu Item 1
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          {/* sub navigation menu */}
          <div className="header--row-sub">
            <nav aria-labelledby="" className="">
              <p className="sr-only">
                Expand sub navigation buttons to view related content groups and
                associated links.
              </p>
              <ul className="header--menu-sub">
                <li className="header--menu-sub-item">
                  <a href="/" className="t-label">
                    Locations & Hours
                  </a>
                  <input
                    type="checkbox"
                    id="sub-menu-item-1"
                    className="menu-item-input"
                    hidden
                  ></input>
                  <label htmlFor="sub-menu-item-1" className="menu-item-label">
                    <span>
                      <div className="i-chevron-down"></div>
                    </span>
                  </label>
                  <div className="header--menu-sub-dropdown-container">
                    <ul className="header--menu-sub-sub s-box-large-v s-box-large-h">
                      <li>
                        <a
                          href="/"
                          className="ani-underline c-underline-primary t-label"
                        >
                          Sub Menu Item 1
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
