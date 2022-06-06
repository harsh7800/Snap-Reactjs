import React from 'react'
import Image from './Image';
import Info from './Info';
import './Section.scss'


function Section() {
  return (
    <section className="section-content">
      <Info/>
      <Image/>
    </section>
  );
}

export default Section