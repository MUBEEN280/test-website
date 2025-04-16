import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };                         

  return (
    <div className="contact-page" style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        <div>
          <div className="card">
            <h3>Card 1</h3>
            <p>This is the content of card 1</p>
          </div>
        </div>
        <div>                                                               
          <div className="card">
            <h3>Card 2</h3>
            <p>This is the content of card 2</p>
          </div>
        </div>
        <div>
          <div className="card">
            <h3>Card 3</h3>
            <p>This is the content of card 3</p>
          </div>
        </div>
      </Slider>
        <h5>Hello</h5>
    </div>
  );
};

export default Contact;
