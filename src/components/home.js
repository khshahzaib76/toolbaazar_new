import React from 'react';
import HeroSection from "./HeroSection";

import Projects from "./Projects";
// import { useState } from "react";

import styled from "styled-components";


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`


function Home() {
    // const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <div>
        <HeroSection />
          <Wrapper>
           
          </Wrapper>
          <Projects  />
          <Wrapper>
            
          </Wrapper>
          
    </div>
  );
}


export default Home;
