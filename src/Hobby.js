import React from "react";
import './App.css';
import img1 from "./img/t.png";
import art from "./img/art.png";
import dance from "./img/dance.png";

import game from "./img/game.png";

import com from "./img/com.png";

import photog from "./img/photog.png";

import code from "./img/code.png";
import yoga from "./img/yoga.png";




function Hobby() {
    return (
        <>
            <h1 className="text1 text-white pt-10 text-center justify-center border-b-2 pb-3 " id="hobby">Hobbies And Interests</h1>
            <div class="row row-cols-2 row-cols-md-4 bg-transparent g-4 pt-10 pb-14 cover-fill  ">
                <div class="col    bg-transparent">
                    <div class=" bg-transparent">

                        <img src={art} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Art</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class="">
                        <img src={dance} />
                        <div class="card-body">
                            <h5 class="card-title text1  text-white text-center pt-3 fs-2">Dance</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent w-96">
                    <div class=" bg-transparent ">
                   
                            <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Travel</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class=" bg-transparent">

                        <img src={game} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Games</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class="  bg-transparent">
                    <img src={com} class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Social Activition</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class="  bg-transparent ">
                        <img src={photog} class="card-img-top  rounded-circle" alt="..." />
                        <div class="card-body ">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Photography</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent ">
                    <div class="  bg-transparent">
                        <img src={code} class="card-img-top  fs-1" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-sm-5 pt-4 text1 fs-2 ">Coding</h5>

                        </div>
                    </div> 
                </div>
                <div class="col  bg-transparent">
                    <div class="  bg-transparent">
                        <img src={yoga} class="card-img-top w-100" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Yoga</h5>

                        </div>
                    </div>
                </div>
            </div></>

    )
}
export default Hobby