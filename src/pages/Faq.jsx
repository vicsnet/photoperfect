import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bgi from "../images/Component 2 (1).png";
import bg2 from "../images/Component 3 (3).png";
import icon from "../images/angle-right.png";
import openIcon from "../images/Group 35539.png";
import closeIcon from "../images/Group 35538.png";
import { Link } from "react-router-dom";
import { faq } from "../faq";
import Footer from "../components/Footer";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [faqInfo, setFaqInfo] = React.useState(faq);

  // setFaqInfo(faq)



  

  const handleClick = () => {
    setOpen(!open);
    setFaqInfo(faq)
  };
  return (
    <div className="bg-[#D9D9D9]">
      <div>
        <div className="flex justify-end">
          <img src={bgi} alt="" className="absolute w-[190px] lg:w-[500px]" />
        </div>
        <Navbar />
        <div className="w-[90%] mx-auto relative ">
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
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div
            className="rounded-2xl z-[1] relative "
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="w-[90%] mx-auto pb-[56px]">
              <h3
                className="text-[20px] md:text-[36px] font-bold pt-[52px] mb-10"
                style={{ color: "rgba(51, 51, 51, 1)" }}
              >
                Frequently Asked Questions
              </h3>

              {/* faq mapping */}
              {faqInfo.map((info) => {
                const { title, details, id } = info;
                return (
                  <div className=" pb-[29px]">
                    <div
                      className={
                        !open
                          ? "rounded-[16px] border-[1px] shadow-lg"
                          : " border-[2px] border-[#A560FE] rounded-[16px]"
                      }
                      // style={
                      //   !open && {
                      //     boxhadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
                      //     border: "1px solid-rgba(8, 15, 52, 0.06)",
                      //   }
                      // }
                    >
                      <div className="w-[90%] mx-auto ">
                        <div
                          className="flex justify-between pt-[15px] pb-[15px]"
                          key={id}
                        >
                          <p
                            className="flex  text-[16px] items-center md:text-[22px] font-medium"
                            style={{ color: "rgba(51, 51, 51, 1)" }}
                          >
                            {title}
                          </p>

                          <span>
                            {!open ? (
                              <img
                                src={openIcon}
                                alt=""
                                className="flex items-center w-[60px] md:w-[40px] cursor-pointer"
                                onClick={handleClick}
                                key={id}
                              />
                            ) : (
                              <img
                                src={closeIcon}
                                alt=""
                                className="flex items-center justify-center mx-auto w-[40px] cursor-pointer"
                                onClick={handleClick}
                              />
                            )}
                          </span>
                        </div>
                        <p
                          className={
                            !open
                              ? "hidden"
                              : " flex pt-[17px] text-[14px] md:text-[18px] leading-[30px] w-[92%] font-normal pb-[47.26px]"
                          }
                        >
                          {details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
      <Footer />
    </div>
  );
};

export default Faq;
