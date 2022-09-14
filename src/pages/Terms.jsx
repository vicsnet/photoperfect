import React from "react";
import Navbar from "../components/Navbar";
import bgi from "../images/Component 2 (1).png";
import bg2 from "../images/Component 3 (3).png";
import icon from "../images/angle-right.png";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <div>
        <div className="flex justify-end">
          <img src={bgi} alt="" className="absolute w-[190px] lg:w-[500px]" />
        </div>
        <Navbar />
        <div className="w-[90%] mx-auto relative pb-[100px]">
          <div
            className="text-[12px] leading-[14.52px] font-light mt-[53.5px] mb-[25.5px]"
            style={{ color: "rgba(102, 102, 102, 1)" }}
          >
            <ul className="flex gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <Link to="/terms">Term of use</Link>
              </li>
            </ul>
          </div>
          <div
            className="rounded-2xl z-30 relative "
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="w-[90%] mx-auto   ">
              <h3
                className="text-[20px] md:text-[36px] font-bold pt-[52px]"
                style={{ color: "rgba(51, 51, 51, 1)" }}
              >
                Term Of Use
              </h3>
              <p
                className="text-[14px] md:text-[20px] leading-[24.2px] pb-[40px]"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                May 2020
              </p>
              <p
                className="text-16px md:text-[18px] leading-[30px] font-normal pb-[89px]"
                style={{ color: " rgba(51, 51, 51, 1)" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <img
            src={bg2}
            alt=""
            className="absolute w-[200px] mt-[-300px] md:w-[300px] md:mt-[-450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Terms;
