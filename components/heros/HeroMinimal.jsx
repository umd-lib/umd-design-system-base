import React, { forwardRef } from "react";
import "./HeroMinimal.css";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Link variants configuration
const HERO_VARIANTS = {
  image: "",
  noimage: "",
};

const HERO_THEME = {
  light: "",
  dark: "dark-theme",
};

const BASE_HERO_CLASSES = "hero--minimal c-bg-primary c-content-primary";

const HeroMinimal = forwardRef(
  (
    {
      title,
      eyebrow,
      description,
      className,
      variant = "image",
      theme = "light",
      ...props
    },
    ref
  ) => {
    const heroClasses = cn(
      BASE_HERO_CLASSES,
      HERO_VARIANTS[variant],
      HERO_THEME[theme],
      className
    );

    switch (variant) {
      case "image":
      default:
        return (
          <div className={heroClasses} ref={ref} {...props}>
            <div className="hero--image">
              <img
                slot="image"
                src="https://brandportal.umd.edu/m/4676e3ae92de16da/Hero_web-Students_Mall_09212021_JC_9932.jpg"
                alt="Students outdoors on the Mall near ODK Fountain"
              />
            </div>
            <div className="hero--container s-box-page-default-h s-box-page-default-v s-center">
              <div className="hero--content s-box-large-h">
                <p className="hero--eyebrow c-content-secondar t-eyebrow s-stack-small">
                  {eyebrow}
                </p>
                <h1 className="hero--headline t-display s-stack-default">
                  {title}
                </h1>
                <p className="hero--description c-content-secondary t-body-medium">
                  {description}
                </p>
              </div>
            </div>
          </div>
        );
      case "noimage":
        return (
          <div className={heroClasses} ref={ref} {...props}>
            <div className="hero--image"></div>
            <div className="hero--container s-box-page-default-h s-box-page-default-v s-center">
              <div className="hero--content text-only s-box-large-h">
                <p className="hero--eyebrow c-content-secondar t-eyebrow s-stack-small">
                  {eyebrow}
                </p>
                <h1 className="hero--headline t-display s-stack-default">
                  {title}
                </h1>
                <p className="hero--description c-content-secondary t-body-medium">
                  {description}
                </p>
              </div>
            </div>
          </div>
        );
    }
  }
);

HeroMinimal.displayName = "Hero - Minimal";

export default HeroMinimal;
