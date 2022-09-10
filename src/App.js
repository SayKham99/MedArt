import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Options from "./components/Options/Options";
import Footer from "./components/Footer2/Footer2";
import Testemonial from "./components/Testemonial/Testemonial";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brands from "./components/Brands/Brands";
import Connect from "./components/Connect/Connect";
import Services from "./components/Services/Services"
import Doctors from "./components/Doctors/Doctors";
import News from "./components/News/News";
import Blog from "./components/Blogs/Blog";
import { Spinner } from '@chakra-ui/react';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Contact from "./components/Contact/AllContact"
import PopupMenu from "./components/PopupMenu/Popup";
import FAQs from "./components/FAQs/Faq";
import Forms from "./components/Forms/Form"
AOS.init(5000);
// <Spinner
//     thickness='4px'
//     speed='0.65s'
//     emptyColor='gray.200'
//     color='blue.500'
//     size='xl'
// />
function App() {

  return (
    <div className="App">
        <PopupMenu />
        <Navbar />
        <Nav />
        <Forms />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="news" element={<News />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
        <FAQs />
        <Options />
        <Testemonial />
        <Brands />
        <Connect />
        <Footer />
    </div>
  );
}
export default App;
