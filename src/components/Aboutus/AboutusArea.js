import React from 'react';
import './AboutusArea.css';
import AboutusIcon from './Logoart.jpeg';

const AboutusArea  = () => {
  return (
    <div className='aboutus-wrap'>
      <img src={AboutusIcon} alt="aboutus" className='aboutus-logo'/>
      <div className='aboutus-textarea'>
        <h1><span>ー BANGER!!!とは ー</span></h1>
        <p className='aboutus-text1'>
          もうフツーの映画だけでは
          <br className="SPbr"></br>
          満足できない映画ファンに
          <br></br>
          味わい深いツボのある映画やドラマを、
          <br></br>
          独自の視点でオススメする
          <br></br>
          （ちょっとジャンルのかたよった）
          <br></br>
          映画評論・情報サイトです。
        </p>
        <p className='aboutus-text2'>
          映画館に、テレビに、ネットに、リアルな場に、
          <br class="PCbr"></br>
          オモシロい映画やドラマは世界中にあふれている!!!
          <br></br>
          観る楽しさ。感じる興奮。体験する喜び。
          <br></br>
          BANGER!!!は、あらゆる角度からあなたの映画愛を爆発させます!!!
        </p>
        <p className="aboutus_copylink">
          <a href="https://www.movieplus.jp/" target="_blank"><span>Powered by MoviePlus</span></a>
        </p>
      </div>
    </div>
  )
}

export default AboutusArea;