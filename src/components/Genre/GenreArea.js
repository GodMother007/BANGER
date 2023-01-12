import React from 'react';
import './GenreArea.css';

const GenreArea = () => {
  return (
    <div className='genre-wrap'>
      <div className='genre-title'><span>ジャンル</span></div>
      <ul className='genre-list'>
        <li className='genre-item'><a href='/key'>アクション</a></li>
        <li className='genre-item'><a href='/key'>サスペンス</a></li>
        <li className='genre-item'><a href='/key'>ヒューマンドラマ</a></li>
        <li className='genre-item'><a href='/key'>コメディ</a></li>
        <li className='genre-item'><a href='/key'>ＳＦ</a></li>
        <li className='genre-item'><a href='/key'>恋愛</a></li>
        <li className='genre-item'><a href='/key'>バイオレンス</a></li>
        <li className='genre-item'><a href='/key'>スリラー</a></li>
        <li className='genre-item'><a href='/key'>青春</a></li>
        <li className='genre-item'><a href='/key'>ホラー</a></li>
        <li className='genre-item'><a href='/key'>歴史・時代劇</a></li>
        <li className='genre-item'><a href='/key'>ファンタジー</a></li>
        <li className='genre-item'><a href='/key'>クライム</a></li>
        <li className='genre-item'><a href='/key'>音楽</a></li>
        <li className='genre-item'><a href='/key'>アドベンチャー</a></li>
        <li className='genre-item'><a href='/key'>ドキュメンタリー</a></li>
        <li className='genre-item'><a href='/key'>アニメーション</a></li>
        <li className='genre-item'><a href='/key'>カーアクション</a></li>
      </ul>
    </div>
  )
}

export default GenreArea;