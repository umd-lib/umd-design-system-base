import React, { forwardRef } from "react";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_LINK_CLASSES =
  "link--body c-content-interactive-secondary d-underline t-body-medium";

const LinkBody = forwardRef(({ children, className, ...props }, ref) => {
  const linkClasses = cn(BASE_LINK_CLASSES, className);

  return (
    <a ref={ref} className={linkClasses} {...props}>
      {children}
    </a>
  );
});

LinkBody.displayName = "Link - Body";

export default LinkBody;
