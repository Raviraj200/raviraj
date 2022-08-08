import React from "react";
import { BsGithub } from "react-icons/bs";
import './App.css';
import {FaInstagram } from "react-icons/fa";
import { FiPhoneCall} from "react-icons/fi";
import { MdOutlineMail,MdOutlineLocationOn,MdFacebook } from "react-icons/md";
import { TbBrandLinkedin,TbBrandTwitter,TbBrandTelegram,TbBrandWhatsapp} from "react-icons/tb";

function Footer(){
    return(
    <footer className="  text-white  ">
        <div className=" -ml-12  grid grid-cols-1.5  sm:grid-cols-4  lg:grid-cols-3 gap-3 sm: px-5 py-6 ">
            
            <div className=" text-start">
            <h1 className="text1">Pages</h1>
            <a href="#home" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Home</a><br/>
            <a href="#about" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">About</a><br/>
            <a href="#skill" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Skill</a><br/>
            <a href="#projects" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Projects</a><br/>
            <a href="#contacts" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Contacts</a>

            </div>
            <div className=" text-start pb-3">
            <h1 className="text1">Contacts</h1>
            <a href=" tel:+918889828271" className="text-decoration-none  text-gray-400 d-flex   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">< FiPhoneCall className="pb-0.5 pr-1 fs-2"  /> +91-8889828721</a>
            <a href="mailto:ravirajji1234@gmail.com" className="text-decoration-none  text-gray-400  d-flex  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  "><MdOutlineMail className="pb-0.5 pr-1 fs-2"/>ravirajji1234@gmail.com</a>
            <a href="https://goo.gl/maps/ChCoxQ23hrXc9Q9Y7" className="text-decoration-none  text-gray-400 d-flex  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  "><MdOutlineLocationOn className="pb-0.5 pr-1 fs-2"/>Banda, Madhya Pradesh 470335</a>
            <a href="#" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  "> </a><br/>
            <a href="#" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  "> </a>

            </div>
            <div className=" text-start pb-3 d-flex mx-auto   ">
            <h1 className="text1">Link </h1>         
            
            <a href="https://api.whatsapp.com/send?phone=+918889828721 & text=Hello " className=" text-decoration-none ml-5  fs-2 text-gray-400 p-2 d-flex   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out   "><TbBrandWhatsapp/></a>
            <a href="https://www.instagram.com/raviraj_singh_thakur_/" className="text-decoration-none fs-2  text-gray-400 p-2   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">< FaInstagram/></a>
            <a href="https://www.linkedin.com/in/raviraj-thakur-301bba211/" className="text-decoration-none fs-2 text-gray-400  p-2  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  "><TbBrandLinkedin/></a>
            <a href="https://twitter.com/Ravirajji1234" className="text-decoration-none fs-2 text-gray-400  p-2  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">< TbBrandTwitter/></a>
            <a href="https://web.telegram.org/k/#@Ravirajsingh1234" className="text-decoration-none fs-2 text-gray-400  p-2  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  "><TbBrandTelegram /></a>
            <a href="https://github.com/ravirajji" className="text-decoration-none fs-2 text-gray-400  p-2  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">< BsGithub/></a>

            {/* <a href="#home" className="text-decoration-none fs-2 text-gray-400  p-2  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  "><MdOutlineMail/></a> */}

            </div>
           

  
             {/* <div className="">
            <h1>Pages</h1>
            <a href="#home" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Home</a><br/>
            <a href="#home" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Home</a><br/>
            <a href="#home" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Home</a><br/>
            <a href="#home" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Home</a><br/>
            <a href="#home" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  ">Home</a>

            </div> */}
    

        </div>
     

    </footer>

    )
}
export default Footer