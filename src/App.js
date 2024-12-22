import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
// import Cardinfo from "./components/cardinfo";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from "./components/Footer";




import styled from "styled-components";
import CardInfo from "./components/cardinfo/cardinfo";
import Home from "./components/home";
import Blog from "./components/Blog/blog.js";
import Tc from "./components/Tc/tc.js";
import Aboutus from "./components/Aboutus/aboutus.js";
import BlogInfo from "./components/Blog/bloginfo.js";
import WhatsAppButton from "./components/Wabutton/wabutton.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  overflow-x: hidden;
`


function App() {
  const [darkMode] = useState(true);
  // const [openModal, setOpenModal] = useState({ state: false, project: null });
  // console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <Routes>
          <Route path="/" exact element ={ <Home/> } />
          <Route path="/components" exact element ={ <Home/> } />
          <Route path="/components/cardinfo/cardinfo/:idx"  element={ <CardInfo />} />
          <Route path="/components/blog/blog"  element={ <Blog /> } />
          <Route path="/components/blog/bloginfo"  element={  <BlogInfo/> } />
          <Route path="/components/tc/tc"  element={ <Tc/> } />
          <Route path="/components/aboutus/aboutus"  element={ <Aboutus/> } />
         
          </Routes>
        </Body>
        <WhatsAppButton/>
        <Footer />
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
