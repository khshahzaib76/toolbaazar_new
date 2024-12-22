import React from 'react';
import styled from 'styled-components';
import { Link as LinkR , Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BsTools } from "react-icons/bs";
// import { GoHomeFill } from "react-icons/go";


export const Nav = styled.div`
    background-color: ${({theme}) => theme.primary};
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
  
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 6px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    // padding: 0 1px;
    display: flex;
    // justify-content: start;
    // align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
    padding-left: 30px;
      // justify-content: center;
      
  }
`;
export const Span = styled.div`
    margin-left:8px;
    font-weight: bold;
    font-size: 30px;
    color: ${({theme}) => theme.white};
    @media (max-width: 640px) {
      font-size: 25px;
      // padding-left: 30px;
  }
    @media (max-width: 400px) {
      font-size: 25px;
      // padding-left: 20px;
  }

`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:end;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled(Link)`
    color: ${({ theme }) => theme.white};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      //color: ${({ theme }) => theme.primary};
      color: #ff3131;
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.secondary};
    }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    // position: absolute;
    // top: 0;
    // right: 0;
    // transform: translate(-100%, 60%);
    font-size: 25px;
    margin-right:20px;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.primary};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`
export  const MobileLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;





const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
        <NavbarContainer>

        <NavLogo to='/'>
          {/* <div style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}> */}

          <BsTools style={{ color:"white", fontSize:"26px",marginRight:"10px",}} />
          <Span>ToolBaazar</Span> 
          {/* </div> */}
        </NavLogo>

            <MobileIcon>
            <FaBars onClick={() => {
                setIsOpen(!isOpen)
            }} />
            </MobileIcon>

            <NavItems>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/components/Blog/blog">Blogs</NavLink>
            <NavLink to="/components/tc/tc">T&C</NavLink>
            <NavLink to="/components/aboutus/aboutus">About Us</NavLink>
            </NavItems>
            {
            isOpen &&
            <MobileMenu isOpen={isOpen}>
                <MobileLink to="/" onClick={() => {
                setIsOpen(!isOpen)
                }}>Home</MobileLink>

                <MobileLink to="/components/Blog/blog" onClick={() => {
                setIsOpen(!isOpen)
                }}>Blogs</MobileLink>

                <MobileLink  to="/components/tc/tc" onClick={() => {
                setIsOpen(!isOpen)
                }}>T&C</MobileLink>

                <MobileLink  to="/components/aboutus/aboutus" onClick={() => {
                setIsOpen(!isOpen)
                }}>About Us</MobileLink>
            </MobileMenu>
            }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;




