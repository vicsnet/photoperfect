import React from "react";
import Navbar from "../components/Navbar";
import bgi from "../images/Component 2 (1).png";
import bg2 from "../images/Component 3 (3).png";
import icon from "../images/angle-right.png";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion"
import Footer from "../components/Footer";
import { faq } from "../faq";

const Faq = () => {
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
              {faq.map(({ title, details, id }) => (
                <Accordion title={title} id={id} details={details} key={id} />
              ))}
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
