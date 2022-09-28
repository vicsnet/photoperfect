import React from "react";
import Logo from "../images/Photo perfects  4.png";
import bgi from "../images/Component 2 (1).png";
import bg2 from "../images/Rectangle 7.png";
import Group from "../images/Group (9).png";
import Group2 from "../images/Group (10).png";
import Navbar from "./Navbar";

const Details = () => {
  return (
    <div className="back mb-0 ">
      
      <Navbar />
      <div className="flex justify-end ">
        <img
          src={bgi}
          alt=""
          className="absolute w-[190px] lg:w-[400px] mt-[-100px]  "
        />
      </div>
      <div className="relative">
        <h3
          className="text-center text-[24px] md:text-[32px] font-bold mt-[38px] pb-[60px] leading-[46.4px] tracking-[1px]"
          style={{ color: "rgba(29, 2, 63, 1)" }}
        >
          Who's it for?
        </h3>
        <div className=" mx-auto gap-[30px] md:gap-[72px] justify-center flex flex-col sm:flex-row relative items-center z-[1] ">
          <div
            className=" px-[55px] md:px-[67px] py-[49px] rounded-[16px] shadow-xl hover:shadow-2xl cursor-pointer "
            style={{
              background: "rgba(255, 255, 255, 1)",
            }}
          >
            <img src={Group} alt="" className="w-[191.12px] " />
            <h2 className="pb-[20px] text-20px font-semibold tracking-[1px] leading-[29px] text-center pt-[10px] md:pb-[40px]">
              For my self
            </h2>
          </div>
          <div
            className="px-[55px] md:px-[67px] py-[35px] rounded-[16px] shadow-xl hover:shadow-2xl cursor-pointer"
            style={{
              background: "rgba(255, 255, 255, 1)",
            }}
          >
            <img src={Group2} alt="" className="w-[191.12px]" />
            <h2 className="pb-[20px] text-20px font-semibold tracking-[1px] leading-[29px] text-center pt-[10px] md:pb-[40px]">
              For someone else
            </h2>
          </div>
        </div>
      </div>

      <div className="">
        <img
          src={bg2}
          alt=""
          className="absolute w-[190px] md:w-[280px] lg:w-[280px] "
        />
        <div className=" h-[150px] md:h-[220px]"></div>{" "}
      </div>
    </div>

    // </div>
  );
};

export default Details;
