import React from 'react'
import './ClientLogo.scss'
import Databiz from "../images/client-databiz.svg";
import AudioPhile from "../images/client-audiophile.svg";
import Meet from "../images/client-meet.svg";
import Maker from "../images/client-maker.svg";

function ClientLogo() {
  return (
    <div className="client-logo">
      <img style={{ width: "5em", height: "1.5em" }} src={Databiz} alt="" />
      <img style={{ width: "5em", height: "2.5em",marginLeft:'20px' }} src={AudioPhile} alt="" />
      <img style={{ width: "5em", height: "1.5em",marginLeft:'20px' }} src={Meet} alt="" />
      <img style={{ width: "5em", height: "1.5em",marginLeft:'20px' }} src={Maker} alt="" />
    </div>
  );
}

export default ClientLogo