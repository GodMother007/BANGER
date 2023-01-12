import React from 'react';
import './WriterpageArea.css';
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import Icon1 from './icon1.JPG';


const WriterpageArea = () => {
  return (
    <div className='writerarea-wrap'>
      <div className='writerpage-intro'>
        <div className='writer-icon'>
          <img src={Icon1} alt="writer1"/>
          <span>Writer Name</span>
        </div>
        <div className='writerpage-profile'>
          <span>Writer Comment</span>
        </div>
      </div>
      <div className='items-title'>
        <span>Writer Nameの記事一覧</span>
      </div>
      <div className='writerpage-itemsarea'>
          <div className='item'>
            <img src={img1} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img2} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img3} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img4} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img5} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img1} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img2} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img3} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img4} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img5} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img1} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img2} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img3} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img4} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img5} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='item'>
            <img src={img1} alt="" className='item-img'/>
            <span className='items-text'>aaaaaaaaaaaa</span>
            <span className='items-date'>2022.11.1</span>
            <span className='items-writer' href="" >ライター名</span>
          </div>
          <div className='items-title your-title'><span>あなたにオススメ</span></div>
                <div className='your-item'>
                  <img src={img5} alt="" className='item-img'/>
                  <div>
                    <span className='items-text'>aaaaaaaaaaaa</span>
                    <span>カテゴリ</span>
                    <span className='items-date'>2022.11.1</span>
                    <span className='items-writer' href="" >ライター名</span>
                  </div>
                </div>
                <div className='your-item'>
                  <img src={img4} alt="" className='item-img'/>
                  <div>
                    <span className='items-text'>aaaaaaaaaaaa</span>
                    <span>カテゴリ</span>
                    <span className='items-date'>2022.11.1</span>
                    <span className='items-writer' href="" >ライター名</span>
                  </div>
                </div>
                <div className='your-item'>
                  <img src={img3} alt="" className='item-img'/>
                  <div>
                    <span className='items-text'>aaaaaaaaaaaa</span>
                    <span>カテゴリ</span>
                    <span className='items-date'>2022.11.1</span>
                    <span className='items-writer' href="" >ライター名</span>
                  </div>
                </div>
                <div className='your-item'>
                  <img src={img2} alt="" className='item-img'/>
                  <div>
                    <span className='items-text'>aaaaaaaaaaaa</span>
                    <span>カテゴリ</span>
                    <span className='items-date'>2022.11.1</span>
                    <span className='items-writer' href="" >ライター名</span>
                  </div>
                </div>
                <div className='your-item'>
                  <img src={img1} alt="" className='item-img'/>
                  <div>
                    <span className='items-text'>aaaaaaaaaaaa</span>
                    <span>カテゴリ</span>
                    <span className='items-date'>2022.11.1</span>
                    <span className='items-writer' href="" >ライター名</span>
                  </div>
                </div>
      </div>
    </div>
  )
}

export default WriterpageArea;