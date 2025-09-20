import React from "react";
import "./SliderPart.css";
import Carousel from "react-bootstrap/Carousel";
import slider_1 from "../../assets/slide-01.jpg";
import slider_2 from "../../assets/slide-02.jpg";
import slider_3 from "../../assets/slide-03.jpg";
import Button from 'react-bootstrap/Button';
import Service from '../ServicePart/Service';
import BusinessSolution from "../BusinessSolution/BusinessSolution";
import About from '../AboutPart/About';
import Form from '../FormPart/Form';
import Testimonials from '../TestimonialsPart/Testimonials';
export default function SliderPart() {
  return (
    <div className="slider-part ">
      <Carousel>
        <Carousel.Item>
          <img src={slider_1} alt="Slider 1" />
          <Carousel.Caption>
            <div className="heading">
              <h1 className="fw-bolder">
                Best One in Town <br /> & crypto <span>Services</span>
              </h1>
              <div className="line"></div>
              <p>
                When you browse through different tags on TemplateMo website,
                you can see a variety of CSS templates which are responsive
                website designs for different individual needs.
              </p>
               <div className="btn-grup py-3">
                  <Button className="btn-1" variant="success">Discover More</Button>
                  <Button  className ="btn-2" variant="danger mx-md-4 ">Contact Us</Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={slider_2} alt="Slider 2" />
          <Carousel.Caption>
            <div className="heading">
              <h1 className="fw-bolder">
                Get <span>ready</span> for your <br /> business <br />& upgrade <span>all aspects</span>
              </h1>
             
              <div className="line"></div>
              <p>
                Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.
              </p>
              <div className="btn-grup py-3 ">
                  <Button className="btn-1" variant="success">Discover More</Button>
                  <Button  className ="btn-2" variant="danger mx-md-4 ">Contact Us</Button>
              </div>
              
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={slider_3} alt="Slider 3" />
          <Carousel.Caption>
           <div className="heading">
              <h1><span>Digital</span> Currency for you <br /> & Best <span>Crypto</span>Tips</h1>
              <div className="line"></div>
              <p>
               You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.
              </p>
               <div className="btn-grup py-3">
                  <Button className="btn-1" variant="success">Discover More</Button>
                  <Button  className ="btn-2" variant="danger mx-md-4 ">Contact Us</Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Service/>
      <BusinessSolution/>
      <About/>
      <Form/>
      <Testimonials/>
    </div>
  );
}
