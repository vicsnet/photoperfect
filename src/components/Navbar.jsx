import React, { useState } from "react";
import Logo from "../images/Photo perfects  4.png";
import Nav from "../images/align-right.png";
import NavClose from "../images/multiply.png";
import Frame from "../images/frame.png";
import Gift from "../images/Group (7).png";
import Track from "../images/Group (8).png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handlenav = () => {
    setNav(!nav);
    setIsActive((current) => !current);
    // setIsActive(true);
  };
  return (
    <div className="relative ">
      <div className=" w-[90%] mx-auto  flex justify-between ">
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-[195px] h-[48px] object-contain mt-12"
          />
        </div>
        {/* <div className="md:w-[459px] md:h-[569px]"> */}
        {!nav && (
          <img
            src={Nav}
            alt="Nav Icon"
            className="w-[20px] h-[14px] mt-12 object-cover justify-end"
            onClick={handlenav}
          />
        )}
      </div>
      <div>
        <div>
          {nav && (
            <div className="flex justify-end">
              <div></div>

              <div
                className=" absolute z-30  mt-[-100px] flex flex-col w-[100%] sm:w-[351px]  px-[40px] "
                style={{ background: "rgba(255, 255, 255, 1)" }}
              >
                <div className="flex mx-0 justify-between pt-12 ">
                  <img src={Logo} alt="Logo" className="w-[200px]" />
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
                    <li className="flex gap-2 h-[18px] mb-[29px]">
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
                  </ul>
                  <ul className="">
                    <li className="text-[16px] leading-6 mt-[30px] mb-[12px]">
                      Privacy Policy
                    </li>
                    <li className="text-[16px] leading-6 mb-[12px]">
                      Terms Of Use
                    </li>
                    <li className="text-[16px] leading-6 pb-[100px]">FAQs</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
