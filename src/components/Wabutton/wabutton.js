import React from 'react';
import './wabutton.css';


import { Link   } from 'react-router-dom';
import { Bio } from "../../data/constants";


const WhatsAppButton = () => {
  

  return (
    <div className="whatsapp-button-container">
      <Link className="whatsapp-button" to={Bio.whatsapp}  target="_blank">
       {/* <IoLogoWhatsapp style={{fontSize:"50px", color:"#25d366"}} /> */}
       <img src={Bio.walogo} alt="wa button"/>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
