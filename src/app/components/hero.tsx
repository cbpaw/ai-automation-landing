import React from "react";
import Image from "next/image";
import logo from "../public/images/brands/ayroui-1.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative pt-[120px] lg:pt-[150px] pb-[110px] bg-white"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 px-4">
            <div className="hero-content">
              <h1 className="text-dark font-bold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px] leading-snug mb-3">
                Industrial Efficiency <br />
                with AI-Powered Solutions <br />
              </h1>
              <p className="text-base mb-8 text-body-color max-w-[480px]">
                In the next five years, AI is set to revolutionize how
                industrial operations are managed, from energy networks to
                mechanical systems. By integrating our cutting-edge AI
                solutions, your company can harness unparalleled efficiency,
                optimize resource use, and stay ahead of the competition. Ready
                to future-proof your operations?
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-lg"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-base font-normal text-body-color hover:text-primary"
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <rect
                          x="6.90906"
                          y="13.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="10.1818"
                          y="6"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Download Brochure
                  </a>
                </li>
              </ul>
              <div className="clients pt-16">
                <p className="font-normal text-xs flex items-center text-body-color mb-2">
                  Some Of Our Clients
                  <span className="w-8 h-[1px] bg-body-color inline-block ml-2"></span>
                </p>
                <div className="flex items-center">
                  <div className="w-full py-3 mr-4">
                    <Image src="/images/brands/ayroui-1.svg" alt="ayroui" width={100} height={50} />
                  </div>
                  <div className="w-full py-3 mr-4">
                    <img src="images/brands/graygrids-1.svg" alt="graygrids" />
                  </div>
                  <div className="w-full py-3 mr-4">
                    <img src="images/brands/uideck-1.svg" alt="uideck" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/12 px-4"></div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="lg:text-right lg:ml-auto">
              <div className="relative inline-block z-10 pt-11 lg:pt-0">
                <img
                  src="images/hero/hero-image-01.png"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
