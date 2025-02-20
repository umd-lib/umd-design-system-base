"use client";

import React, { forwardRef, useState } from "react";
import "./Navigation.css";
import Image from "next/image";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Navigation = forwardRef(({ children, className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleBackClick = () => {
    setActiveSubmenu(null);
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (menuId) => {
    setActiveSubmenu(activeSubmenu === menuId ? null : menuId);
  };

  const mainMenuItems = [
    {
      id: "find-borrow",
      title: "Find, Borrow, Request",
      subItems: [
        { title: "Find Materials", href: "/" },
        { title: "Access Online Resources", href: "/" },
        { title: "Borrow and Return", href: "/" },
        { title: "Request Items for Pick Up or Delivery", href: "/" },
        { title: "Request Digital Copies or Duplication", href: "/" },
        { title: "Request Onsite Access to Special Collections", href: "/" },
        { title: "Suggest a Title for Purchase", href: "/" },
        { title: "Course Reserves", href: "/" },
        { title: "Interlibrary Loan", href: "/" },
      ],
    },
    {
      id: "visit",
      title: "Visit & Study",
      subItems: [
        { title: "Our Libraries", href: "/" },
        { title: "Find a Space", href: "/" },
        { title: "Technology", href: "/" },
        { title: "Visit Special Collections", href: "/" },
      ],
    },
    {
      id: "research",
      title: "Research & Learning",
      subItems: [
        { title: "Meet Your Subject Specialist", href: "/" },
        { title: "Research Services", href: "/" },
        { title: "Events & Workshops", href: "/" },
        { title: "Teaching and Instruction", href: "/" },
        { title: "Open Scholarship Services", href: "/" },
        { title: "Data Services", href: "/" },
      ],
    },
    {
      id: "collecitons",
      title: "Collections",
      subItems: [
        { title: "Collections Overview", href: "/" },
        { title: "Digital Collections and Repositories", href: "/" },
        { title: "Government Information", href: "/" },
        { title: "Special Collections", href: "/" },
        { title: "University Archives", href: "/" },
      ],
    },
    {
      id: "about",
      title: "About",
      subItems: [
        { title: "Overviews", href: "/" },
        { title: "Contact Us", href: "/" },
        { title: "Our Organization", href: "/" },
        { title: "Strategic Goals and Initiatives", href: "/" },
        { title: "Collaborations and Innovations", href: "/" },
        { title: "Inclusion, Diversity, Equity, and Accessibility", href: "/" },
        { title: "Careers", href: "/" },
        { title: "Awards", href: "/" },
        { title: "Support the Libraries", href: "/" },
        { title: "Policies and Safety", href: "/" },
        { title: "News", href: "/" },
        { title: "Events and Workshops", href: "/" },
      ],
    },
  ];

  const secMenuItems = [
    {
      id: "locations",
      title: "Locations & Hours",
      href: "/",
      subItems: [
        { title: "Main Library", href: "/" },
        { title: "Science Library", href: "/l" },
      ],
    },
    {
      id: "system",
      title: "System Status",
      href: "/",
      subItems: [
        { title: "Main Library", href: "/" },
        { title: "Science Library", href: "/" },
      ],
    },
    {
      id: "help",
      title: "Get Help",
      href: "/",
      subItems: [
        { title: "Main Library", href: "/" },
        { title: "Science Library", href: "/" },
      ],
    },
    {
      id: "info",
      title: "Info For",
      href: "/",
      subItems: [
        { title: "Main Library", href: "/" },
        { title: "Science Library", href: "/" },
      ],
    },
    {
      id: "account",
      title: "My Accounts",
      href: "/",
      subItems: [
        { title: "Main Library", href: "/" },
        { title: "Science Library", href: "/" },
      ],
    },
  ];

  return (
    <header
      role="contentinfo"
      ref={ref}
      className={cn("navigation", className)}
      {...props}
    >
      <div className="navigation__content s-box-page-default-h s-box-page-small-v s-center">
        <div className="navigation__header">
          <div className="navigation__logo">
            <Image
              src="./logo.svg"
              alt="University Libraries"
              width={270}
              height={81}
            />
          </div>
        </div>

        <button
          className={`navigation__menu-button ${isOpen ? "is-active" : ""}`}
          onClick={handleMenuClick}
          aria-expanded={isOpen}
          aria-controls="navigation"
        >
          <span className="navigation__menu-icon"></span>
        </button>

        <div className={`navigation__rows ${isOpen ? "is-open" : ""}`}>
          {/* main navigation */}
          <div className="navigation__row-main">
            <nav aria-label="Main navigation" className="navigation__main-menu">
              <ul className="navigation__menu-list">
                {mainMenuItems.map((item) => (
                  <li key={item.id} className="navigation__menu-item">
                    <a href={`/${item.id}`} className="navigation__menu-link">
                      {item.title}
                    </a>
                    <button
                      onClick={() => handleSubmenuClick(item.id)}
                      className="navigation__submenu-button"
                      aria-expanded={activeSubmenu === item.id}
                      aria-controls={`submenu-${item.id}`}
                    >
                      <span className="i-chevron-down"></span>
                    </button>
                    <div
                      className={`navigation__submenu ${isOpen ? "is-open" : ""}
                      ${activeSubmenu === item.id ? "is-active" : ""}`}
                      id={`submenu-${item.id}`}
                    >
                      <div className="navigation__submenu-header">
                        <button
                          onClick={handleBackClick}
                          className="navigation__back-button"
                        >
                          <span className="i-chevron-down"></span>
                          <p className="t-label ani-underline c-underline-secondary">
                            Back
                          </p>
                        </button>
                      </div>
                      <div className="navigation__submenu-content">
                        <div className="navigation__submenu-title">
                          <a href={`/${item.id}`}>{item.title}</a>
                        </div>

                        <ul className="navigation__submenu-list">
                          {item.subItems.map((subItem, index) => (
                            <li
                              key={index}
                              className="navigation__submenu-item"
                            >
                              <a
                                href={subItem.href}
                                className="navigation__submenu-link ani-underline c-underline-primary t-body-small"
                              >
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* sec navigation */}
          <div className="navigation__row-sec">
            <nav
              aria-label="Secondary navigation"
              className="navigation__sec-menu"
            >
              <ul className="navigation__secmenu-list">
                {secMenuItems.map((item) => (
                  <li key={item.id} className="navigation__menu-item">
                    <a href={item.href} className="navigation__menu-link">
                      {item.title}
                    </a>
                    <button
                      onClick={() => handleSubmenuClick(item.id)}
                      className="navigation__submenu-button"
                      aria-expanded={activeSubmenu === item.id}
                      aria-controls={`submenu-${item.id}`}
                    >
                      <span className="i-chevron-down"></span>
                    </button>
                    <div
                      className={`navigation__submenu ${isOpen ? "is-open" : ""}
                      ${activeSubmenu === item.id ? "is-active" : ""}`}
                      id={`submenu-${item.id}`}
                    >
                      <div className="navigation__submenu-header">
                        <button
                          onClick={handleBackClick}
                          className="navigation__back-button"
                        >
                          <span className="i-chevron-down"></span>
                          <p className="t-label ani-underline c-underline-secondary">
                            Back
                          </p>
                        </button>
                      </div>
                      <div className="navigation__submenu-content">
                        <div className="navigation__submenu-title">
                          <a href={item.href}>{item.title}</a>
                        </div>

                        <ul className="navigation__submenu-list">
                          {item.subItems.map((subItem, index) => (
                            <li
                              key={index}
                              className="navigation__submenu-item"
                            >
                              <a
                                href={subItem.href}
                                className="navigation__submenu-link ani-underline c-underline-primary t-body-small"
                              >
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="navigation__site-search">
              <a href={"/"} className="">
                Search
              </a>
              <button className="navigation__site-search-button">
                <span className="i-search"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
