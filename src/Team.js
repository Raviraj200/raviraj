import React from "react";
import './App.css';
import { BsGithub } from "react-icons/bs";
import { Meets } from "./data";


function Team (){
    return(
    <>
          <h1 className="text1 text-white text-center justify-center border-b-2  py-3 " id="team">Team's</h1>

 <section className=" flex flex-wrap items-center justify-evenly my-5 gap-4 h-100 w-100" >   
 {Meets && Meets.map(n => (
<div key={n.id} className="wrapper-team cursor-pointer" >
  <div className="card-team">
    <div className="content-team">
      <div className="img-team"><img src={n.img} alt="" /></div>
      <div className="details-team">
      <span className="name-team">{n.name}</span>
      <p>{n.skill}</p>
    </div>
    </div>
    <a href={n.lpink}>
                    <div className=" mr-4 mt-3">
                      <BsGithub className="hover:text-slate-100 text-textBase text-3xl cursor-pointer text-black " />
                    </div>
                  </a>

  </div>
  <a href="n"></a>
</div>
 ))}
</section>


</>

    )
}

export default Team