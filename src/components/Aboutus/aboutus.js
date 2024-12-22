import React from 'react';
import { About } from "../../data/constants";
import "./aboutStyle.css";



function Aboutus() {
  const {team}= About;
  return (
    <div className='aboutcontainer'>
      <h1> About Us</h1>
      <p> {About.desc}</p>
      <h1> Our Team</h1>
      <div className='team'>
        {
          team.map((team, index)=>(
              <div className='members'>
                <img  src={team.image} alt={team.name}/>
                <h3> {team.name}</h3>

                <div className='details'>
                 <h4> {team.designation}</h4>
                 <h4 style={{color:"#674cc4" }}>{team.email}</h4>
                </div>
                
              </div>
          ))};


      </div>
    </div>
  );
}

export default Aboutus;
