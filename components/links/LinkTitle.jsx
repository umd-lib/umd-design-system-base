import React, { forwardRef } from "react";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_LINK_CLASSES =
  "link--title c-content-primary c-underline-secondary ani-underline t-title-medium";

const LinkTitle = forwardRef(({ children, className, ...props }, ref) => {
  const linkClasses = cn(BASE_LINK_CLASSES, className);

  return (
    <a ref={ref} className={linkClasses} {...props}>
      {children}
    </a>
  );
});

LinkTitle.displayName = "Link - Title";

export default LinkTitle;
