import React, { useCallback } from "react";
import './NewsArea.css';
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import { useNavigate } from "react-router-dom";

const NewsArea = () => {
  const navigate = useNavigate();
  const onClickBlogLink = useCallback(() => {
    window.scrollTo(0, 0);
    navigate("/blog")
  }, [navigate]);

  return (
  <div className='newsarea-wrap'>
    <div className='news-title'><span>新着ニュース</span></div>
    <div className='news-contents'>
      <div className='news' onClick={onClickBlogLink}>
        <div className='innertop'>
          <img src={img1} alt="" className='news-img'/>
          <span className='news-text'>aaaaaaaaaaaaaaaaaa</span>
        </div>
        <span className='news-logo'>ニュース</span>
        <span className='news-date'>2022.11.1</span>
      </div>
      <div className='news' onClick={onClickBlogLink}>
      <div className='innertop'>
          <img src={img2} alt="" className='news-img'/>
          <span className='news-text'>aaaaaaaaaaaaaaaaaa</span>
        </div>
        <span className='news-logo'>ニュース</span>
        <span className='news-date'>2022.11.1</span>
      </div>
      <div className='news' onClick={onClickBlogLink}>
      <div className='innertop'>
          <img src={img3} alt="" className='news-img'/>
          <span className='news-text'>aaaaaaaaaaaaaaaaaa</span>
        </div>
        <span className='news-logo'>ニュース</span>
        <span className='news-date'>2022.11.1</span>
      </div>
      <div className='news' onClick={onClickBlogLink}>
      <div className='innertop'>
          <img src={img4} alt="" className='news-img'/>
          <span className='news-text'>aaaaaaaaaaaaaaaaaa</span>
        </div>
        <span className='news-logo'>ニュース</span>
        <span className='news-date'>2022.11.1</span>
      </div>
      <div className='news' onClick={onClickBlogLink}>
      <div className='innertop'>
          <img src={img5} alt="" className='news-img'/>
          <span className='news-text'>aaaaaaaaaaaaaaaaaa</span>
        </div>
        <span className='news-logo'>ニュース</span>
        <span className='news-date'>2022.11.1</span>
      </div>
    </div>
  </div>
  )
}

export default NewsArea;