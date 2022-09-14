import React from "react";
import Logo from "../images/Photo perfects  4.png";
import icon1 from "../images/Icon.png";
import icon2 from "../images/Icon2.png";
import icon3 from "../images/Icon3.png";

const Footer = () => {
  return (
    <div className="mt-[68px]">
      <div className=" w-[90%] mx-auto flex flex-col  xs:flex-row sm:flex-row lg:flex-row justify-between ">
        <div className="">
          <img src={Logo} alt="" className="w-[230px] mb-1" />
          <p
            className="text-[14px] font-light leading-[24px] tracking-[0.3px] w-[55%] ml-[75px] "
            style={{ color: "rgba(51, 51, 51, 1)" }}
          >
            info@photoperfects.com
          </p>
          <p
            className="text-[14px] w-[55%] ml-[75px] font-light leading-[24px] tracking-[0.3px] "
            style={{ color: "rgba(51, 51, 51, 1)" }}
          >
            080123456789
          </p>
        </div>
        <div
          className="text-[16px] lg:text-[18px] leading-[24px]text-left lg:text-center font-bold"
          style={{ color: "rgba(51, 51, 51, 1)" }}
        >
          <ul className="flex flex-col lg:flex-row xs:pt-4 sm:pt-4 md:pt-4 gap-[14px] lg:gap-[37px] lg:items-center pt-[30px] lg:pt-[40px] ">
            <li className="w-auto h-auto lg:items-center ">Privacy Policy</li>
            <li className="w-auto h-auto lg:items-center ">Terms Of Use</li>
            <li className="w-auto h-auto lg:items-center ">FAQs</li>
          </ul>
        </div>
        <div className="flex gap-[52px] xs:gap-6 sm:gap-6 xs:pt-4 sm:pt-4 xs:flex-col sm:flex-col md:flex-row items-center pt-[30px]">
          <a href="#">
            <img src={icon1} alt="" className="w-[40px] " />
          </a>
          <a href="#">
            <img src={icon2} alt="" className="w-[40px]" />
          </a>

          <a href="#">
            <img src={icon3} alt="" className="w-[40px]" />
          </a>
        </div>
      </div>
      <p
        className="pt-[53px] text-center text-[12px] font-normal tracking-[0.26px] pb-[27px] w-[60%] mx-auto"
        style={{ color: "rgba(102, 102, 102, 1)" }}
      >
        © Photo Perfects (by Sanchy Kreations Limited) -2022
      </p>
    </div>
  );
};

export default Footer;
