import React from 'react'
import ClientLogo from './ClientLogo';
import './Info.scss'

function Info() {
  return (
    <div className="info-wrapper">
      <div className="title">
        <h1 id='1stH1'>Make</h1>
        <h1 id='H1-2'>remote work</h1>
      </div>
      <p>
        Get your team in sync, no matter your location. Streamline,Processes,
        Create team rituals and watch productivity soar.{" "}
      </p>
      <button>Learn More</button>
      <ClientLogo/>
    </div>
  );
}

export default Info