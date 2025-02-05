import React, { forwardRef } from "react";
import "./CardStandard.css";

import ButtonSecondary from "../buttons/ButtonSecondary";
import LinkTitle from "../links/LinkTitle";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_CARD_CLASSES = "card-standard";

const CardStandard = forwardRef(
  (
    {
      title,
      eyebrow,
      description,
      date,
      link,
      variant = "standard",
      className,
      ...props
    },
    ref
  ) => {
    const cardClasses = cn(BASE_CARD_CLASSES, className);

    return (
      <div role="contentinfo" ref={ref} className={cardClasses} {...props}>
        <div className="card--image">
          <img src="https://picsum.photos/1600/900" alt="Example Image" />
        </div>
        <div className="card--content s-box-small-v s-box-small-h">
          <div className="card--title">
            <div className="card--eyebrow t-eyebrow s-stack-small">
              <p>{eyebrow}</p>
            </div>

            <h3 className="card--headline s-stack-default">
              <LinkTitle>{title}</LinkTitle>
              {/* <Link variant="title">{title}</Link>
              <a class="link--title c-content-primary c-underline-secondary ani-underline t-title-medium">
                {title}
              </a> */}
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

CardStandard.displayName = "Card - Standard";

export default CardStandard;
