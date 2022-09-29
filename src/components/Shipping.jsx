import React from 'react'

const Shipping = () => {
  return (
    <div className="">
      <form>
        <label htmlFor="" className="text-[16px] text-[#718096] ">
          Full name
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
            Email
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            className="text-[16px] text-[#828282] font-light tracking-[1px] w-[100%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px]"
          />{" "}
        </div>
        <br />
        <div className="mt-[0px]">
          <label htmlFor="" className="text-[16px] text-[#718096] ">
            Address
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your address"
            className="text-[16px] text-[#828282] font-light tracking-[1px] w-[100%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px]"
          />{" "}
          <br />
        </div>
        <div className="flex gap-4 mt-[30px]">
          <div className=" w-[50%]">
            <label htmlFor="" className="text-[16px] text-[#718096] ">
              State
            </label>
            <br />

            <select
              name="cars"
              id="cars"
              form="carform"
              className="text-[16px] text-[#828282] font-light tracking-[1px] w-[100%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px] pr-[16px]"
            >
              <option value="volvo">Lagos</option>
              <option value="saab">Kaduna</option>
              <option value="opel">Abuja</option>
              <option value="audi">Oyo</option>
            </select>
          </div>
          <div className="w-[50%] items-left">
            <label htmlFor="" className="text-[16px] text-[#718096] ">
              City
            </label>
            <br />

            <select
              name="cars"
              id="cars"
              form="carform"
              className="text-[16px] text-[#828282] font-light tracking-[1px] w-[100%] h-[60px] pl-[16px] mt-[13px] bg-[#F8F8F8] outline-none rounded-[12px] pr-[16px]"
            >
              <option value="volvo">Lagos</option>
              <option value="saab">Kaduna</option>
              <option value="opel">Abuja</option>
              <option value="audi">Oyo</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Shipping