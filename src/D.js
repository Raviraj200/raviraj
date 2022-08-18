import React from "react";
import Spline from "@splinetool/react-spline";


import './App.css';
import { Application } from '@splinetool/runtime';


function D() {
  

  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('Loading...');

  return (<>

    <div class=" carousel slide -top-16  pt-sm-0 -mb-100  w-screen h-screen " data-bs-ride="carousel">
      <div class="carousel-inner h-100 w-100 ">
        <div class="carousel-item w-190 h-full  active">
          <img className=" text-white  mt-64 d-md-none" src="lo.svg"  alt="..."/>
          {/* <Spline id="canvas3d" className=" d-none d-md-block" scene="https://prod.spline.design/2tFzfpVGQ1MQ2TdK/scene.splinecode"></Spline> */}
    
           
        </div>


      </div>

    </div>
    <div className=" d-none d-md-block position-relative bottom-56 md:bottom-40 items-center justify-center text-center flex  "><a download><button type="button" class="rounded-pill w-60 btn btn-outline-light mb-30 m-4 text-bg-secondary ">Press and drag to orbit</button></a>
      {/* <button type="button" class=" w-60 btn btn-outline-light mb-30"> Like 112</button> */}

    </div>




  </>
  )

}
export default D
