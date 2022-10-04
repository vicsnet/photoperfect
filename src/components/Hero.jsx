import React from "react";
import bg1 from "../images/Component 2.png";
import image1 from "../images/Subtract.png";
import image2 from "../images/Rectangle 366.png";
import Nails from "../images/Nails.png";
import Shipping from "../images/Group 7903 (2).png";
import Gift from "../images/Group 7903 (3).png";
import bgj from "../images/Component 3.png";
import pictureGrid from "../images/pictureGridSample 1.png";
import bgl from "../images/Component 3 (1).png";
import lara from "../images/image 49.png";
import larainsta from "../images/Rectangle 241.png";
import larainsta2 from "../images/Rectangle 242.png";
import larainsta3 from "../images/Rectangle 243.png";
import larainsta4 from "../images/Rectangle 244.png";
import larainsta5 from "../images/Rectangle 245.png";
import larainsta6 from "../images/Rectangle 252.png";
import larainsta7 from "../images/Rectangle 253.png";
import larainsta8 from "../images/Rectangle 254.png";
import larainsta9 from "../images/Rectangle 255.png";
import insta from "../images/instagram.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      //   className={!col ? "bg-[black]" : "bg-[#F9F8FB]"}
      style={{
        backgroundColor: "rgba(249, 248, 251, 1)",
      }}
    >
      <div className="flex justify-end">
        <div></div>
        <img
          src={bg1}
          alt=""
          className="absolute ml-auto w-[200px] md:w-[300px] xl:w-[360.48px]"
        />
      </div>
      <div>
        <Navbar />
      </div>
      
      <div className="w-[90%] mx-auto ">
        <div className="flex justify-between relative">
          <div className=" my-auto w-[490px] mx-auto flex flex-col justify-end">
            <h1
              className="text-[10px] xs:text-[12px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[36px] font-medium"
              style={{ color: "#001C34" }}
            >
              Turn your photos into{" "}
            </h1>
            <h1
              className="text-[12px] xs:text-[15px] sm:text-[25px] md:text-[28px] lg:text-[40px] leading-[18.75px] xl:text-[48px] font-bold sm:leading-[28px] md:leading-[40px] lg:leading-[58px]"
              style={{ color: "rgba(251, 203, 156, 1)" }}
            >
              stunning wall art.
            </h1>
          </div>
          <div className="">
            <img src={image1} alt="" className="w-[830px]" />
          </div>
        </div>
        <div className="flex gap-1 sm:gap-[20px] md:gap-[44px]">
          <div className="">
            <img
              src={image2}
              alt=""
              className=" w-[500px] sm:w-[640px] md:w-[682px]"
            />
          </div>
          <div className="mt-auto">
            <p className="text-[10px] xs:text-[12px] sm:text-[15px] z-[1] relative leading-4 sm:leading-5 lg:text-24px md:leading-9 md:w-[79%] lg:w-[80%] xl:w-[60%] font-medium">
              Your walls hold a lot of potentials. Spice things up with magical
              frames today!
            </p>
            <button
              className="hidden sm:flex py-[15px] px-[64.5px] rounded-[6px] mt-[63px]"
              style={{
                background: "rgba(165, 96, 254, 1)",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        <button
          className=" mx-auto flex justify-center sm:hidden py-[15px] px-[64.5px] rounded-[6px] mt-[40px]"
          style={{
            background: "rgba(165, 96, 254, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Get Started
        </button>
      </div>

      {/*  */}
      <div>
        <div className="sm:hidden ">
          <img
            src={bgj}
            alt=""
            className="absolute w-[140.18px] xs:w-[180px] mt-[150px] xs:mt-[120px]"
          />
        </div>
        <div className="w-[90%] mx-auto flex flex-col gap-[63px] sm:flex-row sm:gap-0 justify-between mt-[125px] relative z-10 ">
          <div className="">
            <img
              src={Nails}
              alt=""
              className="w-[80px] justify-center mx-auto"
            />
            <h1 className="text-[20px] mt-[30px] font-semibold text-center">
              No need for nails
            </h1>
            <p className="text-[16px] leading-5 tracking-[1px] text-center w-[60%] mx-auto">
              Our frames can stick to any wall.
            </p>
          </div>
          <div className="">
            <img
              src={Shipping}
              alt=""
              className="w-[80px] justify-center mx-auto"
            />
            <h1 className="text-[20px] mt-[30px] font-semibold text-center">
              Nationwide shipping
            </h1>
            <p className="text-[16px] leading-5 tracking-[1px] text-center w-[70%] mx-auto">
              At your door step in no time
            </p>
          </div>
          <div className="">
            <img
              src={Gift}
              alt=""
              className="w-[80px] justify-center mx-auto"
            />
            <h1 className="text-[20px] mt-[30px] font-semibold text-center">
              Gift Someone
            </h1>
            <p className="text-[16px] leading-5 tracking-[1px] text-center w-[70%] mx-auto">
              Send as a gift to someone you care about.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div>
        <div className=" hidden sm:flex mt-[-70px]">
          <img
            src={bgj}
            alt=""
            className="absolute w-[320.08px] object-cover"
          />
        </div>
        <div className="pt-[207px] relative z-[1]">
          <h1
            className="pb-[31px] md:pb-0 text-center text-[24px] md:text-[36px] tracking-[1px] font-bold"
            style={{ color: "rgba(29, 2, 63, 1)" }}
          >
            How it works
          </h1>
          <div className=" w-[90%] mx-auto ">
            <div className="flex flex-col-reverse lg:flex-row justify-between">
              <div className="ml-[-2%] lg:ml-[10%] ">
                <div className="flex pb-[38px] lg:pb-0 xl:pb-[38px]">
                  <span className="absolute">
                    <p
                      className="text-[96px] md:text-[128px] leading-[153.6px] tracking-1 font-bold"
                      style={{ color: "rgba(165, 96, 254, 0.2)" }}
                    >
                      01
                    </p>
                  </span>
                  <span className="my-auto relative pl-[93px] pt-[40px] md:pt-[30px] lg:pt-[26px] md:pl-[120px] lg:pl-[130px] xl:pt-[30px] ">
                    <h3
                      className="text-[18px] leading-[21.6px] md:text-[30px] tracking-1 md:leading-[36px] font-medium"
                      style={{ color: "rgba(51, 51, 51, 1)," }}
                    >
                      Import Photos
                    </h3>
                    <p
                      className="text-[14px] xs:w-[70%] sm:w-[50%] leading-[16.8px] md:text-[18px] tracking-1 md:leading-[21.6px] md:w-[60%] lg:w-[70%] font-light"
                      style={{ color: "rgba(102, 102, 102, 1)" }}
                    >
                      Import your photos.(Phone, or your computer), and choose
                      your frames.
                    </p>
                  </span>
                </div>
                <div className="flex pb-[38px] lg:pb-0 xl:pb-[38px]">
                  <span className="absolute">
                    <p
                      className="text-[96px] md:text-[128px] leading-[153.6px] tracking-1 font-bold"
                      style={{ color: "rgba(165, 96, 254, 0.2)" }}
                    >
                      02
                    </p>
                  </span>
                  <span className="my-auto relative pl-[93px] pt-[40px] md:pt-[30px] lg:pt-[26px] md:pl-[120px] lg:pl-[130px] xl:pt-[30px]">
                    <h3
                      className="text-[18px] leading-[21.6px] md:text-[30px] tracking-1 md:leading-[36px] font-medium"
                      style={{ color: "rgba(51, 51, 51, 1)," }}
                    >
                      Edit & Select Frame
                    </h3>
                    <p
                      className="text-[14px] xs:w-[70%] sm:w-[50%] leading-[16.8px] md:text-[18px] tracking-1 md:leading-[21.6px] md:w-[60%] lg:w-[70%] font-light"
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
                      className="text-[96px] md:text-[128px] leading-[153.6px] tracking-1 font-bold"
                      style={{ color: "rgba(165, 96, 254, 0.2)" }}
                    >
                      03
                    </p>
                  </span>
                  <span className="my-auto relative pl-[93px] pt-[40px] md:pt-[30px] lg:pt-[26px] md:pl-[120px] lg:pl-[130px] xl:pt-[30px]">
                    <h3
                      className="text-[18px] leading-[21.6px] md:text-[30px] tracking-1 md:leading-[36px] font-medium"
                      style={{ color: "rgba(51, 51, 51, 1)," }}
                    >
                      Payment
                    </h3>
                    <p
                      className="text-[14px] xs:w-[70%] sm:w-[50%] leading-[16.8px] md:text-[18px] tracking-1 md:leading-[21.6px] md:w-[60%] lg:w-[70%] font-light"
                      style={{ color: "rgba(102, 102, 102, 1)" }}
                    >
                      Add payment and shipping details to complete your order.
                    </p>
                  </span>
                </div>
              </div>
              <div className="relative">
                <img
                  src={pictureGrid}
                  alt=""
                  className="w-[340px] xs:w-[400] sm:w-[430px] md:w-[580px]  relative z-10 flex mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonies */}
      <div className="">
        <div className="sm:flex justify-end hidden">
          <div></div>
          <img
            src={bgl}
            alt=""
            className="md:w-[400px] lg:w-[737.94px] absolute object-contain lg:mt-[-330px]"
          />
        </div>
        <div className="relative pt-[171.39px]">
          <h4
            className="text-center text-[14px] md:text-[20px] leading-6 tracking-[[1px]]"
            style={{ color: "rgba(250, 112, 171, 1)" }}
          >
            Testimonia’s
          </h4>
          <h2
            className="text-center text-[24px] w-[80%] xs:w-[60%] mx-auto leading-[28.8px] md:text-[36px] font-bold md:leading-[43.2px] tracking-[1px]"
            style={{ color: "rgba(29, 2, 63, 1)" }}
          >
            What Our Customers Are Saying
          </h2>

          {/* to be fetched from database */}
          <div className="w-[90%] mx-auto mt-[60px] flex flex-col md:flex-row justify-between gap-4">
            <div className="card w-[90%] mx-auto xs:w-[60%] xs:mx-auto sm:w-[60%] sm:mx-auto md:w-[30%] pb-[18px]">
              <img
                src={lara}
                alt=""
                className="w-[100%] h-[278px] xs:w-[100%] xs:h-[278px] mx-auto sm:w-[100%] sm:h-[385px] object-cover md:w-[284px] md:h-[278px] lg:w-[384px] lg:h-[385px]"
              />
              <p
                className="text-[16px] text-center w-[90%] xs:w-[90%] sm:w-[80%] font-light tracking-[1px] leading-[23.2px] md:w-[70%] mx-auto mt-[18px] md:text-left"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                Photo Perfects is literally the best way to print and frame
                photos from your phone!
              </p>
              <h4
                className="text-center mt-5 text-[18px] font-bold leading-[26.1px] tracking-[1px]"
                style={{ color: "rgba(0, 0, 0, 1)" }}
              >
                Lara Johnson
              </h4>
            </div>
            <div className="card w-[90%] mx-auto xs:w-[60%] xs:mx-auto sm:w-[60%] sm:mx-auto md:w-[30%] pb-[18px]">
              <img
                src={lara}
                alt=""
                className="w-[100%] h-[278px] xs:w-[100%] xs:h-[278px] mx-auto sm:w-[100%] sm:h-[385px] object-cover md:w-[284px] md:h-[278px] lg:w-[384px] lg:h-[385px]"
              />
              <p
                className="text-[16px] text-center w-[90%] xs:w-[90%] sm:w-[80%] font-light tracking-[1px] leading-[23.2px] md:w-[70%] mx-auto mt-[18px] md:text-left"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                Photo Perfects is literally the best way to print and frame
                photos from your phone!
              </p>
              <h4
                className="text-center mt-5 text-[18px] font-bold leading-[26.1px] tracking-[1px]"
                style={{ color: "rgba(0, 0, 0, 1)" }}
              >
                Lara Johnson
              </h4>
            </div>
            <div className="card w-[90%] mx-auto xs:w-[60%] xs:mx-auto sm:w-[60%] sm:mx-auto md:w-[30%] pb-[18px]">
              <img
                src={lara}
                alt=""
                className="w-[100%] h-[278px] xs:w-[100%] xs:h-[278px] mx-auto sm:w-[100%] sm:h-[385px] object-cover md:w-[284px] md:h-[278px] lg:w-[384px] lg:h-[385px]"
              />
              <p
                className="text-[16px] text-center w-[90%] xs:w-[90%] sm:w-[80%] font-light tracking-[1px] leading-[23.2px] md:w-[70%] mx-auto mt-[18px] md:text-left"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                Photo Perfects is literally the best way to print and frame
                photos from your phone!
              </p>
              <h4
                className="text-center mt-5 text-[18px] font-bold leading-[26.1px] tracking-[1px]"
                style={{ color: "rgba(0, 0, 0, 1)" }}
              >
                Lara Johnson
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* instagram */}
      <div className="mt-[136px] bg-[#FEF5EA] pb-[91px]">
        <h3
          className="text-[20px] text-center leading-[24.2px] font-medium pt-[52px] pb-[42px]"
          style={{ color: "rgba(250, 112, 171, 1)" }}
        >
          Instagram
        </h3>
        <div className="w-[90%] mx-auto flex flex-wrap gap-3 justify-center">
          <img
            src={larainsta}
            alt=""
            className=" w-[48%]  sm:w-[30%] md:w-[18%] object-fill "
          />
          <img
            src={larainsta2}
            alt=""
            className=" w-[48%]  sm:w-[30%] md:w-[18%] object-fill "
          />
          <img
            src={larainsta3}
            alt=""
            className="w-[48%] sm:w-[30%] md:w-[18%] object-fill "
          />
          <img
            src={larainsta4}
            alt=""
            className="w-[48%] sm:w-[30%] md:w-[18%] object-fill"
          />
          <img
            src={larainsta5}
            alt=""
            className="w-[48%] sm:w-[30%] md:w-[18%] object-fill "
          />
          <img
            src={larainsta6}
            alt=""
            className="w-[48%] sm:w-[30%] md:w-[18%] object-fill "
          />
          <img
            src={larainsta7}
            alt=""
            className="w-[48%] sm:w-[30%] md:w-[18%] object-fill "
          />
          <img
            src={larainsta8}
            alt=""
            className="w-[48%] sm:w-[30%] md:w-[18%] object-fill "
          />
          <img
            src={larainsta9}
            alt=""
            className="w-[48%] sm:w-[30%] md:w-[18%] object-fill "
          />
          <div className="w-[48%] sm:w-[30%] md:w-[18%] relative ">
            <img src={larainsta5} alt="" className=" object-fill relative" />
            <div
              className="absolute top-0 w-[100%] h-[100%]"
              style={{ background: "rgba(0, 0, 0, 0.6)" }}
            >
              <img
                src={insta}
                alt=""
                className="mt-[40%] ml-[40%] w-[41.67px] h-[41.67px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
