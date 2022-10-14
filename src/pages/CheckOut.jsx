import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Payment from "../components/Payment";
import Shipping from "../components/Shipping";
import icon from "../images/angle-right.png";
import line from "../images/Line 5.png";
import vect from "../images/Vector (13).png";

const CheckOut = () => {
  const [page, setPage] = useState(0);
  const [getData, setGetData] = useState([]);

  const getDataHandler = (data) => {
    setGetData(data);
  };
  useEffect(() => {
    if (localStorage.getItem("ImageDetails")) {
      const storedList = JSON.parse(localStorage.getItem("ImageDetails"));
      setGetData(storedList);
    }
  }, []);

  const FormTitles = ["Shipping details", "Payment details"];

  const pageDisplay = () => {
    if (page === 0) {
      return <Shipping />;
    } else {
      return <Payment />;
    }
  };
  return (
    <div className="whitespace-nowrap ">
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
                <Link to="/imageupload">Upload images</Link>
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </div>
          <div
            className="rounded-2xl relative "
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="w-[90%] mx-auto pb-[56px]">
              <div className=" pt-[52px] md:flex md:justify-between">
                <div className="md:w-[50%]">
                  <ul className="flex gap-2">
                    <li className="text-[20px] font-medium leading-[24.2px] text-[#A560FE] pr-[9px]">
                      Shipping
                    </li>
                    <li className="flex items-center ">
                      <img src={line} alt="" />
                    </li>
                    <li className="flex items-center">
                      <img
                        src={vect}
                        alt=""
                        className="w-[20px] h-[20px] object-contain"
                      />
                    </li>
                    <li className="flex items-center">
                      <img src={line} alt="" />
                    </li>
                    <li
                      className={
                        page === 1
                          ? "text-[20px] font-medium leading-[24.2px] text-[#A560FE] pl-[9px]"
                          : "text-[20px] font-medium leading-[24.2px] text-[#666666] pl-[9px]"
                      }
                    >
                      Payment
                    </li>
                  </ul>
                  <div className="mt-[54px]">
                    <h1 className="mb-[34px] text-[20px] leading-[24.2px] font-medium text-[#000000]">
                      {FormTitles[page]}
                    </h1>

                    {pageDisplay()}
                  </div>
                </div>

                <div className="md:w-[40%]">
                  <h3 className="mt-[40px] md:mt-0 text-[20px] leading-[24.2px] font-medium text-[#000000] mb-[14px] md:mb-[26px]">
                    Order Summary
                  </h3>
                  <div className="">
                    <div className=" flex flex-wrap gap-2">
                      {getData?.map((detail) => {
                        const { id, whiteBorder, image } = detail;
                        return (
                          <div key={id}>
                            <div
                              className={
                                !whiteBorder
                                  ? "w-[100px] h-[100px] mb-[20px] border-[10px]  border-[#18191A] relative flex items-center shadow-xl"
                                  : "w-[100px] h-[100px] mb-[20px] border-[10px]  border-[#FFFFFF] relative flex items-center shadow-xl"
                              }
                            >
                              <img
                                src={image}
                                className="w-[90px] h-[80px] object-cover relative flex items-center justify-center mx-auto"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-[33.17px] mb-[30px]">
                      <span className="flex justify-between">
                        <p className="text-[18px] font-medium leading-[21.78px] text-[#4A5568]">
                          Sub total
                        </p>
                        <p className="text-[#2D3748] text-[20px] leading-6 font-medium">
                          N12,000.00
                        </p>
                      </span>
                      <span className="flex justify-between mt-[32px]">
                        <p className="text-[18px] font-medium leading-[21.78px] text-[#4A5568]">
                          Photo editing
                        </p>
                        <p className="text-[#2D3748] text-[20px] leading-6 font-medium">
                          N2000.00
                        </p>
                      </span>
                      <span className="mt-[32px] flex justify-between">
                        <p className="text-[18px] font-medium leading-[21.78px] text-[#4A5568]">
                          Shipping
                        </p>
                        <p className="text-[#A560FE] text-[20px] leading-6 font-medium">
                          N300.00
                        </p>
                      </span>
                      <span className=" mt-[50px] flex justify-between">
                        <p className="text-[18px] font-bold leading-[21.78px] text-[#2D3748]">
                          Total
                        </p>
                        <p className="text-[#2D3748] text-[20px] leading-6 font-bold">
                          N14,300.00
                        </p>
                      </span>
                    </div>
                    <div className="mt-[35.5px] flex flex-col sm:flex-row gap-8 sm:gap-2 sm:justify-end">
                      <button className="text-[16px] font-bold text-[#A560FE] py-[16.5px] px-[56.1px] md:px-[30px] lg:px-[40px] xl:px-[56.1px] border-[1px] border-[#A560FE] rounded-[6px]">
                        Cancle order
                      </button>
                      <button
                        onClick={() => {
                          if (page === 1) {
                          } else {
                            setPage((currPage) => currPage + 1);
                          }
                        }}
                        className="text-[16px] font-bold text-[#FFFFFF] py-[16.5px] lg:px-[40px] xl:px-[56.1px] md:px-[30px] px-[56.1px] border-[1px] bg-[#A560FE] rounded-[6px]"
                      >
                        {page === 1 ? "Checkout" : "Payment"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
