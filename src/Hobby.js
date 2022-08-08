import React from "react";
import './App.css'
function Hobby() {
    return (
        <>
            <h1 className="text1 text-white pt-10 text-center justify-center border-b-2 pb-3 " id="hobby">Hobbies And Interests</h1>
            <div class="row row-cols-2 row-cols-md-4 bg-transparent g-4 pt-10 pb-14 cover-fill  ">
                <div class="col    bg-transparent">
                    <div class=" bg-transparent">

                        <img src="art.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Art</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class="  bg-transparent">
                        <img src="dance.png" />
                        <div class="card-body">
                            <h5 class="card-title text1  text-white text-center pt-3 fs-2">Dance</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent w-96">
                    <div class=" bg-transparent ">
                   
                            <img src="t.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Travel</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class=" bg-transparent">

                        <img src="game.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Games</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class="  bg-transparent">
                    <img src="com.png" class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Social Activition</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class="  bg-transparent ">
                        <img src="photog.png" class="card-img-top  rounded-circle" alt="..." />
                        <div class="card-body ">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Photography</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent ">
                    <div class="  bg-transparent">
                        <img src="code.png" class="card-img-top  fs-1" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-sm-5 pt-4 text1 fs-2 ">Coding</h5>

                        </div>
                    </div>
                </div>
                <div class="col  bg-transparent">
                    <div class="  bg-transparent">
                        <img src="yoga.png" class="card-img-top w-100" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title  text-white text-center pt-3 text1 fs-2">Yoga</h5>

                        </div>
                    </div>
                </div>
            </div></>

    )
}
export default Hobby