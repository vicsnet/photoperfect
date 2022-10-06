import React from 'react'

const MapDetails = ({details}) => {
  return (
    <div>
      {details?.map((detail) => {
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
                className="w-[310.34px] h-[310.34px] object-cover mx-auto my-auto "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MapDetails