import React, { useCallback } from "react";
import './SpecialArea.css';
import img1 from './4.jpg';
import img2 from './5.jpg';
import { useNavigate } from "react-router-dom";

const SpecialArea = () => {
  const navigate = useNavigate();
  const onClickBlogLink = useCallback(() => {
    window.scrollTo(0, 0);
    navigate("/blog")
  }, [navigate]);

  return(
    <div className='specialarea-wrap'>
      <div className='special-wrap'>
        <div className='specials-title'><span>特集</span></div>
        <div className='special-items'>
          <div className='special' onClick={onClickBlogLink}>
            <img src={img1} alt="" className='special-img'/>
            <h1 className='special-title'>title</h1>
            <div className='special-text'><span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span></div>
          </div>
          <div className='special' onClick={onClickBlogLink}>
            <img src={img2} alt="" className='special-img'/>
            <h1 className='special-title'>title</h1>
            <div className='special-text'><span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span></div>
          </div>
        </div>
        <div className='Allspecial-button'>
          <a href="/special" >特集記事の一覧へ ＞ </a>
        </div>
      </div>
    </div>
  )
}

export default SpecialArea; 