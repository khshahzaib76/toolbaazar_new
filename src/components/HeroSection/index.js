import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title,TitleName, Span, SubTitle } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { BsTools } from "react-icons/bs";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Enhance your digital life with <br /> <TitleName> {Bio.name}</TitleName> </Title>
                        <TextLoop>
                            We provide
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                            
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        {/* <Img src={HeroImg} alt="hero-image" /> */}
                        <BsTools style={{height:"60%", width:"60%", color:"#674cc4"}} />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection