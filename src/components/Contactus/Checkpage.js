import React from 'react';
import './Contact.css';

const Checkpage = () => {
  const toppage = () => {
    window.close();
  } 

  return (
    <>
    <div className='contactus_header'></div>
    <div className='contactus_checked whopper'>
      <div className="content_title">
        <p>送信が完了しました</p>
      </div>
      <div className='contactus_comment'>
        <span>お問い合わせありがとうございました。<br></br>追って担当者よりご連絡いたします。</span>
      </div>
      <input type="button" value="画面を閉じる" className="back_top" onClick={toppage}/>
    </div>
    <div className='contactus_footer'></div>
    </>
  )
}

export default Checkpage;