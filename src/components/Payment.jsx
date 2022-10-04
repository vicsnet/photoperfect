import React from 'react'
import Line from "../images/Line 4.png";
import { BsQuestionCircle } from "react-icons/bs";

const Payment = () => {
  return (
    <div className="">
      <form>
        <label htmlFor="" className="text-[16px] text-[#718096] ">
          Name on card
        </label>{" "}
        <br />
        <input
          type="text"
          placeholder="Enter your full name"
          className="text-[16px] text-[#828282] font-light tracking-[1px] w-[100%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px]"
        />{" "}
        <br />
        <div className="mt-[30px]">
          <label htmlFor="" className="text-[16px] text-[#718096] ">
            Card number
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="1234  -  5678  -  91011 -  1213"
            className="text-[16px] text-[#828282] font-light tracking-[1px] w-[100%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px]"
          />{" "}
        </div>
        <br />
        <div className="flex md:flex-row flex-col gap-4 mt-[30px]">
          <div className=" w-[80%] md:w-[50%]">
            <label htmlFor="" className="text-[16px] text-[#718096] ">
              Expiry date
            </label>
            <br />
            <div className="flex  gap-4">
              <input
                type="text"
                placeholder="03"
                className="text-[16px] text-[#828282] font-light tracking-[1px] w-[38%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px]"
              />{" "}
              <img src={Line} alt="" className="w-[8px] h-[30px] my-auto" />
              <input
                type="text"
                placeholder="24"
                className="text-[16px] text-[#828282] font-light tracking-[1px] w-[38%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px]"
              />
            </div>
          </div>
          <div className=" w-[80%] md:w-[50%] items-left">
            <label htmlFor="" className="text-[16px] text-[#718096] flex  ">
              CVC <BsQuestionCircle size={16} className="ml-[8px]" />
            </label>
            <br />
            <input
              type="text"
              placeholder="345"
              name=""
              id=""
              className="text-[16px] text-[#828282] font-light tracking-[1px] w-[100%] h-[60px] pl-[16px] mt-[-10px] bg-[#F8F8F8] outline-none rounded-[12px] pr-[16px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment