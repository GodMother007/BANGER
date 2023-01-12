import './PowerpushArea.css';
import React, { useState, useEffect } from "react";
import img1 from "./2.jpg";
import img2 from "./3.jpg";
import img3 from "./4.jpg";
import img4 from "./5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 画面幅がこの値に満たないときはスライドショー表示する
const WIDTH_THRESHOLD = 768;

const PowerpushArea = () => {

  const [width, setWidth] = useState(window.innerWidth)
  
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
    capture: false,
    passive: true,
  })

  return () => window.removeEventListener(`resize`, updateWidth)
  })

  if (width < WIDTH_THRESHOLD) {
    // 画像をスライドショー表示する
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: '10%',
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows:true
    };
    return (
      <div className="powerpush-wrap">
        <span className='powerpush-title'>POWER PUSH!!!</span>
        <Slider {...settings}>
          <a className="content" href='/blog'>
            <img src={img1} alt="" />
            <div><span className='pp-comment'>ああああああああああああああああああ</span></div>
          </a>
          <a className="content" href='/blog'>
            <img src={img2} alt="" />
            <div><span className='pp-comment'>ああああああああああああああああああ</span></div>
          </a>
          <a className="content" href='/blog'>
            <img src={img3} alt="" />
            <div><span className='pp-comment'>ああああああああああああああああああ</span></div>
          </a>
          <a className="content" href='/blog'>
            <img src={img4} alt="" />
            <div><span className='pp-comment'>ああああああああああああああああああ</span></div>
          </a>
        </Slider>
      </div>
    )
  }
  return (
    <div className="powerpush-wrap">
      <span className='powerpush-title'>POWER PUSH!!!</span>
      <div className="pp-contents">
        <a className="content" href="/blog">
          <img src={img1} alt="" />
          <span className='pp-comment'>ああああああああああああああああああ</span>
        </a>
        <a className="content" href="/blog">
          <img src={img2} alt="" />
          <span className='pp-comment'>おおおおおおおおおおおおおおおおおおおおお</span>
        </a>
        <a className="content" href="/blog">
          <img src={img3} alt="" />
          <span className='pp-comment'>ああああああああああああああああああああああああ</span>
        </a>
        <a className="content" href="/blog">
          <img src={img4} alt="" />
          <span className='pp-comment'>うううううううううううううううううううううううう</span>
        </a>
      </div>
    </div>
  );
}


export default PowerpushArea;