import React from "react";
import Navbar from "../components/Navbar";
import map from "../images/map.png";
import group from "../images/Group 36767.png";
import icon from "../images/angle-right.png";
import zoomin from "../images/Frame 36663.png";
import zoomout from "../images/Frame 36662.png";
import reshape from "../images/ic_Location.png";
import circleIcon from "../images/Frame 36665.png";
import line from "../images/Line 21.png";
import { Link } from "react-router-dom";

const TrackOrder = () => {
  return (
    <div className="back">
      <div>
        {/* <div className="flex justify-end">
          <img src={bgi} alt="" className="absolute w-[190px] lg:w-[500px]" />
        </div> */}
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
                <Link to="/privacy">Track Order</Link>
              </li>
            </ul>
          </div>
          <div
            className="rounded-2xl z-[1] pb-[140px] "
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="w-[90%] mx-auto   ">
              <div className="pt-[52px] flex flex-col lg:flex-row gap-[120px] xs:gap-[200px] sm:gap-[240px] md:gap-0 lg:gap-[180px] xl:gap-[225px]">
                <div className="pb-[200px] md:pb-[80px] lg:pb-0">
                  <img
                    src={map}
                    alt=""
                    className="w-[90%] sm:w-[80%] mx-[0.2%] sm:mx-[5%]  lg:mx-0 lg:w-[420px] xl:w-[552px] absolute"
                  />
                  <img
                    src={group}
                    alt=""
                    className="relative w-[60%] top-[80px] left-[20%] md:top-[120px] lg:w-[250px] xl:w-[383px] lg:top-[120px] xl:top-[172.17px] md:left-[76.68px]"
                  />
                  <div className="relative hidden md:block md:mt-[42%] md:left-[84%] lg:top-[90px] lg:left-[360px] xl:top-[100px] xl:left-[490px] w-[50px]">
                    <img src={zoomin} alt="" />
                    <img src={zoomout} alt="" />
                    <img src={reshape} alt="" />
                  </div>
                </div>
                              <div className="relative lg:flex lg:justify-end">
                                  <div>
                  <h3 className="text-[20px] leading-[24.2px] font-medium text-[#000000] mb-[34px]">
                    Track Order
                  </h3>
                  <div className="flex gap-[24px]">
                    <div>
                      <img
                        src={circleIcon}
                        alt=""
                        className="w-[30px] md:w-[20px] "
                      />
                      <img
                        src={line}
                        alt=""
                        className="h-[57.04px] mx-auto mt-[1px]"
                      />
                    </div>
                    <div className="">
                      <p className="lg:w-[350px] text-[14px] md:text-[16px] mt-[-3px] md:leading-6 font-normal md:mt-[-5px]">
                        <span className=" font-bold">Pick Up</span>: 15 Gbenga
                        Ogunleye Street, Abaranje Road, Ikotun Lagos{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[24px]">
                    <div>
                      <img
                        src={circleIcon}
                        alt=""
                        className="w-[30px] md:w-[20px]"
                      />
                      <img
                        src={line}
                        alt=""
                        className="h-[57.04px] mx-auto mt-[1px]"
                      />
                    </div>
                    <div className="">
                      <p className="lg:w-[350px] text-[14px] md:text-[16px] mt-[-3px] md:leading-6 font-normal md:mt-[-5px]">
                        <span className=" font-bold">Current Location </span>:
                        15 Gbenga Ogunleye Street, Abaranje Road, Ikotun Lagos
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[24px]">
                    <div>
                      <img
                        src={circleIcon}
                        alt=""
                        className="w-[30px] md:w-[20px]"
                      />
                    </div>
                    <div className="">
                      <p className="lg:w-[350px] text-[14px] md:text-[16px] mt-[-3px] md:leading-6 font-normal md:mt-[-5px]">
                        <span className=" font-bold">Drop Off</span>: 15 Gbenga
                        Ogunleye Street, Abaranje Road, Ikotun Lagos
                      </p>
                    </div>
                                  </div>
                                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-start">
          <img
            src={bg2}
            alt=""
            className="absolute w-[200px] mt-[-300px] md:w-[300px] md:mt-[-450px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default TrackOrder;
