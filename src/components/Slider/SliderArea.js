import React from "react";
import "./SliderArea.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";


const SliderArea = () =>  {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '20%',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows:true,
  };
  return (
    <Slider {...settings}>
        <a className="slider-item" href="/blog"><img src={img1}/>
          <div>
            <span>aaaaaaaaaaaaaaaaaa</span>
          </div>
        </a>
        <a className="slider-item" href="/blog"><img src={img2}/>
          <div>
            <span>aaaaaaaaaaaaaaaaaa</span>
          </div>
        </a>
        <a className="slider-item" href="/blog"><img src={img3}/>
          <div>
            <span>aaaaaaaaaaaaaaaaaa</span>
          </div>
        </a>
        <a className="slider-item" href="/blog"><img src={img4}/>
          <div>
            <span>aaaaaaaaaaaaaaaaaa</span>
          </div>
        </a>
        <a className="slider-item" href="/blog"><img src={img5}/>
          <div>
            <span>aaaaaaaaaaaaaaaaaa</span>
          </div>
        </a>
    </Slider>
  );
}

export default SliderArea;