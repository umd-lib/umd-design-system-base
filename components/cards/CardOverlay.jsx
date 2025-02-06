import React, { forwardRef } from "react";
import "./CardOverlay.css";

import ButtonSecondary from "../buttons/ButtonSecondary";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_CARD_CLASSES = "card--overlay c-bg-secondary c-content-primary";

const CardOverlay = forwardRef(
  ({ title, eyebrow, description, date, link, className, ...props }, ref) => {
    const cardClasses = cn(BASE_CARD_CLASSES, className);

    return (
      <div role="contentinfo" ref={ref} className={cardClasses} {...props}>
        <div className="card--content s-box-small-v s-box-small-h">
          <div className="card--title">
            <div className="card--eyebrow t-eyebrow s-stack-small">
              <p>{eyebrow}</p>
            </div>

            <h3 className="card--headline s-stack-default t-title-medium">
              <a>{title}</a>
            </h3>
          </div>
          <div className="card--details">
            <div className="card--text t-body-small c-content-secondary s-stack-default">
              <p>{description}</p>
            </div>

            <div className="card--date t-label c-content-tertiary s-stack-large">
              <time dateTime="2025-01-28">{date}</time>
            </div>
          </div>
          <ButtonSecondary>{link}</ButtonSecondary>
        </div>
      </div>
    );
  }
);

CardOverlay.displayName = "Card - Overlay";

export default CardOverlay;
