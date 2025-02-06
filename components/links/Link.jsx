import React, { forwardRef } from "react";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Link variants configuration
const LINK_VARIANTS = {
  title:
    "link--title c-content-primary c-underline-secondary ani-underline t-title-medium",
  body: "link--body c-content-interactive-secondary d-underline ani-default t-body-medium",
};

const BASE_LINK_CLASSES = "";

const Link = forwardRef(
  ({ children, className, variant = "title", ...props }, ref) => {
    const linkClasses = cn(
      BASE_LINK_CLASSES,
      LINK_VARIANTS[variant],
      className
    );

    switch (variant) {
      case "title":
      default:
        return (
          <h1>
            <a ref={ref} className={linkClasses} {...props}>
              {children}
            </a>
          </h1>
        );
      case "body":
        return (
          <a ref={ref} className={linkClasses} {...props}>
            {children}
          </a>
        );
    }
  }
);

Link.displayName = "Link";

export default Link;
