import React from 'react';
import styled from 'styled-components';
import { useNavigate  } from 'react-router-dom';

const Button = styled.button`
    // display: none;
    width: 150px;
    padding: 10px;
    margin-top: 20px;
    background-color: #ff3131;
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 0 2px #ff3131;
        border: 2px solid white;
    }
    @media (max-width: 640px) {

        width: 100px;
       
    }
`;

const Card = styled.div`
    width: 100%;
    height: auto;
    padding: 6px 30px;
    background-color: ${({ theme }) => theme.card};
    margin-bottom: 20px;
   
    // border-radius: 10px;
    // box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    // overflow: hidden;
    display: flex;
    flex-direction: row;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 768px) {

       flex-direction: column;
       padding: 6px ;
       
    }
   
   
`;

const Image = styled.img`
    width: 500px;
    height: 280px;
    background-color: ${({ theme }) => theme.white};
    // border-radius: 10px;
    // box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    @media (max-width: 768px) {

        width: 100%;
        height: 58%;
       
    }
`;

const LowerContainer = styled.div`
    padding: 8px 20px 0 20px;
    @media (max-width: 768px) {
        
        padding: 8px 0 0 ;
        
    }
    
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:start;
    gap: 10px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin:5px 0 20px 0;
    color: ${({ theme }) => theme.black};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    @media (max-width: 768px) {

       margin-bottom: 6px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary };
    overflow: hidden;
    // margin-top: 8px;
    display: -webkit-box;
    
    max-width: 100%;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    line-height: 25px;
    text-overflow: ellipsis;
    text-align:left;
`;






const BlogCards = ({ blog, idx}) => {
   


    const navigate = useNavigate();
    const handleClick = () => {
        // navigate(`/components/cardinfo/cardinfo/${project}`);
        navigate('/components/blog/bloginfo', { state: { idx } });
    };

    return (
        <Card >
            <Image src={blog.image} alt={blog.title} />
            <LowerContainer>
                <Details>
                    <Title>{blog.title}</Title>
                    <Description>{blog.desc}</Description>
                    
                </Details>
                <Button onClick={handleClick}> Read More</Button>
            </LowerContainer>
        </Card>
    );
};

export default BlogCards;
