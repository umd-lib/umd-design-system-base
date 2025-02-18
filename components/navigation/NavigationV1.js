// import React, { forwardRef } from "react";
// import "./Navigation.css";
// import Image from "next/image";

// const cn = (...classes) => {
//   return classes.filter(Boolean).join(" ");
// };

// const BASE_NAVIGATION_CLASSES = "";

// const Navigation = forwardRef(({ children, className, ...props }, ref) => {
//   const navigationClasses = cn(BASE_NAVIGATION_CLASSES, className);

//   return (
//     <header
//       role="contentinfo"
//       ref={ref}
//       className={navigationClasses}
//       {...props}
//     >
//       <div className="header--content s-box-page-default-h s-box-page-small-v s-center">
//         <div className="header--header">
//           <div className="header--logo">
//             <Image
//               src="./logo.svg"
//               alt="University Libraries"
//               width={270}
//               height={81}
//             />
//           </div>
//         </div>
//         <input
//           type="checkbox"
//           className="header--navigation-toggle"
//           id="nav-toggle"
//           hidden
//         ></input>
//         <label
//           htmlFor="nav-toggle"
//           className="header--navigation-toggle-container"
//         >
//           <div className="header--navigation-toggle-icon"></div>
//         </label>

//         <div className="header--rows">
//           {/* main navigtaion menu */}
//           <div className="header--row-main">
//             <nav aria-labelledby="" className="">
//               <p className="sr-only">
//                 Expand main navigation buttons to view related content groups
//                 and associated links.
//               </p>
//               <ul className="header--menu-main">
//                 <li className="header--menu-main-item s-inline-large">
//                   <a
//                     href="/"
//                     className="t-body-small t-interactive-sub s-inline-small"
//                   >
//                     Find, Borrow, Request
//                   </a>
//                   <input
//                     type="checkbox"
//                     id="sub-item-1"
//                     className="menu-item-button"
//                     hidden
//                   ></input>
//                   <label
//                     htmlFor="sub-item-1"
//                     className="menu-item-button-label"
//                   >
//                     <span>
//                       <div className="i-chevron-down"></div>
//                     </span>
//                   </label>
//                   <div className="header--menu-main-dropdown-container">
//                     <ul className="header--menu-main-sub s-box-large-v s-box-large-h t-body-small">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Access Online Resources
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Borrow and Return
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Items for Pick Up or Delivery
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Digital Copies or Duplication
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Onsite Access to Special Collections
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Suggest a Title for Purchase
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Course Reserves
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Interlibrary Loan
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-main-item s-inline-large">
//                   <a
//                     href="/"
//                     className="t-body-small t-interactive-sub s-inline-small"
//                   >
//                     Visit & Study
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-main-dropdown-container">
//                     <ul className="header--menu-main-sub s-box-large-v s-box-large-h t-body-small">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Access Online Resources
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Borrow and Return
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Items for Pick Up or Delivery
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Digital Copies or Duplication
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Onsite Access to Special Collections
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Suggest a Title for Purchase
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Course Reserves
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Interlibrary Loan
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-main-item s-inline-large">
//                   <a
//                     href="/"
//                     className="t-body-small t-interactive-sub s-inline-small"
//                   >
//                     Research & Learning
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-main-dropdown-container">
//                     <ul className="header--menu-main-sub s-box-large-v s-box-large-h t-body-small">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Access Online Resources
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Borrow and Return
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Items for Pick Up or Delivery
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Digital Copies or Duplication
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Onsite Access to Special Collections
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Suggest a Title for Purchase
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Course Reserves
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Interlibrary Loan
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-main-item s-inline-large">
//                   <a
//                     href="/"
//                     className="t-body-small t-interactive-sub s-inline-small"
//                   >
//                     Collections
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-main-dropdown-container">
//                     <ul className="header--menu-main-sub s-box-large-v s-box-large-h t-body-small">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Access Online Resources
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Borrow and Return
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Items for Pick Up or Delivery
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Digital Copies or Duplication
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Onsite Access to Special Collections
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Suggest a Title for Purchase
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Course Reserves
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Interlibrary Loan
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-main-item s-inline-large">
//                   <a
//                     href="/"
//                     className="t-body-small t-interactive-sub s-inline-small"
//                   >
//                     About
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-main-dropdown-container">
//                     <ul className="header--menu-main-sub s-box-large-v s-box-large-h t-body-small">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Access Online Resources
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Borrow and Return
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Items for Pick Up or Delivery
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Digital Copies or Duplication
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Request Onsite Access to Special Collections
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Suggest a Title for Purchase
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Course Reserves
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Interlibrary Loan
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           {/* sub navigation menu */}
//           <div className="header--row-sub">
//             <nav aria-labelledby="" className="">
//               <p className="sr-only">
//                 Expand sub navigation buttons to view related content groups and
//                 associated links.
//               </p>
//               <ul className="header--menu-sub l-flex-row">
//                 <li className="header--menu-sub-item">
//                   <a href="/" className="t-label">
//                     Locations & Hours
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-sub-dropdown-container">
//                     <ul className="header--menu-sub-sub s-box-large-v s-box-large-h">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-sub-item">
//                   <a href="/" className="t-label">
//                     System Status
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-sub-dropdown-container">
//                     <ul className="header--menu-sub-sub s-box-large-v s-box-large-h">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-sub-item">
//                   <a href="/" className="t-label">
//                     Get Help
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-sub-dropdown-container">
//                     <ul className="header--menu-sub-sub s-box-large-v s-box-large-h">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-sub-item">
//                   <a href="/" className="t-label">
//                     Info For
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-sub-dropdown-container">
//                     <ul className="header--menu-sub-sub s-box-large-v s-box-large-h">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-sub-item">
//                   <a href="/" className="t-label">
//                     Accounts
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-sub-dropdown-container">
//                     <ul className="header--menu-sub-sub s-box-large-v s-box-large-h">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="header--menu-sub-item" id="site-search">
//                   <a href="/" className="t-label">
//                     Search
//                   </a>
//                   <button>
//                     <div className="i-chevron-down"></div>
//                   </button>
//                   <div className="header--menu-sub-dropdown-container">
//                     <ul className="header--menu-sub-sub s-box-large-v s-box-large-h">
//                       <li>
//                         <a
//                           href="/"
//                           className="ani-underline c-underline-primary"
//                         >
//                           Find Materials
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// });

// Navigation.displayName = "Navigation";

// export default Navigation;
