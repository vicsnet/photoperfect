import React, { useState, useEffect } from "react";

import frame from "../images/Frame 27.png";
import closeIcon from "../images/multiply.png";
import frame1 from "../images/FRAMES 2-02(1) 1.png";
import frame2 from "../images/FRAMES 2-01(1) 1.png";
import But from "../images/Button.png";
import MapDetails from "./MapDetails";


const Modal = ({ open, onClose, onGetData }) => {

  const [file, setFile] = useState("");

  const [details, setDetails] = useState([]);

  const [check, setCheck] = useState(false);

  const [border, setBorder] = useState(false);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const uploadFile = () => {
    document.getElementById("selectFile").click();
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (file) {
      const newFile = {
        id: new Date().getTime().toString(),
        image: file,
        Edit: check,
        whiteBorder: border,
      };

      setDetails([...details, newFile]);

      localStorage.setItem(
        "ImageDetails",
        JSON.stringify([...details, newFile])
      );

      setFile("");

      onGetData([...details, newFile]);
      onClose(false)
    }
    // setFile("");
    // setCheck("");
    // console.log(file);
  };

  // const handleDelete = (detail) => {
  //   console.log("deleted");
  //   const deleted = details.filter((t) => t.id !== detail.id);
  //   setDetails(deleted);
  //   localStorage.setItem("ImageDetails", JSON.stringify(deleted));
  //   // localStorage.setItem("", JSON.stringify(deleted));
  // };

 

  if (!open) return null;

  return (
    <div className="w-[100%] h-[120%] modal top-0 absolute z-10">
      <div className="w-[92%] sm:w-[70%] md:w-[70%] lg:w-[65%] xl:w-[50%] mx-auto pt-[5%] ">
        <div className="bg-[#F6F4F8] rounded-[16px]">
          <div className="w-[90%] mx-auto">
            <div className=" w-[50%] flex justify-between ml-auto pt-[31px] pb-[41px]">
              <h3 className="font-bold text-[20px] ">Edit</h3>
              <img
                src={closeIcon}
                alt=""
                onClick={onClose}
                className="w-[16.01px] h-[16.01px]"
              />
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-[40px] ">
              <div className="">
                <input
                  type="file"
                  id="selectFile"
                  name="image"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                {!file ? (
                  <img src={frame} alt="" onClick={uploadFile} className='mx-auto'/>
                ) : (
                  <div
                    className={
                      !border
                        ? "w-[300px] h-[300px] xs:w-[350px] xs:h-[350px] md:w-[350px] md:h-[350px] mb-[20px] border-[20px]  border-[#18191A] relative flex items-center shadow-xl mx-auto"
                        : " w-[300px] h-[300px] xs:w-[350px] xs:h-[350px] md:w-[350px] md:h-[350px] mb-[20px] border-[20px]  border-[#FFFFFF] relative flex items-center shadow-xl mx-auto"
                    }

                    //   className=""
                  >
                    <img
                      src={file}
                      className="w-[260px] h-[260px] xs:w-[310px] xs:h-[310px] md:h-[310px] md:w-[310px] object-cover mx-auto my-auto "
                    />
                  </div>
                )}
              </div>

              <div className=" flex flex-row lg:flex-col justify-center gap-6">
                <div
                  className="flex flex-col lg:flex-row cursor-pointer"
                  onClick={() => setBorder(false)}
                >
                  <img
                    src={frame1}
                    alt=""
                    className="sm:w-[100px] sm:h-[100px] "
                  />
                  <p className="text-[14px] flex items-center ">Black frame</p>
                </div>
                <div
                  className="flex flex-col cursor-pointer lg:flex-row"
                  onClick={() => setBorder(true)}
                >
                  <img
                    src={frame2}
                    alt=""
                    className="sm:w-[100px] sm:h-[100px]"
                  />
                  <p className="text-[14px] flex items-center">White frame</p>
                </div>
                <div className="hidden lg:block">
                  <h2 className="text-[18px] font-medium text-[#333333]">
                    Optional Finishes
                  </h2>
                  <div className=" flex pt-[10px]">
                    <input
                      type="checkbox"
                      name="check"
                      id="check"
                      value={check}
                      onChange={(e) => setCheck(e.target.checked)}
                      className="mt-[5.5px] mr-[6px] checked:bg-[#A560FE] enabled:text-white  border-[1px] border-[#333333] w-[22.89px] h-[12px] "
                    />
                    <p className="text-[14px] text-[#666666] font-normal leading-[21px] ">
                      I want a professional edit of my pictures(N2,000 per
                      picture).
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:w-[80] lg:hidden">
                <h2 className="text-[18px] font-medium text-[#333333]">
                  Optional Finishes
                </h2>
                <div className=" flex pt-[10px]">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    value={check}
                    onChange={(e) => setCheck(e.target.checked)}
                    className="mt-[5.5px] mr-[6px] checked:bg-[#A560FE] enabled:text-white  border-[1px] border-[#333333] w-[22.89px] h-[12px] "
                  />
                  <p className="text-[14px] text-[#666666] font-normal leading-[21px] ">
                    I want a professional edit of my pictures(N2,000 per
                    picture).
                  </p>
                </div>
              </div>
            </div>

            <div className=" pb-[86px] pt-[20px] flex justify-center">
              <button
                onClick={handleClick}
                className=" text-[16px] font-bold leading-[19.36px] py-[15.5px] px-[130px] lg:px-[157px] bg-[#A560FE] text-[#FFFFFF] rounded-[6px] "
              >
                Done
              </button>
            </div>
            {/* {details?.map((detail) => {
              const { id, whiteBorder, image } = detail;
              return (
                <div key={id}>
                  <div
                    className={
                      !whiteBorder
                        ? "w-[350px] h-[350px] mb-[20px] border-[20px]  border-[#18191A] relative flex items-center shadow-xl "
                        : " w-[350px] h-[350px] mb-[20px] border-[20px]  border-[#FFFFFF] relative flex items-center shadow-xl"
                    }
                  >
                    <img
                      src={image}
                      className="w-[310.34px] h-[310.34px] object-cover mx-auto my-auto relative"
                    />
                  </div>
                  <button
                    className="absolute top-[750px] right-[140px]"
                    onClick={() => handleDelete(detail)}
                  >
                    <img src={But} alt="" />
                  </button>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
