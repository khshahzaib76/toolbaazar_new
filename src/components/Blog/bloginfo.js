import React from 'react';
import styled from 'styled-components';

import { useLocation } from "react-router-dom";

import { Blogs } from '../../data/constants'
import { GiCheckMark } from "react-icons/gi";
import "./blogStyle.css";

const Card = styled.div`
    width: 100%;
    height: auto;
    padding: 50px 10%; 
    margin-bottom: 20px; 
    display: flex;
    flex-direction: column;
    ailgn-items: center;
    justify-content: center;
    

    gap: 14px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 768px) {

       flex-direction: column;
       padding: 20px ;
       
    }
   
   
`;

const Image = styled.img`
    width: 100%;
    height: 40%;
   
    @media (max-width: 768px) {

        width: 100%;
        height: 58%;
       
    }
`;
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-top:20px;
    color: ${({ theme }) => theme.black};
   
`;
const LowerContainer = styled.div`
    // padding: 8px 20px 0 20px;
    @media (max-width: 768px) {
        
        padding: 4px 0 0 0;
        
    }
    
`;




function LeftSection({ blog }) {
    const { detail } = blog;
    return (
      <div className="left-section-blog">
        {detail.map((detail) => (
          <div style={{ lineHeight: "26px", margin: "4px 0", textAlign:"left" }}>
            {detail?.para && <div>{detail.para}</div>}
  
            {detail?.point && (
              <div style={{ lineHeight: "26px", margin: "15px 0 40px 15px" }}>
                {detail?.point?.map((point, index) => (
                  <div> <GiCheckMark style={{fontSize:"13px" , marginRight:"10px", color: "#674cc4"}}>{point}</GiCheckMark> {point}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }



const BlogInfo = () => {
   
    const location = useLocation();
    const { idx } = location.state;

    

    return (
        <Card >
            <Image src={Blogs[idx].image} alt={Blogs[idx].title} />
            <Title> {Blogs[idx].title } </Title>
            <LowerContainer>

                <LeftSection blog={Blogs[idx]} />
                
            </LowerContainer>
        </Card>
    );
};

export default BlogInfo;
