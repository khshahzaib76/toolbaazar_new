import React from 'react';
import styled from 'styled-components';
import { RiStarSLine } from "react-icons/ri"; // Adjust the path to your filled star image
import { RiStarSFill } from "react-icons/ri" // Adjust the path to your empty star image
import { Link as LinkR  } from 'react-router-dom';
// import { Bio } from "../../data/constants";


export const Button = styled(LinkR)`
   
    width: 100%;
    padding: 10px;
    background-color: #ff3131;
    color: ${({ theme }) => theme.white};
    // box-shadow:  0 0 0 2px ${({ theme }) => theme.primary};
    border: 2px solid white;
    font-size: 25px;
    text-decoration:none;
    margin-top:10px;
    text-align:center;
    font-weight: 700;
    // border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover  {
        transform: translateY(-2px);
        box-shadow:  0 0 0 2px #ff3131;
    border: 2px solid white;
        }
        @media (max-width: 640px) {
            font-size:22px; 
            
          
          }
          @media (max-width: 640px) {

            font-size: 20px;
           
        }
`;

const Card = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 6px;
    background-color: ${({ theme }) => theme.card};
   
    // border-radius: 10px;
    // box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    // &:hover {
    //     transform: translateY(-10px);
    //     box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    //     filter: brightness(1.1);
    // }
    // &:hover ${Button} {
    //     display: block;
    // }
`;



const LowerContainer = styled.div`
    padding: 8px 20px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 5px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.black};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary };
    overflow: hidden;
    // margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    text-align:center;
`;

const Review = styled.div`
    display: flex;
    flex-direction: row;
    // align-items: center;
    justify-content:center;
    // padding-left: 10px;
`;
const Price = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 600;
    flex-direction: row;
    align-items: end;
    // justify-content:center;
    // padding-left: 10px;
    padding: 0px;
`;



const ReviewCount = styled.span`
    margin-left: 10px;
    font-size: 14px;
    color: #5c8cf4;
`;
const Span = styled.span`
   
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary };

   
`;

const RightCard = ({ project, idx}) => {
    const { rating,numreview } = project;
    const totalStars = 5;
    const filledStars = rating;
    const emptyStars = totalStars - filledStars;

    const sendMessage = () => {
        const whatsappMessage = `Hi, I'm interested in buying following tool:\nTitle: ${project.title}\nPrice: ${project.price}\n\n please provide me further details.`;
        const phoneNumber =  '+923279144557'; // Replace with the recipient's phone number in international format without the '+'
        const encodedMessage = encodeURIComponent(whatsappMessage);
    
        // const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        const appUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        // Open the URL in a new tab
         window.open(appUrl, '_blank');
    
        // If the new window didn't open (e.g., pop-up blocked), open the app URL
        // if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        //   window.location.href = appUrl;
        // }
      };

   

    return (
        <Card>
           
            <LowerContainer>
                <Details>
                    <Title>{project.title}</Title>
                    <Description>{project.description}</Description>
                    <Review>
                        {Array.from({ length: filledStars }, (_, index) => (
                            // <Star key={`filled-${index}`} src={RiStarSFill} alt="Filled star" />
                            <RiStarSFill key={`filled-${index}`} style={{ color:"#ffbc00", fontSize:"20px", }}/>
                        ))}
                        {Array.from({ length: emptyStars }, (_, index) => (
                            // <Star key={`empty-${index}`} src={RiStarSLine} alt="Empty star" />
                            <RiStarSLine key={`empty-${index}` } style={{color:"#ffbc00",  fontSize:"20px",}}/>
                        ))}
                        <ReviewCount>({numreview} reviews)</ReviewCount>
                    </Review>
                    <Price> {project.price} <Span>  / {project.priceper}</Span> </Price>
                    <Button style={{backgroundColor: "#ff3131"}} onClick={sendMessage}> Buy Now</Button>
                    {/* <Button to={Bio.whatsapp}  target="_blank"> Buy Now</Button> */}
                </Details>
            </LowerContainer>
        </Card>
    );
};

export default RightCard;
