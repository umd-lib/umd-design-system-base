import React, { forwardRef } from "react";
import "./ButtonPrimary.css";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_BUTTON_CLASSES =
  "button--primary t-body-small t-interactive-sub c-content-interactive-primary c-bg-interactive-primary ani-background";

const ButtonPrimary = forwardRef(({ children, className, ...props }, ref) => {
  const buttonClasses = cn(BASE_BUTTON_CLASSES, className);

  return (
    <button ref={ref} className={buttonClasses} {...props}>
      {children}
    </button>
  );
});

ButtonPrimary.displayName = "Button - Primary";

export default ButtonPrimary;
