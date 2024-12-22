import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Bio } from '../../data/constants';


const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background:  ${({ theme }) => theme.primary};
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.white};
  background:  ${({ theme }) => theme.primary};
`;

const Logo = styled.a`
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
`;




const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo href="#about">ToolBaazar</Logo>
       
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.whatsapp} target="display"><WhatsAppIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
        All rights reserved &copy; 2024 | Developed by <a href="https://asadalihere.netlify.app/" style={{color: '#6be0cb', fontWeight:"600", textDecoration: 'underline' , cursor: 'pointer' }}> AAiSH Tech</a> 
       
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;