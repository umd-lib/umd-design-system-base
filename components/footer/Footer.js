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
                <li className="s-stack-small s-inline-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://twitter.com/umdlibraries"
                    aria-label="X (formerly Twitter)"
                  >
                    <span className="sr-only">X (formerly Twitter)</span>
                    <svg
                      title="x icon"
                      id="icon_x"
                      aria-hidden="true"
                      width="17"
                      height="17"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19 17.17"
                    >
                      <path
                        d="m14.96,0h2.91l-6.37,7.27,7.49,9.9h-5.86l-4.59-6-5.25,6H.37l6.81-7.78L0,0h6.01l4.15,5.49L14.96,0h0Zm-1.02,15.43h1.61L5.13,1.65h-1.73l10.54,13.78Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small s-inline-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://facebook.com/umdlibraries"
                    aria-label="Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      title="facebook icon"
                      id="icon_facebook"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.6879 10.4618H8.24862V16.8548C8.24862 16.981 8.35141 17.0833 8.47827 17.0833H11.1245C11.2514 17.0833 11.3542 16.981 11.3542 16.8548V10.4919H13.1484C13.265 10.4919 13.3632 10.4048 13.3765 10.2895L13.649 7.93592C13.6565 7.87117 13.6359 7.80632 13.5923 7.75774C13.5487 7.70912 13.4864 7.68129 13.4209 7.68129H11.3543V6.20594C11.3543 5.7612 11.5949 5.53568 12.0697 5.53568C12.1373 5.53568 13.4209 5.53568 13.4209 5.53568C13.5478 5.53568 13.6506 5.43336 13.6506 5.30718V3.14681C13.6506 3.02059 13.5478 2.91832 13.4209 2.91832H11.5587C11.5456 2.91768 11.5164 2.91663 11.4734 2.91663C11.1503 2.91663 10.0272 2.97974 9.14002 3.79181C8.15704 4.69171 8.32634 5.76656 8.32634 5.95602V7.68124H6.6879C6.56104 7.68124 6.45825 7.78352 6.45825 7.90974V10.2333C6.45825 10.3595 6.56104 10.4618 6.6879 10.4618Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small s-inline-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://instagram.com/umdlibraries"
                    aria-label="Instagram"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      title="instagram icon"
                      id="icon_instagram"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.78248 0.13947C3.92906 0.179735 3.34626 0.315929 2.83677 0.51613C2.30947 0.721624 1.86255 0.997381 1.41787 1.44366C0.973189 1.88994 0.699355 2.33719 0.495303 2.86528C0.297828 3.37589 0.164039 3.95916 0.126341 4.81307C0.0886425 5.66697 0.0803007 5.94144 0.0844716 8.11959C0.0886425 10.2977 0.0982676 10.5708 0.139656 11.4264C0.180402 12.2797 0.316116 12.8623 0.516318 13.372C0.722134 13.8993 0.997572 14.346 1.44402 14.7909C1.89046 15.2357 2.33739 15.5089 2.86677 15.7133C3.3769 15.9104 3.96034 16.0448 4.81408 16.0822C5.66783 16.1196 5.94263 16.1283 8.12014 16.1241C10.2977 16.1199 10.5718 16.1103 11.4273 16.0697C12.2828 16.0291 12.8624 15.8924 13.3722 15.6932C13.8995 15.4869 14.3466 15.212 14.7911 14.7653C15.2357 14.3187 15.5093 13.8712 15.7132 13.3428C15.9109 12.8326 16.0451 12.2492 16.0822 11.3961C16.1196 10.54 16.1284 10.2666 16.1242 8.08879C16.12 5.91096 16.1103 5.63793 16.0697 4.78259C16.0291 3.92724 15.8932 3.34637 15.6932 2.8364C15.487 2.30911 15.2119 1.86267 14.7656 1.41751C14.3193 0.972356 13.8715 0.698845 13.3432 0.495436C12.8328 0.297962 12.2496 0.163372 11.3959 0.126476C10.5421 0.0895803 10.2673 0.0801156 8.08902 0.0842865C5.9107 0.0884573 5.63799 0.0977615 4.78248 0.13947ZM4.87617 14.6393C4.09413 14.6053 3.6695 14.4753 3.38652 14.3666C3.01178 14.2222 2.74485 14.0476 2.46283 13.7684C2.18082 13.4891 2.00757 13.2212 1.86126 12.8472C1.75138 12.5643 1.61903 12.1401 1.58246 11.3581C1.54267 10.5128 1.53433 10.2591 1.52968 8.11766C1.52503 5.97625 1.53321 5.72279 1.57027 4.87723C1.60363 4.09584 1.73437 3.67073 1.84298 3.38792C1.98735 3.0127 2.16125 2.74625 2.44118 2.4644C2.72111 2.18254 2.9882 2.00897 3.36246 1.86267C3.64512 1.7523 4.06926 1.62108 4.85098 1.58387C5.69687 1.54376 5.95033 1.53574 8.09143 1.53109C10.2325 1.52644 10.4866 1.53446 11.3328 1.57167C12.1142 1.60568 12.5395 1.73514 12.822 1.84438C13.1969 1.98876 13.4637 2.16217 13.7455 2.44258C14.0274 2.72299 14.2011 2.98912 14.3474 3.36418C14.4579 3.64603 14.5892 4.07001 14.6261 4.85221C14.6663 5.69809 14.6755 5.95171 14.6793 8.09264C14.6832 10.2336 14.6756 10.4878 14.6386 11.3331C14.6044 12.1151 14.4748 12.5399 14.3659 12.8232C14.2215 13.1978 14.0474 13.4648 13.7673 13.7465C13.4873 14.0282 13.2205 14.2018 12.8461 14.3481C12.5637 14.4583 12.1391 14.5899 11.358 14.6271C10.5121 14.6669 10.2587 14.6752 8.11678 14.6798C5.97487 14.6845 5.72221 14.6758 4.87633 14.6393M11.415 3.81736C11.4153 4.00773 11.4721 4.19374 11.5781 4.35186C11.6841 4.50997 11.8347 4.63308 12.0107 4.70563C12.1867 4.77818 12.3803 4.7969 12.567 4.75942C12.7536 4.72194 12.925 4.62996 13.0593 4.49509C13.1937 4.36023 13.2851 4.18854 13.3218 4.00175C13.3586 3.81496 13.3392 3.62146 13.266 3.44571C13.1928 3.26997 13.0692 3.11987 12.9107 3.01441C12.7522 2.90895 12.5659 2.85287 12.3756 2.85325C12.1203 2.85376 11.8758 2.95561 11.6956 3.13641C11.5155 3.3172 11.4145 3.56214 11.415 3.81736ZM3.986 8.11221C3.9905 10.3869 5.83787 12.2267 8.11212 12.2224C10.3864 12.2181 12.2275 10.3709 12.2232 8.09616C12.2188 5.82145 10.371 3.98114 8.0964 3.98563C5.82183 3.99012 3.98167 5.83781 3.986 8.11221ZM5.43073 8.10932C5.42969 7.58052 5.58547 7.06328 5.87839 6.62302C6.17131 6.18275 6.5882 5.83924 7.07635 5.63591C7.56451 5.43258 8.10199 5.37857 8.62084 5.4807C9.13968 5.58284 9.61659 5.83654 9.99126 6.20972C10.3659 6.5829 10.6215 7.05879 10.7257 7.57723C10.8299 8.09567 10.778 8.63336 10.5766 9.12231C10.3752 9.61126 10.0333 10.0295 9.59424 10.3242C9.15514 10.6188 8.63852 10.7767 8.10972 10.7777C7.75859 10.7784 7.41076 10.71 7.08609 10.5763C6.76141 10.4426 6.46626 10.2462 6.21749 9.99844C5.96871 9.75065 5.77119 9.45627 5.63619 9.13214C5.5012 8.808 5.43138 8.46044 5.43073 8.10932Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="s-stack-small s-inline-small">
                  <a
                    className="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive"
                    href="https://youtube.com/umdlibraries"
                    aria-label="YouTube"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      title="youtube icon"
                      id="icon_youtube"
                      aria-hidden="true"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3855 2.87786C17.1839 2.12192 16.5918 1.52786 15.8384 1.32551C14.4727 0.958374 9 0.958374 9 0.958374C9 0.958374 3.52729 0.958374 2.16307 1.32551C1.40966 1.52786 0.817583 2.12192 0.615904 2.87786C0.25 4.24666 0.25 7.10421 0.25 7.10421C0.25 7.10421 0.25 9.96176 0.615904 11.3306C0.817583 12.0865 1.40966 12.6806 2.16307 12.8829C3.52729 13.25 9 13.25 9 13.25C9 13.25 14.4727 13.25 15.8369 12.8829C16.5903 12.6806 17.1824 12.0865 17.3841 11.3306C17.75 9.96176 17.75 7.10421 17.75 7.10421C17.75 7.10421 17.75 4.24666 17.3841 2.87786H17.3855ZM7.24971 9.73772V4.47069L11.7961 7.10421L7.24971 9.73772Z"
                        fill="white"
                      ></path>
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
