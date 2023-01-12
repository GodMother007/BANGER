import React, { useCallback } from "react";
import "./Items.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import {
  Routes,
  Route,
  useNavigate,
  } from "react-router-dom";

const TopItemsArea = () => {
  const navigate = useNavigate();
  const onClickBlogLink = useCallback(() => {
    window.scrollTo(0, 0);
    navigate("/blog")
  }, [navigate]);

  return (
    <div className="itemsarea-wrap">
      <div className="items-title">
        <span>新着記事</span>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img1} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img2} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img3} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img4} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img5} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img1} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img2} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img3} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img4} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img5} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img1} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img2} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img3} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img4} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img5} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img1} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img2} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img3} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img4} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <div className="item" onClick={onClickBlogLink}>
        <img src={img5} alt="" className="item-img"/>
        <span className="items-text">aaaaaaaaaaaa</span>
        <span className="items-date">2022.11.1</span>
        <a className="items-writer" href="/writer/1"><span>ライター名</span></a>
      </div>
      <a href="/newitem" className="Allitems-button">新規記事の一覧へ ＞ </a>
    </div>
  )
}

export default TopItemsArea;