import React, { useState } from "react";
import openIcon from "../images/Group 35539.png";
import closeIcon from "../images/Group 35538.png";

const Accordion = ({ title, details, id }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className=" pb-[29px]" key={id}>
        <div
          className={
            !isActive
              ? "rounded-[16px] border-[1px] shadow-lg"
              : " border-[2px] border-[#A560FE] rounded-[16px]"
          }
          onClick={() => setIsActive(!isActive)}
        >
          <div className="w-[90%] mx-auto ">
            <div className="flex justify-between pt-[15px] pb-[15px]">
              <p
                className="flex  text-[16px] items-center md:text-[22px] font-medium"
                style={{ color: "rgba(51, 51, 51, 1)" }}
              >
                {title}
              </p>
              <span>
                {!isActive ? (
                  <img
                    src={openIcon}
                    alt=""
                    className="flex items-center w-[60px] md:w-[40px] cursor-pointer"
                    key={id}
                  />
                ) : (
                  <img
                    src={closeIcon}
                    alt=""
                    className="flex items-center justify-center mx-auto w-[40px] cursor-pointer"
                  />
                )}
              </span>
            </div>
            {isActive && (
              <p
                className={
                  !isActive
                    ? "hidden"
                    : " flex pt-[17px] text-[14px] md:text-[18px] leading-[30px] w-[92%] font-normal pb-[47.26px]"
                }
              >
                {details}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
