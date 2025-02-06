import React, { forwardRef } from "react";
import "./ButtonSecondary.css";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_BUTTON_CLASSES =
  "button--secondary t-body-small t-interactive-sub c-content-primary c-underline-primary ani-underline l-flex-row";

const ButtonSecondary = forwardRef(({ children, className, ...props }, ref) => {
  const buttonClasses = cn(BASE_BUTTON_CLASSES, className);

  return (
    <a ref={ref} className={buttonClasses} {...props}>
      <div className="i-chevron"></div>
      {children}
    </a>
  );
});

ButtonSecondary.displayName = "Button - Secondary";

export default ButtonSecondary;
