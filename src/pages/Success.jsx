import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import icon from "../images/angle-right.png";
import Animate from "../images/93127-success-animation-without-background.gif";

const Success = () => {
  return (
    <div className="">
      <div className="pb-[30.5px]">
        <Navbar />
      </div>

      <div className="bg-[#D9D9D9] pb-[25.5px] ">
        <div className="w-[90%] mx-auto relative ">
          <div
            className="text-[12px] leading-[14.52px] font-light pt-[30px] mb-[25.5px] flex justify-between"
            style={{ color: "rgba(102, 102, 102, 1)" }}
          >
            <ul className="flex gap-2 pt-[20px]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <Link to="/success">Success</Link>
              </li>
            </ul>
          </div>
          <div
            className="rounded-2xl relative "
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="w-[90%] mx-auto pb-[56px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Animate}
                  alt=""
                  className=" w-[200px] h-[200px] md:w-[350px] md:h-[350px] mt-[27px] mb-[30px] md:mb-[58px]"
                />
                <h3 className="text-[16px] md:text-[24px] font-normal leading-[29.04px] text-[#000000] mb-[11px] md:mb-[18px]">
                  Thank you for your order.
                </h3>
                <span className="text-[14px] md:text-[16px] font-light text-[#000000] flex gap-[9px] mb-[38px]">
                  Order Number:
                  <p className="text-[#666666]">234566</p>
                </span>
                <button className="font-bold text-[14px] outline-none px-[45px] md:px-[91px] py-[16.5px] text-[#FFFFFF] bg-[#A560FE] rounded-[6px]">
                  Homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
