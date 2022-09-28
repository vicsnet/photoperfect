
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import bgi from "../images/Component 2 (1).png";
import bg2 from "../images/Component 3 (3).png";
import icon from "../images/angle-right.png";
import frame from "../images/Frame 27.png";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import But from "../images/Button.png";

const Hello = () => {
  const [openModal, setOpenModal] = useState(false);
  const [getData, setGetData] = useState([])
  
  const getDataHandler = (data) => {
    setGetData(data)
  }


   useEffect(() => {
     if (localStorage.getItem("ImageDetails")) {
       const storedList = JSON.parse(localStorage.getItem("ImageDetails"));
       setGetData(storedList);
     }
   }, []);

const handleDelete = (detail) => {
  console.log("deleted");
  const deleted = getData.filter((t) => t.id !== detail.id);
  setGetData(deleted);
  localStorage.setItem("ImageDetails", JSON.stringify(deleted));
  // localStorage.setItem("", JSON.stringify(deleted));
  };
  
   const CheckOutSubmit = (event) => {
    //  event.currentTarget.disabled = true;
     console.log("button clicked");
   };
  return (
    <div className="">
      <Navbar />

      <div className="bg-[#D9D9D9] pb-[25.5px] ">
        <div className="w-[90%] mx-auto relative ">
          <div
            className="text-[12px] leading-[14.52px] font-light mt-[30.5px] pt-[30px] mb-[25.5px] flex justify-between"
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
                <Link to="/faq">Upload images</Link>
              </li>
            </ul>
            <div className="hidden sm:block">
              <button
                disabled={getData.length < 4}
                onClick={CheckOutSubmit}
                className={
                  getData.length < 4
                    ? "text-[16px] font-bold text-[#FFFFFF] leading-[19.36px] bg-[#BAB8B8] px-[69px] py-[15.5px] rounded-[6px]"
                    : "text-[16px] font-bold text-[#FFFFFF] leading-[19.36px] bg-[#A560FE] px-[69px] py-[15.5px] rounded-[6px]"
                }
              >
                Checkout
              </button>
            </div>
          </div>
          <div
            className="rounded-2xl z-[1] relative "
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="w-[90%] mx-auto pb-[56px]">
              <h3
                className="text-[20px] font-bold pt-[29px]"
                style={{ color: "rgba(51, 51, 51, 1)" }}
              >
                Uplaod Images
              </h3>
              <p
                className="mt-[8px] text-[14px] font-light mb-[53px]"
                style={{ color: "rgba(153, 153, 153, 1)" }}
              >
                Uplaod minimum of 4 pictures
              </p>

              <div className="flex  flex-wrap gap-2 md:gap-[10px] xl:gap-[30px] px-auto mx-auto xl:w-[90%] items-center justify-center">
                {getData?.map((detail) => {
                  const { id, whiteBorder, image } = detail;
                  return (
                    <div key={id}>
                      <div
                        className={
                          !whiteBorder
                            ? "w-[280px] h-[280px] mb-[20px] border-[20px]  border-[#18191A] relative flex items-center shadow-xl"
                            : "w-[280px] h-[280px] mb-[20px] border-[20px]  border-[#FFFFFF] relative flex items-center shadow-xl"
                        }
                      >
                        <img
                          src={image}
                          className="w-[240px] h-[240px] object-cover relative flex items-center justify-center mx-auto"
                        />
                        <button
                          className=" top-[750px] right-[140px]"
                          onClick={() => handleDelete(detail)}
                        >
                          <img
                            src={But}
                            alt=""
                            className="absolute top-[8px] right-[8px] "
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
                <img
                  src={frame}
                  alt=""
                  className="w-[295px] h-[295px] "
                  onClick={() => setOpenModal(true)}
                />
              </div>
              <div className=" sm:hidden">
                <button className="text-[16px] font-bold text-[#FFFFFF] leading-[19.36px] bg-[#A560FE] w-[100%] py-[15.5px] rounded-[6px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onGetData={getDataHandler}
      />
    </div>
  );
};

export default Hello;
