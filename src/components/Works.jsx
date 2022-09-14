import React from "react";
import bgj from "../images/Component 3.png";
import pictureGrid from "../images/pictureGridSample 1.png";

const Works = () => {
  return (
    <div>
        <div className>
              <img src={bgj} alt="" className="absolute w-[300.08px] object-cover" />
        </div>
      <div className="pt-[207px] relative">
        <h1
          className="text-center text-[36px] tracking-[1px] font-bold"
          style={{ color: "rgba(29, 2, 63, 1)" }}
        >
          How it works
        </h1>
        <div className=" w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="ml-[10%]">
              <div className="flex">
                <span className="absolute">
                  <p
                    className="text-[128px] leading-[153.6px] tracking-1 font-bold"
                    style={{ color: "rgba(165, 96, 254, 0.2)" }}
                  >
                    01
                  </p>
                </span>
                <span className="my-auto relative pt-[50px] pl-[120px]">
                  <h3
                    className="text-[30px] tracking-1 leading-[36px] font-medium"
                    style={{ color: "rgba(51, 51, 51, 1)," }}
                  >
                    Import Photos
                  </h3>
                  <p
                    className="text-[18px] tracking-1 leading-[21.6px] w-[60%] font-light"
                    style={{ color: "rgba(102, 102, 102, 1)" }}
                  >
                    Import your photos.(Phone, or your computer), and choose
                    your frames.
                  </p>
                </span>
              </div>
              <div className="flex">
                <span className="absolute">
                  <p
                    className="text-[128px] leading-[153.6px] tracking-1 font-bold"
                    style={{ color: "rgba(165, 96, 254, 0.2)" }}
                  >
                    02
                  </p>
                </span>
                <span className="my-auto relative pt-[50px] pl-[120px]">
                  <h3
                    className="text-[30px] tracking-1 leading-[36px] font-medium"
                    style={{ color: "rgba(51, 51, 51, 1)," }}
                  >
                    Edit & Select Frame
                  </h3>
                  <p
                    className="text-[18px] tracking-1 leading-[21.6px] w-[60%] font-light"
                    style={{ color: "rgba(102, 102, 102, 1)" }}
                  >
                    Select frame color of your choice and adjust the photo how
                    you want it on the frame.
                  </p>
                </span>
              </div>
              <div className="flex">
                <span className="absolute">
                  <p
                    className="text-[128px] leading-[153.6px] tracking-1 font-bold"
                    style={{ color: "rgba(165, 96, 254, 0.2)" }}
                  >
                    03
                  </p>
                </span>
                <span className="my-auto relative pt-[50px] pl-[120px]">
                  <h3
                    className="text-[30px] tracking-1 leading-[36px] font-medium"
                    style={{ color: "rgba(51, 51, 51, 1)," }}
                  >
                    Payment
                  </h3>
                  <p
                    className="text-[18px] tracking-1 leading-[21.6px] w-[60%] font-light"
                    style={{ color: "rgba(102, 102, 102, 1)" }}
                  >
                    Add payment and shipping details to complete your order.
                  </p>
                </span>
              </div>
            </div>
            <div className="">
              <img src={pictureGrid} alt="" className="w-[580px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
