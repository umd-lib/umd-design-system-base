import React, { forwardRef } from "react";
import "./Footer.css";
import Image from "next/image";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_FOOTER_CLASSES = "c-bg-dark-primary c-content-dark-primary";

const Footer = forwardRef(({ children, className, ...props }, ref) => {
  const footerClasses = cn(BASE_FOOTER_CLASSES, className);

  return (
    <footer role="contentinfo" ref={ref} className={footerClasses} {...props}>
      <div className="footer--content s-box-page-default-h s-box-page-default-v s-center l-flex-col">
        <div className="footer--header s-stack-large l-flex-col">
          <div className="footer--logo">
            <Image
              src="./logo-dark.svg"
              alt="University Libraries"
              width={270}
              height={81}
            />
          </div>
          <div className="footer--title">
            <p className="t-title-small c-content-dark-secondary">
              University Libraries
            </p>
            <address className="t-body-medium">
              <p className="c-content-dark-primary">
                McKeldin Library, 7649 Library Lane, College Park, MD 20742-7011
              </p>
              <a href="tel:+13014050800" className="c-content-dark-primary">
                301.405.0800
              </a>
            </address>
          </div>
        </div>
        <div className="footer--columns t-body-small l-flex-col">
          <div className="footer--columns-main">
            <nav
              aria-labelledby="our-libraries-heading"
              className="s-stack-large"
            >
              <p
                id="our-libraries-heading"
                className="t-title-small c-content-dark-secondary s-stack-default"
              >
                Our Libraries
              </p>
              <ul className="s-box-default-h">
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    McKeldin Library (Main)
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Architecture Library
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Art Library
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Hornbake Library
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Michelle Smith Performing Arts Library
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Priddy Library (Universities at Shady Grove)
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Severn Library
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    STEM Library
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              aria-labelledby="library-info-heading"
              className="s-stack-large"
            >
              <p
                id="library-info-heading"
                className="t-title-small c-content-dark-secondary s-stack-default"
              >
                Library Information
              </p>
              <ul className="s-box-default-h">
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Library Hours
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Libraries' Directory
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Land Acknowledgement
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              aria-labelledby="get-involved-heading"
              className="s-stack-large"
            >
              <p
                id="get-involved-heading"
                className="t-title-small c-content-dark-secondary s-stack-default"
              >
                Get Involved
              </p>
              <ul className="s-box-default-h">
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Support the Libraries
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              aria-labelledby="services-support-heading"
              className="s-stack-large"
            >
              <p
                id="services-support-heading"
                className="t-title-small c-content-dark-secondary s-stack-default"
              >
                Services & Support
              </p>
              <ul className="s-box-default-h">
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Ask a Librarian
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Share Feedback
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Contact a Subject Specialist
                  </a>
                </li>
              </ul>
            </nav>

            <div
              aria-labelledby="stay-connected-heading"
              className="s-stack-large"
            >
              <p
                id="stay-connected-heading"
                className="t-title-small c-content-dark-secondary s-stack-default"
              >
                Stay Connected
              </p>
              <ul className="social-media-list s-box-default-h l-flex-row">
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://instagram.com/umdlibraries"
                    aria-label="Tumblr"
                  >
                    <span className="sr-only">Tumblr</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M18.14 25.2308C15.3586 25.2308 13.2957 23.8054 13.2957 20.3866V14.9165H10.7693V11.9497C13.5507 11.2311 14.7096 8.84375 14.8371 6.76929H17.7228V11.4629H21.0836V14.9049H17.7228V19.668C17.7228 21.0935 18.4413 21.5918 19.5886 21.5918H21.2227V25.2192H18.14V25.2308Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="YouTube"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M25.7293 11.0954C25.4962 10.2162 24.8073 9.52388 23.9339 9.2885C22.3508 8.86157 16 8.86157 16 8.86157C16 8.86157 9.64927 8.86157 8.06619 9.2885C7.19273 9.52388 6.50388 10.2162 6.27081 11.0954C5.84619 12.69 5.84619 16.0154 5.84619 16.0154C5.84619 16.0154 5.84619 19.3408 6.27081 20.9354C6.50388 21.8146 7.19273 22.507 8.06619 22.7423C9.65042 23.1693 16 23.1693 16 23.1693C16 23.1693 22.3508 23.1693 23.9339 22.7423C24.8073 22.507 25.4962 21.8146 25.7293 20.9354C26.1539 19.342 26.1539 16.0154 26.1539 16.0154C26.1539 16.0154 26.1539 12.69 25.7293 11.0954Z"
                        fill="white"
                      />
                      <path
                        id="white"
                        d="M13.9231 19.0351L19.2308 16.0155L13.9231 12.9958V19.0351Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="Mastodon"
                  >
                    <span className="sr-only">Mastodon</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M19.4072 5.32721C19.1142 3.17285 17.216 1.47507 14.9659 1.14609C14.5862 1.0905 13.1479 0.888184 9.81597 0.888184H9.79108C6.45826 0.888184 5.74322 1.0905 5.36359 1.14609C3.1761 1.46596 1.17843 2.9915 0.693751 5.17135C0.460628 6.24489 0.435749 7.43507 0.479057 8.52683C0.540793 10.0925 0.552772 11.6554 0.696516 13.2146C0.79589 14.2504 0.969245 15.2779 1.21528 16.2894C1.676 18.1576 3.54099 19.7123 5.3682 20.3466C7.32449 21.0081 9.42832 21.1178 11.4442 20.6637C11.6659 20.6127 11.8852 20.5535 12.102 20.486C12.5913 20.332 13.1654 20.1598 13.5874 19.8572C13.5932 19.853 13.598 19.8475 13.6013 19.8412C13.6046 19.8349 13.6065 19.8279 13.6067 19.8208V18.3098C13.6066 18.3032 13.605 18.2966 13.6021 18.2906C13.5991 18.2847 13.5948 18.2794 13.5894 18.2753C13.5841 18.2712 13.578 18.2683 13.5714 18.2669C13.5648 18.2654 13.558 18.2655 13.5515 18.267C12.26 18.5721 10.9365 18.725 9.60865 18.7226C7.32349 18.7226 6.70889 17.65 6.53288 17.2035C6.39142 16.8175 6.30158 16.415 6.26567 16.006C6.26531 15.9991 6.26659 15.9923 6.26939 15.986C6.2722 15.9797 6.27649 15.9741 6.28186 15.9698C6.28726 15.9655 6.29361 15.9624 6.3004 15.961C6.30718 15.9595 6.31423 15.9596 6.32096 15.9613C7.59096 16.2644 8.89284 16.4173 10.1993 16.417C10.5135 16.417 10.8268 16.417 11.141 16.4088C12.455 16.3724 13.8399 16.3058 15.1326 16.0561C15.1649 16.0497 15.1971 16.0443 15.2248 16.0361C17.2639 15.6488 19.2045 14.4331 19.4017 11.3546C19.409 11.2334 19.4275 10.0852 19.4275 9.95942C19.4284 9.53201 19.5666 6.92748 19.4072 5.32721ZM16.2688 13.0087H14.1246V7.81418C14.1246 6.7206 13.6639 6.16288 12.7268 6.16288C11.6966 6.16288 11.1806 6.82268 11.1806 8.12584V10.9691H9.04934V8.12584C9.04934 6.82268 8.53242 6.16288 7.50225 6.16288C6.57067 6.16288 6.10534 6.7206 6.10441 7.81418V13.0087H3.96208V7.65653C3.96208 6.56294 4.24436 5.69416 4.80889 5.05015C5.39123 4.40768 6.1551 4.0778 7.10327 4.0778C8.20068 4.0778 9.02998 4.49516 9.58284 5.32903L10.1164 6.21483L10.6508 5.32903C11.2036 4.49516 12.0329 4.0778 13.1285 4.0778C14.0758 4.0778 14.8396 4.40768 15.4238 5.05015C15.9884 5.69354 16.2706 6.56233 16.2706 7.65653L16.2688 13.0087Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="Bluesky"
                  >
                    <span className="sr-only">Bluesky</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                    >
                      <path
                        d="M5.24813 1.21897C7.57637 2.96689 10.0805 6.51098 11 8.41279C11.9196 6.51102 14.4237 2.96689 16.7519 1.21893C18.4319 -0.0422194 21.1539 -1.0181 21.1539 2.08716C21.1539 2.70733 20.7983 7.29683 20.5898 8.04199C19.8649 10.6324 17.2234 11.2931 14.8738 10.8932C18.9809 11.5922 20.0257 13.9076 17.7693 16.2229C13.4839 20.6202 11.61 15.1196 11.1299 13.7102C11.0418 13.4518 11.0006 13.3309 11 13.4337C10.9994 13.3309 10.9582 13.4518 10.8702 13.7102C10.3901 15.1196 8.51617 20.6202 4.23082 16.2229C1.97441 13.9076 3.01915 11.5922 7.12631 10.8932C4.77662 11.2931 2.13519 10.6324 1.4103 8.04196C1.20175 7.29679 0.846191 2.70726 0.846191 2.08712C0.846191 -1.0181 3.56824 -0.0422551 5.24813 1.21897Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="Threads"
                  >
                    <span className="sr-only">Threads</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                    >
                      <path
                        d="M9.17891 21.1539H9.17284C6.15328 21.1336 3.83195 20.1344 2.27158 18.1849C0.885253 16.4486 0.168817 14.034 0.144531 11.0082V10.9939C0.168817 7.96607 0.885253 5.55351 2.2736 3.81721C3.83195 1.86564 6.15531 0.866499 9.17284 0.846191H9.17891H9.18498C11.5002 0.862438 13.4371 1.45948 14.9408 2.62108C16.3554 3.71364 17.3511 5.26921 17.8996 7.24718L16.1793 7.72847C15.2484 4.3777 12.8926 2.66576 9.17689 2.63936C6.72401 2.65764 4.86815 3.43136 3.66195 4.93819C2.53468 6.34958 1.95181 8.38847 1.92955 11C1.95181 13.6116 2.53468 15.6505 3.66397 17.0619C4.87018 18.5707 6.72603 19.3445 9.17891 19.3607C11.391 19.3445 12.8542 18.8266 14.0705 17.6305C15.4589 16.2658 15.4346 14.5904 14.9893 13.571C14.7283 12.9699 14.2527 12.4703 13.6111 12.0906C13.4492 13.2339 13.0869 14.1599 12.5284 14.8585C11.7816 15.7906 10.7231 16.3003 9.38332 16.3735C8.36938 16.4283 7.39187 16.1887 6.63496 15.6952C5.7384 15.1123 5.21423 14.2229 5.15756 13.1872C5.10292 12.1799 5.50161 11.2539 6.27876 10.5797C7.02151 9.93591 8.0658 9.55819 9.30034 9.48711C10.209 9.43635 11.0611 9.47696 11.8463 9.60693C11.7411 8.97942 11.5306 8.47985 11.2149 8.12041C10.7818 7.6249 10.1119 7.37308 9.22546 7.36699C9.21736 7.36699 9.20927 7.36699 9.20117 7.36699C8.48878 7.36699 7.52139 7.56398 6.90615 8.48391L5.42471 7.48681C6.25043 6.25616 7.5902 5.57788 9.20117 5.57788C9.21332 5.57788 9.22546 5.57788 9.2376 5.57788C11.9313 5.59413 13.5362 7.24921 13.6961 10.137C13.7872 10.1755 13.8782 10.2162 13.9673 10.2568C15.2241 10.8498 16.1429 11.7474 16.6266 12.8541C17.2985 14.3955 17.3613 16.9075 15.3212 18.9119C13.7609 20.4431 11.8686 21.1356 9.18498 21.1539H9.17891ZM10.0249 11.262C9.82047 11.262 9.61404 11.2681 9.40153 11.2803C7.8533 11.3676 6.88794 12.0804 6.94258 13.0938C6.99925 14.1559 8.167 14.6493 9.29022 14.5884C10.3224 14.5336 11.6662 14.1295 11.8929 11.4488C11.3221 11.325 10.6968 11.262 10.0249 11.262Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M26.1539 16C26.1539 10.3923 21.6078 5.84619 16 5.84619C10.3923 5.84619 5.84619 10.3923 5.84619 16C5.84619 20.7618 9.12467 24.7575 13.5473 25.855V19.1031H11.4536V16H13.5473V14.663C13.5473 11.207 15.1114 9.60515 18.5044 9.60515C19.1477 9.60515 20.2577 9.73146 20.7118 9.85737V12.67C20.4722 12.6448 20.0559 12.6322 19.5389 12.6322C17.874 12.6322 17.2307 13.263 17.2307 14.9026V16H20.5473L19.9775 19.1031H17.2307V26.0796C22.2585 25.4724 26.1543 21.1915 26.1543 16H26.1539Z"
                        fill="white"
                      />
                      <path
                        id="white"
                        d="M19.9771 19.1031L20.5469 16.0001H17.2303V14.9027C17.2303 13.263 17.8736 12.6323 19.5384 12.6323C20.0555 12.6323 20.4718 12.6449 20.7114 12.6701V9.85745C20.2573 9.73113 19.1473 9.60522 18.504 9.60522C15.1109 9.60522 13.5468 11.2071 13.5468 14.6631V16.0001H11.4531V19.1031H13.5468V25.855C14.3323 26.05 15.154 26.154 15.9996 26.154C16.4159 26.154 16.8265 26.1284 17.2299 26.0796V19.1031H19.9767H19.9771Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="Pinterest"
                  >
                    <span className="sr-only">Pinterest</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        id="white"
                        d="M15.9976 26.1539C21.6041 26.1539 26.149 21.609 26.149 16.0025C26.149 10.396 21.6041 5.85107 15.9976 5.85107C10.3911 5.85107 5.84619 10.396 5.84619 16.0025C5.84619 21.609 10.3911 26.1539 15.9976 26.1539Z"
                        fill="black"
                      />
                      <path
                        d="M12.229 25.4258C12.1023 24.271 12.1908 23.1673 12.4446 22.1014L13.4597 17.7237C13.2949 17.191 13.1678 16.5815 13.1678 15.9724C13.1678 14.5512 13.8532 13.5361 14.9317 13.5361C15.6805 13.5361 16.2262 14.0562 16.2262 15.0588C16.2262 15.3759 16.1629 15.7312 16.0358 16.1373L15.5915 17.5967C15.5026 17.876 15.4649 18.1424 15.4649 18.3706C15.4649 19.3857 16.2388 19.9567 17.2288 19.9567C18.9927 19.9567 20.249 18.1294 20.249 15.7564C20.249 13.117 18.5233 11.4295 15.9728 11.4295C13.1304 11.4295 11.3288 13.2823 11.3288 15.8579C11.3288 16.8982 11.6459 17.8626 12.268 18.5225C12.0649 18.8652 11.8493 18.9285 11.5192 18.9285C10.5041 18.9285 9.53968 17.4947 9.53968 15.5404C9.53968 12.1648 12.2424 9.47512 16.0366 9.47512C20.0208 9.47512 22.5209 12.2542 22.5209 15.6801C22.5209 19.106 20.0846 21.7202 17.4578 21.7202C16.4171 21.7202 15.5034 21.2759 14.8692 20.4764L14.349 22.583C14.0696 23.6741 13.651 24.7022 12.9786 25.6918C13.9304 25.9837 14.8692 26.1486 15.9988 26.1486C21.6073 26.1486 26.1502 21.6056 26.1502 15.9972C26.1502 10.3887 21.6065 5.84619 15.9976 5.84619C10.3887 5.84619 5.84619 10.3892 5.84619 15.9976C5.84619 20.2486 8.46038 23.9157 12.229 25.4258Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>

                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="X (formerly Twitter)"
                  >
                    <span className="sr-only">X (formerly Twitter)</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M17.7195 14.5825L24.4536 6.76929H22.8578L17.0106 13.5534L12.3404 6.76929H6.95386L14.0161 17.028L6.95386 25.2214H8.54973L14.7246 18.0571L19.6567 25.2214H25.0432L17.7191 14.5825H17.7195ZM15.5337 17.1184L14.8181 16.0969L9.12474 7.96838H11.5759L16.1706 14.5283L16.8861 15.5499L22.8586 24.0768H20.4074L15.5337 17.1188V17.1184Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="Wordpress"
                  >
                    <span className="sr-only">Wordpress</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16 6.45543C17.2889 6.45543 18.5387 6.70765 19.7152 7.2054C20.2805 7.44452 20.8261 7.74061 21.3363 8.08544C21.842 8.42692 22.3172 8.81927 22.7495 9.25122C23.1814 9.68316 23.5738 10.1587 23.9152 10.6643C24.2601 11.1746 24.5559 11.7198 24.7953 12.2855C25.2927 13.462 25.5453 14.7118 25.5453 16.0006C25.5453 17.2895 25.293 18.5393 24.7953 19.7158C24.5562 20.2811 24.2601 20.8267 23.9152 21.3369C23.5738 21.8426 23.1814 22.3178 22.7495 22.7501C22.3175 23.182 21.842 23.5744 21.3363 23.9158C20.8261 24.2607 20.2808 24.5565 19.7152 24.7959C18.5387 25.2933 17.2889 25.5459 16 25.5459C14.7112 25.5459 13.4613 25.2936 12.2849 24.7959C11.7195 24.5568 11.174 24.2607 10.6637 23.9158C10.1581 23.5744 9.68286 23.182 9.25061 22.7501C8.81866 22.3181 8.42631 21.8426 8.08483 21.3369C7.74 20.8267 7.44422 20.2814 7.20479 19.7158C6.70735 18.5393 6.45482 17.2895 6.45482 16.0006C6.45482 14.7118 6.70705 13.462 7.20479 12.2855C7.44392 11.7201 7.74 11.1746 8.08483 10.6643C8.42631 10.1587 8.81866 9.68347 9.25061 9.25122C9.68256 8.81927 10.1581 8.42692 10.6637 8.08544C11.174 7.74061 11.7192 7.44483 12.2849 7.2054C13.4613 6.70796 14.7112 6.45543 16 6.45543ZM16 5.84619C10.3923 5.84619 5.84619 10.3923 5.84619 16C5.84619 21.6078 10.3923 26.1539 16 26.1539C21.6078 26.1539 26.1539 21.6078 26.1539 16C26.1539 10.3923 21.6078 5.84619 16 5.84619Z"
                        fill="white"
                      />
                      <path
                        d="M7.53833 15.9998C7.53833 19.3491 9.48454 22.2435 12.3074 23.6149L8.27094 12.5564C7.80152 13.6085 7.53833 14.7731 7.53833 15.9998ZM21.7122 15.573C21.7122 14.5269 21.3366 13.8029 21.0147 13.2393C20.5857 12.5421 20.1833 11.952 20.1833 11.2547C20.1833 10.477 20.7731 9.75297 21.6044 9.75297C21.6419 9.75297 21.6775 9.75754 21.7141 9.75967C20.2086 8.38036 18.2027 7.53809 16 7.53809C13.0437 7.53809 10.4432 9.05508 8.93013 11.3519C9.12874 11.3583 9.31608 11.3623 9.47479 11.3623C10.3597 11.3623 11.7299 11.2547 11.7299 11.2547C12.1859 11.2279 12.2398 11.8981 11.7841 11.952C11.7841 11.952 11.3257 12.0056 10.8157 12.0324L13.8969 21.1978L15.749 15.6443L14.4309 12.0324C13.9749 12.0056 13.5436 11.952 13.5436 11.952C13.0876 11.9252 13.1409 11.2279 13.5972 11.2547C13.5972 11.2547 14.9942 11.3623 15.8258 11.3623C16.7107 11.3623 18.0812 11.2547 18.0812 11.2547C18.5372 11.2279 18.5911 11.8981 18.1351 11.952C18.1351 11.952 17.676 12.0056 17.1667 12.0324L20.2248 21.128L21.0978 18.3621C21.4856 17.1534 21.7128 16.2968 21.7128 15.5727L21.7122 15.573ZM16.1487 16.74L13.6094 24.1169C14.3676 24.3399 15.1693 24.4618 16 24.4618C16.9855 24.4618 17.9307 24.2918 18.8101 23.982C18.7876 23.9457 18.7666 23.9074 18.7495 23.8653L16.1487 16.74ZM23.4254 11.9404C23.4616 12.21 23.4824 12.4991 23.4824 12.8104C23.4824 13.6688 23.3215 14.6339 22.8387 15.8411L20.2543 23.3134C22.7699 21.8466 24.4617 19.1215 24.4617 15.9998C24.4617 14.5288 24.0858 13.1455 23.4254 11.9404Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="Instagram"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M11.7946 5.9172C10.7142 5.96818 9.97647 6.14059 9.33149 6.39403C8.66398 6.65417 8.09821 7.00326 7.53528 7.56822C6.97235 8.13318 6.6257 8.69936 6.36738 9.36789C6.1174 10.0143 5.94803 10.7527 5.90031 11.8336C5.85258 12.9146 5.84202 13.2621 5.8473 16.0195C5.85258 18.7768 5.86477 19.1225 5.91716 20.2057C5.96874 21.2859 6.14055 22.0234 6.39399 22.6686C6.65453 23.3361 7.00322 23.9017 7.56838 24.4648C8.13354 25.028 8.69932 25.3738 9.36947 25.6325C10.0153 25.8821 10.7538 26.0523 11.8346 26.0996C12.9154 26.1469 13.2633 26.1579 16.0198 26.1526C18.7764 26.1473 19.1235 26.1351 20.2065 26.0838C21.2895 26.0324 22.0232 25.8594 22.6686 25.6071C23.3361 25.346 23.9021 24.9979 24.4648 24.4325C25.0275 23.8672 25.374 23.3006 25.6321 22.6317C25.8823 21.9859 26.0522 21.2473 26.0991 20.1673C26.1465 19.0835 26.1576 18.7375 26.1524 15.9805C26.1471 13.2235 26.1347 12.8779 26.0833 11.7951C26.0319 10.7123 25.8599 9.97692 25.6067 9.33133C25.3457 8.66382 24.9975 8.09866 24.4325 7.53512C23.8675 6.97158 23.3005 6.62533 22.6318 6.36783C21.9856 6.11784 21.2474 5.94746 20.1667 5.90076C19.0859 5.85405 18.738 5.84207 15.9804 5.84735C13.2229 5.85263 12.8776 5.8644 11.7946 5.9172ZM11.9132 24.2729C10.9232 24.2299 10.3857 24.0654 10.0274 23.9277C9.55305 23.7449 9.21513 23.524 8.85812 23.1704C8.50111 22.8169 8.28179 22.4777 8.09658 22.0043C7.95748 21.6461 7.78994 21.1092 7.74364 20.1192C7.69327 19.0492 7.68271 18.7279 7.67682 16.017C7.67093 13.3062 7.68129 12.9853 7.7282 11.9149C7.77044 10.9257 7.93595 10.3875 8.07343 10.0295C8.2562 9.55452 8.47634 9.2172 8.83071 8.8604C9.18508 8.50359 9.5232 8.28386 9.99698 8.09866C10.3548 7.95894 10.8917 7.79282 11.8813 7.74571C12.9522 7.69494 13.273 7.68479 15.9835 7.6789C18.694 7.67301 19.0156 7.68316 20.0869 7.73028C21.076 7.77333 21.6144 7.93721 21.972 8.07551C22.4466 8.25828 22.7843 8.4778 23.1411 8.83278C23.4979 9.18776 23.7179 9.52466 23.9031 9.99946C24.043 10.3563 24.2091 10.893 24.2558 11.8832C24.3068 12.954 24.3184 13.2751 24.3232 15.9854C24.3281 18.6956 24.3186 19.0175 24.2717 20.0875C24.2284 21.0775 24.0643 21.6153 23.9264 21.9739C23.7437 22.4481 23.5233 22.7862 23.1687 23.1428C22.8142 23.4994 22.4765 23.7191 22.0025 23.9043C21.6451 24.0439 21.1075 24.2104 20.1187 24.2575C19.0479 24.3079 18.7271 24.3184 16.0156 24.3243C13.3041 24.3302 12.9842 24.3192 11.9134 24.2729M20.1908 10.5731C20.1912 10.8142 20.2631 11.0496 20.3973 11.2498C20.5316 11.4499 20.7222 11.6058 20.945 11.6976C21.1678 11.7895 21.4129 11.8132 21.6491 11.7657C21.8854 11.7183 22.1023 11.6018 22.2724 11.4311C22.4426 11.2604 22.5582 11.043 22.6048 10.8066C22.6514 10.5701 22.6268 10.3252 22.5341 10.1027C22.4415 9.88019 22.2849 9.69018 22.0842 9.55668C21.8836 9.42318 21.6479 9.35218 21.4069 9.35266C21.0838 9.3533 20.7742 9.48224 20.5461 9.71112C20.3181 9.93999 20.1903 10.2501 20.1908 10.5731ZM10.7863 16.0101C10.792 18.8898 13.1307 21.2188 16.0097 21.2134C18.8887 21.2079 21.2194 18.8695 21.2139 15.9898C21.2084 13.1102 18.8692 10.7805 15.9898 10.7862C13.1104 10.7919 10.7809 13.1309 10.7863 16.0101ZM12.6152 16.0065C12.6139 15.337 12.8111 14.6823 13.1819 14.1249C13.5528 13.5676 14.0805 13.1327 14.6985 12.8753C15.3164 12.6179 15.9968 12.5495 16.6537 12.6788C17.3105 12.8081 17.9142 13.1293 18.3885 13.6017C18.8628 14.0741 19.1864 14.6766 19.3183 15.3329C19.4502 15.9892 19.3845 16.6699 19.1295 17.2888C18.8746 17.9078 18.4418 18.4373 17.8859 18.8103C17.3301 19.1833 16.6761 19.3831 16.0066 19.3845C15.5621 19.3854 15.1218 19.2987 14.7108 19.1295C14.2998 18.9602 13.9261 18.7116 13.6112 18.398C13.2963 18.0843 13.0462 17.7116 12.8753 17.3013C12.7045 16.891 12.6161 16.451 12.6152 16.0065Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer--columns-secondary">
            <a
              className="footer--columns-secondary-item s-stack-default"
              href="https://fearlesslyforward.umd.edu/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Link to the Fearlessly Forward Brand website"
            >
              <Image
                src="./fearlessly-forward.svg"
                alt="University Libraries"
                width={156}
                height={67}
              />
            </a>
            <div className="footer--columns-secondary-item">
              <Image
                src="./rfdl.svg"
                alt="University Libraries"
                width={37}
                height={33}
              />
              <p className="t-body-small c-content-dark-secondary">
                Regional Federal Depository Library
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--sub c-bg-dark-secondary">
        <div className="footer--sub-content t-label s-box-page-small-v s-box-page-default-h s-center l-flex-col">
          <ul className="l-flex-col">
            <li>
              <a href="/" className="ani-underline c-underline-dark-primary">
                Give Now
              </a>
            </li>
            <li>
              <a href="/" className="ani-underline c-underline-dark-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="ani-underline c-underline-dark-primary">
                Web Accessibility
              </a>
            </li>
          </ul>

          <div>
            <p className="c-content-dark-primary">
              © 2025 UNIVERSITY OF MARYLAND
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
