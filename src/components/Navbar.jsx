import React, { useState } from "react";
import Logo from "../images/Photo perfects  4.png";
import Nav from "../images/align-right.png";
import NavClose from "../images/multiply.png";
import Frame from "../images/frame.png";
import Gift from "../images/Group (7).png";
import Track from "../images/Group (8).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handlenav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        !nav ? "relative z-[1]" : " w-[100%] h-[100%] modal fixed z-[4]"
      }
    >
      <div className="w-[90%] mx-auto flex justify-between">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className={
                !nav
                  ? "w-[195px] h-[48px] object-contain mt-12"
                  : "hidden w-[195px] h-[48px]"
              }
            />
          </Link>
        </div>
        <div>
          {!nav && (
            <img
              src={Nav}
              alt="Nav Icon"
              className="w-[20px] relative h-[14px] mt-12 object-cover justify-end"
              onClick={handlenav}
            />
          )}
        </div>
      </div>
      <div>
        <div>
          {nav && (
            <div className="flex justify-end">
              <div></div>

              <div
                className=" absolute z-30  mt-[0px] flex flex-col w-[100%] sm:w-[351px]  px-[40px] "
                style={{ background: "rgba(255, 255, 255, 1)" }}
              >
                <div className="flex mx-0 justify-between pt-12 ">
                  <Link to="/">
                    <img src={Logo} alt="Logo" className="w-[200px]" />
                  </Link>
                  <img
                    src={NavClose}
                    alt="Nav Icon"
                    className="w-[16.01px] h-[16.01px] mt-[18px] flex justify-end "
                    onClick={handlenav}
                  />
                </div>
                <div
                  className={
                    !nav
                      ? "hidden"
                      : "block mt-[63.29px] ease-in-out z-30 delay-500"
                  }
                >
                  <ul
                    className="border-b-[1px] border-dashed"
                    style={{
                      borderColor: "rgba(224, 224, 224, 1)",
                    }}
                  >
                    <Link to="/details">
                      <li className="flex gap-2 h-[18px] mb-[29px] ">
                        <img
                          src={Frame}
                          alt="frame icon"
                          className="w-[22px] h-[17.29px]"
                        />{" "}
                        <p className="text-16px items-center flex">
                          Frame your photo
                        </p>
                      </li>
                    </Link>
                    <Link to="/someoneelse">
                      <li className="flex gap-2 h-[18px] mb-[29px] cursor-pointer">
                        <img
                          src={Gift}
                          alt="frame icon"
                          className="w-[20px] h-[17.04px]"
                        />{" "}
                        <p className="text-[16px] items-center flex">
                          {" "}
                          Gift a frame
                        </p>
                      </li>
                    </Link>
                    <Link to="/trackorder">
                      <li className="flex gap-2 h-[22px] mb-[29px] ">
                        <img
                          src={Track}
                          alt="frame icon"
                          className="w-[22px] h-[22px]"
                        />
                        <p className="text-[16px] items-center flex">
                          Track Order
                        </p>
                      </li>
                    </Link>
                  </ul>
                  <ul className="">
                    <li className="text-[16px] leading-6 mt-[30px] mb-[12px]">
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li className="text-[16px] leading-6 mb-[12px]">
                      <Link to="/terms">Terms Of Use</Link>
                    </li>
                    <li className="text-[16px] leading-6 pb-[100px]">
                      <Link to="/faq">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
