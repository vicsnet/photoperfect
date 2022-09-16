import React from "react";
import bgi from "../images/Component 2 (1).png";
import bg2 from "../images/Rectangle 7.png";
import Navbar from "./Navbar";

const SomeElse = () => {
  return (
    <div className="bg-[#D9D9D9] mb-0 ">
      <Navbar />
      <div className="flex justify-end bg-[#D9D9D9]">
        <img
          src={bgi}
          alt=""
          className="absolute w-[190px] lg:w-[400px] mt-[-100px] bg-[#D9D9D9]"
        />
      </div>
      <div className="relative w-[90%] mx-auto">
        <h3
          className="text-center text-[24px] md:text-[32px] font-bold mt-[38px] pb-[60px] leading-[46.4px] tracking-[1px]"
          style={{ color: "rgba(29, 2, 63, 1)" }}
        >
          Let's get to know you
        </h3>
        <div className=" mx-auto gap-[30px] md:gap-[72px] justify-center flex flex-col sm:flex-row relative items-center z-[1] ">
          <div
            className=" px-[5%] xs:px-[50px] sm:px-[55px] md:px-[67px] py-[49px] rounded-[16px] shadow-xl hover:shadow-2xl cursor-pointer "
            style={{
              background: "rgba(255, 255, 255, 1)",
            }}
          >
            <form>
              <input
                type="text"
                placeholder="What’s your name?"
                className="h-[60px] w-[298px] sm:w-[500px] xs:w-[350px] md:w-[600px] rounded-[12px] mb-[20px] outline-none bg-[#F8F8F8] text-[16px] pl-[16px] text-[#828282]"
              />{" "}
              <br />
              <input
                type="email"
                placeholder="What’s your Email?"
                className="h-[60px] w-[298px] sm:w-[500px] xs:w-[350px] md:w-[600px] rounded-[12px] mb-[20px] outline-none bg-[#F8F8F8] text-[16px] pl-[16px] text-[#828282]"
              />
              <br />
              <button className="bg-[#A560FE] px-[75px] py-[16.5px] rounded-[6px] text-[14px] text-[#FFFFFF] mt-[20px]">
                Continue
              </button>
              <p className="hidden md:flex font-light text-[#A9A9A9] text-[13px] mt-[26px]">
                By continuing, you indicate that you have read and agree to our
                Terms of Use & Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#D9D9D9]">
        <img
          src={bg2}
          alt=""
          className="absolute w-[190px] md:w-[280px] lg:w-[280px] bg-[#D9D9D9]"
        />
        <div className="bg-[#D9D9D9] h-[150px] md:h-[220px]"></div>{" "}
      </div>
    </div>

    // </div>
  );
};

export default SomeElse;
