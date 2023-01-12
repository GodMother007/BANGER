import React, { useCallback } from "react";
import './RankingArea.css';
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import { useNavigate } from "react-router-dom";

const RankingArea = () => {
  const navigate = useNavigate();
  const onClickBlogLink = useCallback(() => {
    window.scrollTo(0, 0);
    navigate("/blog")
  }, [navigate]);

  return (
  <div className='ranking-wrap'>
    <div className='ranking-title'><span>記事ランキング</span></div>
    <div className='ranking-contents'>
      <div className='ranking' onClick={onClickBlogLink}>
        <div className='ranking-innertop'>
          <img src={img1} alt="" className='ranking-img'/>
          <div className='ranking-text ranking1'><span>aaaaaaaaaaaaaaaaaa</span></div>
        </div>
        <div>
          <span className='ranking-logo'>カテゴリー</span>
          <span className='ranking-date'>2022.11.1</span>
          <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
        </div>
      </div>
      <div className='ranking' onClick={onClickBlogLink}>
      <div className='ranking-innertop'>
          <img src={img2} alt="" className='ranking-img'/>
          <div className='ranking-text ranking2'><span>aaaaaaaaaaaaaaaaaa</span></div>
        </div>
        <span className='ranking-logo'>カテゴリー</span>
          <span className='ranking-date'>2022.11.1</span>
          <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className='ranking' onClick={onClickBlogLink}>
      <div className='ranking-innertop'>
          <img src={img3} alt="" className='ranking-img'/>
          <div className='ranking-text ranking3'><span>aaaaaaaaaaaaaaaaaa</span></div>
        </div>
        <span className='ranking-logo'>カテゴリー</span>
          <span className='ranking-date'>2022.11.1</span>
          <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className='ranking' onClick={onClickBlogLink}>
      <div className='ranking-innertop'>
          <img src={img4} alt="" className='ranking-img'/>
          <div className='ranking-text ranking4'><span>aaaaaaaaaaaaaaaaaa</span></div>
        </div>
        <span className='ranking-logo'>カテゴリー</span>
          <span className='ranking-date'>2022.11.1</span>
          <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className='ranking' onClick={onClickBlogLink}>
      <div className='ranking-innertop'>
          <img src={img5} alt="" className='ranking-img'/>
          <div className='ranking-text ranking5'><span>aaaaaaaaaaaaaaaaaa</span></div>
        </div>
          <span className='ranking-logo'>カテゴリー</span>
          <span className='ranking-date'>2022.11.1</span>
          <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
    </div>
  </div>
  )
}

export default RankingArea;