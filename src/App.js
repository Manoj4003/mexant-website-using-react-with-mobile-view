
import './App.css';
import Header from './components/HeaderSection/Header';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import SliderPart from "../src/components/HomePage/SliderPart"

import Service from "../src/components/ServicePart/Service";
import About from "../src/components/AboutPart/About";
import Form from "../src/components/FormPart/Form";
import TestiMonials from "../src/components/TestimonialsPart/Testimonials";
import Footer from "../src/components/FooterSection/Footer";
import PagesAboutus from "../src/components/PagesAboutus/PagesAboutus";
import PagesContactus from "../src/components/PagesContactus/PagesContactus";
import PagesOurService from "../src/components/PagesOurService/PagesOurService";

function App() {
  return (
    <div className="App">
     <Header/>
      
           <Routes>

                <Route path="/" element={<SliderPart/>}></Route>
                <Route path="/services" element={ <Service/>}></Route>
                <Route path="/about" element={  <About/>}></Route>
                <Route path="/pagesaboutus" element={<PagesAboutus/>}></Route>
                <Route path="/pageourservice" element={ <PagesOurService/>}></Route>
                <Route path="/pagescontactus" element={  <PagesContactus/>}></Route>
                <Route path="/testnominals" element={ <TestiMonials/>}></Route>
                <Route path="/form" element={  <Form/>}></Route>



           </Routes>

        <Footer/>
    </div>
  );
}

export default App;
