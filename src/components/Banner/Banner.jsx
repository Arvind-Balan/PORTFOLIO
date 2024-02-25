import React from "react";
import myImg from "../../assets/images/me1.jpg";
import handImg from "../../assets/images/waving hand.png";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import htmlImg from "../../assets/images/html.png";
import cssImg from "../../assets/images/css.png";
import reactImg from "../../assets/images/react.png";
import jsImg from "../../assets/images/javascript.png";
import reduxImg from "../../assets/images/redux.png";
import tailwindImg from "../../assets/images/tailwind.png";
import muiImg from "../../assets/images/MUI.png";
import bootstrapImg from "../../assets/images/bootstrap.png";
import sassImg from "../../assets/images/sass.png";
import nodeImg from "../../assets/images/node.png";
import expressImg from "../../assets/images/expressjs.png";
import mongoDbImg from "../../assets/images/mongodb.png";

const socialLinks = [
  { icon: FiGithub, link: "https://github.com/pranavpremanand" },
  { icon: FiLinkedin, link: "https://linkedin.com/in/pranavpremanand" },
  { icon: FiMail, link: "mailto:mpranavprem@gmail.com" },
  { icon: FiPhone, link: "tel:+919633063113" },
  // { icon: FiInstagram, link: "https://instagram.com/pranav_premanand" },
  { icon: FaWhatsapp, link: "https://wa.me/+919633063113" },
];

const Banner = () => {
  return (
    <div
      id="home"
      className="h-[95vh] sm:h-auto lg:min-h-[100vh] flex items-center justify-center bg-[#f9f9f9] px-7 py-16"
    >
      <div className="max-w-[70rem]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <span className="text-center lg:text-start text-[1.7rem] sm:text-[3rem] leading-[2.7rem] sm:leading-[4.2rem] font-bold">
              Software Developer
              <img
                src={handImg}
                alt="Waving Hand"
                className="hand-img w-[2.8rem] sm:w-[3.2rem] inline-block ml-1 sm:ml-5 -mt-2"
              />
            </span>
            <p className="text-[#555] text-center lg:text-start">
              Hey, I'm Pranav. A passionate Software Developer based in Kerala,
              India.📍
            </p>
            <div className="flex text-[1.5rem] gap-4 justify-center lg:justify-start">
              {socialLinks.map((item) => (
                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                  <item.icon className="hover:text-sky-600 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
          {/* <img
            src={myImg}
            alt="Hero"
            className="w-[22rem] object-cover aspect-square rounded-full"
          /> */}
          <div
            className="hero-img w-[19rem] h-[19rem] sm:w-[25rem] sm:h-[25rem] grayscale-[10%]"
            style={{ backgroundImage: `url(${myImg})` }}
            loading='lazy'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
