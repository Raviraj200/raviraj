// import React, { useEffect } from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HiMenu } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import './App.css';
import Time from "./Time";
import D from "./D";
import Footer from "./Footer";
import swal from 'sweetalert';
import Hobby from "./Hobby";



// import Spline from '@splinetool/react-spline';

// import { TbCopyright } from "react-icons/tb";




import Vetri from './img/my.jpeg';
import { Experience, Projects } from "./data";
function App() {



  const [isAction, setIsterval] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_z3csmom', 'template_vym4u2b', e.target, 'eCumWrbHi48U_9gB6')
      .then((result) => {

        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });




    e.target.reset()

    let btn = document.getElementById('btn');

    btn.addEventListener("click", function () {
      let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1").value;
      if (exampleFormControlInput1 === "") {

        // title: "Error",
        // text: "Please Enter Detail",
        // icon: "error",
        // button: "OK ",

        swal("error", "Please Enter Detail", "error");

      } else {
        swal("Good job!", "Message Send Successfully!", "success");
        // swal({
        //   title: "Good job!",
        //   text: "Message Sent Successfully!",
        //   icon: "success",
        //   button: "Thanks",
        // });
      }
    })
  }




  return (
    <>


      <div id="home" className="aaa  active colors flex w-screen  min-h-screen flex-col items-center justify-center relative bg-black ">

        {/* navbar.............................................................../.................................. */}

        <nav className=" w-screen d-flex z-50 py-1 px-3 fixed inset-x-0 pt-sm-1 top-0  flex justify-center items-center">
          <div className=" w-full md:w-auto  bg-navBar p-1.5 rounded-5 flex items-center ">
            <a href="#home" className="text1 fs-3 text-lg text-slate-200 font-medium ml-2 p-3 cursor-pointer text-decoration-none hover: text-white "> Raviraj Singh</a>
            <div className=" hidden md:flex items-center gap-6 ml-6 flex-1">
              <a href="#home" className="home text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out active  ">Home</a>
              <a href="#about" className=" text-decoration-none text-gray-400 text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out ">About</a>


              <a href="#skill" className="text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out ">Skill</a>

              <a href="#projects" className="text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out ">Projects</a>
              <a href="#hobby" className="text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out ">Hobbies</a>

              <a href="#contacts" className="text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out border-b-0 ">Contacts</a>
              <a href="#footer" className="text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out border-b-0 ">Footer</a>

              <a href="raj.png" className=" color text-decoration-none text-gray-400  ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2  mr-2 py-1 rounded-2xl hover:border-gray-100 duration-100 ease-in-out  "> <button className="color" type="button">Resume</button></a>

            </div>
            <div className=" block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsterval(!isAction)}
            >
              <HiMenu className=" text-2x1 text-textBase  text-slate-200 w-12 fs-1" />
            </div>
            {isAction && (
              <div className="p-4 w-275 d-md-none bg-navBar rounded-lg fixed top-28 right-8 flex flex-col items-center justify-evenly gap-6">
                <a href="#home" className="text-decoration-none  text-gray-400   text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out  " onClick={() => setIsterval(false)}>Home</a>
                <a href="#about" className="text-decoration-none  text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out " onClick={() => setIsterval(false)}>About</a>
                <a href="#skill" className="text-decoration-none text-gray-400 text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out " onClick={() => setIsterval(false)}>Skill</a>

                
                <a href="#projects" className="text-decoration-none text-base text-gray-400  text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out " onClick={() => setIsterval(false)}>Projects</a>
                <a href="#hobby" className="text-decoration-none text-base text-gray-400  text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out " onClick={() => setIsterval(false)}>Hobbies</a>

                <a href="#contacts" className="text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out border-b-0 " onClick={() => setIsterval(false)}>Contacts</a>
                <a href="#footer" className="text-decoration-none text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out border-b-0 " onClick={() => setIsterval(false)}>Footer</a>
                <a href="raj.png" download className=" color  text-decoration-none  text-gray-400  text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out " onClick={() => setIsterval(false)}>Reaume</a>

              </div>

            )}
          </div>
        </nav>


        <D />


        <h1 className=" text-white text-center justify-center my-2 pt-20  position-relative bottom-96 fs-1  " id="home"><Time /></h1>
        {/* <div className=" fle w-full h-full min-h-screen flex-col items-center justify-center relative pt-20 "> */}
        {/* <div className="relative w-100 h-100 pt-20 " id="home">
         <Spline  scene="https://prod.spline.design/5SrykOVIJlU8uNFv/scene.splinecode" /> */}
        {/* <div className=" absolute bottom-10 w-full justify-center items-center flex ">
          <div className=" shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
            <p className=" text-textBase">Press </p>
          </div>
        </div> */}
        {/* </div> */}
        {/* </div> */}






        {/* main Section...................................................................................... */}

        <main className=" position-relative  w-[80%] -mt-72">
          {/* About.......................................................................................... */}
          <h1 className="text1 text-white text-center justify-center border-b-2 " id="about">About</h1>
          <section className=" w-full grid-cols-1 md:grid-cols-2 gap-4 ">


            {/* img box..................................................................................... */}
            <div className=" w-full h-420 flex items-center justify-center">
              <div className="color  w-275  h-340  rounded-md relative">
                <img className="w-full h-full absolute -right-4 left-4 top-4 object-cover rounded-lg  shadow-lg" src={Vetri} alt="" />
              </div>
            </div>

            {/* Contacts box................................................................................................. */}
            <div className="w-full h-420 flex flex-col items-center justify-center position-relative top-8">
              <p className=" text-lg text-textBase mb-60 text-center text-white">
                UI/UX Designer
                <p className=" text-white-50">Hello Friend, I am <samp className=" text-white">RAVIRAJ SINGH !</samp> i am a qualified <br /> and professional wed developer with 2 years of experience in database <br /> administration and website design strong
                  <br /> creative and analytical skill team player with an eye for detail<p />

                </p>

                {/* creative and analytical skill team player with an eye for detail */}
              </p>
              {/* <button className=" py-5 w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shoadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80 ">Dowload</button> */}
              {/* <button href="#" className=" w-64 text-rose-800 justify-center items-center bg-black text-center text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out ">Dowload</button> */}





            </div>
            <div className=" position-relative bottom-28 items-center justify-center text-center "><a href="ravi.pdf" download><button type="button" class="color w-60 btn btn-outline-light mb-30 m-2 ">Dowload</button></a>
              {/* <button type="button" class=" w-60 btn btn-outline-light mb-30"> Like 112</button> */}

            </div>
          </section>


          {/* Skills............................................................................... */}
          <h1 className="text2 text-white text-center justify-center border-b-2  py-3 " id="skill">Skill</h1>
          <section className="w-full flex items-center justify-center mb-60 my-5">

            <VerticalTimeline>

              {
                Experience && Experience.map(n => (

                  <VerticalTimelineElement
                    key={n.id}
                  
                    className="vertical-timeline-element--work  "
                    contentStyle={{ background: 'while-800', color: 'black', textAlign: "center", }}
                    contentArrowStyle={{ borderRight: 'while' }}
                    // date={n.date}
                    iconStyle= {{ background: 'black', color: 'while' }}
                    icon={n.iconsSrc}
                  >
                    <div>

                      <h3 className="text1" >{n.title}</h3>
                      <h4>{n.per}</h4>
                      <p className=" mx-auto" >
                        {n.description} <br />
                        date-{n.date}

                      </p>
                      <h3 className=" text-orange-700">{n.pon}/100</h3>



                    </div>


                  </VerticalTimelineElement>


                ))

              }



            </VerticalTimeline>
          </section>

          {/* projection.......................................................................................... */}
          <h1 className="text1 text-white text-center justify-center border-b-2 pb-3" id="projects">Projects</h1>
          <section className=" flex flex-wrap items-center justify-evenly my-5 gap-4 h-100 w-100" >
            {Projects && Projects.map((n) => (

              <div key={n.id} className="  border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px]    hover:border-zinc-600 duration-100 ease-in-out">
                <p className="text-md text-textBase font-medium uppercase">
                  {/* {n.name.length>25?`${n.name.slice(0,25)}....`: n.name} */}
                </p>
                <img src={n.img} className=" object-cover rounded-md my-1 " alt="" />

                <div className="flex flex-1 items-center justify-between ">
                  <p className=" text-lg text-textBase font-medium uppercase mt-3 text-gray-300 ">{n.name}
                    {/* {n.name.length>25?`${n.name.slice(0,25)}....`: n.name} */}
                    <p className="text-lg text-gray-300 ">{n.nam}
                      <span className=" block texr-sm fs-9 text-gray-500">{n.techs}</span>
                    </p>
                  </p>
                  <a href={n.git}>
                    <div className=" mr-4">
                      <BsGithub className="colors text-textBase text-3xl cursor-pointer  text-gray-300 " />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </section>
          <Hobby/>

          {/* link.................................................... */}
          <h1 className="text1 text-white text-center justify-center border-b-2 pb-3" id="contacts">Contacts</h1>
          <div className="row ">
            <form className="col-sm-6 py-5" onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-white" id="name"> Your Name</label>
                <input type="name" name="fullName" class="  form-control" id="exampleFormControlInput1" placeholder="xyz" aria-describedby="emailHelp" />

              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-white" id="email">Enter a phone number</label>
                <input type="tel" name="phone" class="  form-control" id="exampleFormControlInput1" placeholder="+91-1234567890" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-white" id="email">Email address</label>
                <input type="email" name="email" class="  form-control" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class=" form-label text-white" id="magg">Massage</label>
                <textarea class="  form-control " name="message" id="exampleFormControlTextarea" placeholder="Message" rows="3"></textarea>
              </div>
              <div>
                <button type="submit" value="Send" class=" color btn btn-outline-light justify" id="btn">Submit</button>
              </div>
            </form>

            <form className=" col-sm-6 mb-24 mt-5 ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7287.49272778199!2d78.96281127628707!3d24.0400077377896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978c13a5f757363%3A0x583eb5b2243b9ae!2sBanda%2C%20Madhya%20Pradesh%20470335!5e0!3m2!1sen!2sin!4v1659635426977!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>

            </form>
          </div>




          <h1 className="text1 text-white text-center justify-center border-b-2 pb-3" id="footer">Footer</h1>



          <Footer />
          <div className=" position-relative  items-center justify-center text-center  bottom-6">

            <a href="#home" className=" cursor-pointer text-white-50 text-decoration-none">copyright 2022-2026 | Made By <span className=" text-white text1">Raviraj Singh</span> with React JS</a>
          </div>
          




        </main>

       
  

      </div>
     



    </>

  )
}

export default App
