import React from 'react';
import './BlogArea.css';
import AdamandEve from './Adam.jpeg';
import TwitterIcon from './Twittericon.svg';
import FacebookIcon from './Facebookicon.svg';
import LineIcon from './Lineicon.svg';

const BlogArea  = () => {
  return (
    <div className='blogara-wrap'>
      <div className='blog-header'>
        <img src={AdamandEve} alt="adamandeve" />
        <h1 className='blog-title'>
          <span>淡々と展開される地獄世界に精神崩壊！A24が手がけるトラウマ級不気味映画『MEN -同じ顔の男たち』</span>
        </h1>
        <div className='blog-titlearea'>
          <div className='blog-lead'>
            <a className='blog-category' href='/key'>ホラー</a>
            <span className='blog-date'>2022.12.25</span>
          </div>
          <div className='blog-sns'>
            <span>ライター：
              <a className='writer-name' href='/writer/1'><span>ニュース編集部</span></a>
            </span>
            <div>
              <a  href="https://www.facebook.com/" target="_blank" className="fb-blog" ><img alt='f' src={FacebookIcon}></img></a>
              <a  href="https://twitter.com/" target="_blank" className="twt-blog"><img alt='bird' src={TwitterIcon}></img></a>
              <a  href="https://www.line.com/" target="_blank" className="line-blog" ><img alt='line' src={LineIcon}></img></a>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-main'>
        <h2 className='blog-caption1'>
          <span>静寂を求めて逃げ込んだ閑静な街には、同じ顔をした男達しかいなかった</span>
        </h2>
        <div className='blog-headtext'>
          <span>
            　主人公の女性（ハーパー）は、夫の自殺現場を目撃したショックを癒すため、都心から離れた自然豊かな田舎の豪邸に訪れていた。
            周りの自然の美しさと、豪邸を独り占めできる余裕に浸っていたハーパーだが、散策中の森の中で突如謎の全裸男に追いかけられる。
            <br></br>
            　最初はただの変質者だと思って油断していたハーパーだが、この出来事から街の男たちの異様さに気付き始める。しかし気づいてしまったが最後、終わることのない地獄のような恐怖が始まる。
          </span>
        </div>
        <div className="youtube-area"><iframe width="560" height="315" src="https://www.youtube.com/embed/pt81CJcWZy8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <h3 className='blog-sub'>
          <span>『ミッドサマー』『ヘレディタリー』のA24が手がけるトラウマ級ホラー</span>
        </h3>
        <div className='blog-maintext'>
          <span>
            　人気のない静かで美しい森、広くて開放的な豪邸、淡々と進んでいく物語、トンネルに反響するパーハーの声。
            初めは美しさそのものだったが、やがてそれらは映画全体の不気味さを助長するホラー要素と化していく。
            <br></br>
            　登場する男性は漏れなく皆ハーパーに攻撃的であり、支配的であり、その特徴が極端に描写されている。
            豪邸の庭にあるりんごの木、教会にある女性の彫刻、自然に侵食されていく全裸男、体内に吸い込まれるタンポポの種、異様な形で連続出産する同じ顔の男たち。
            どれも性を意味する描写であり、女性蔑視や性差別に対する嫌悪を生理的嫌悪として表している。
            美しい情景の中で繰り広げられるトラウマ級のリアル描写には、社会問題や人権問題へのメッセージを投げ続けるA24らしさが感じられた。
          </span>
        </div>
      </div>
      <div className='blog-footer'>
        <div className='blog-sns'>Share On　
          <a href="https://www.facebook.com/" target="_blank" className="fb-blog" ><img alt='f' src={FacebookIcon}></img></a>
          <a href="https://twitter.com/" target="_blank" className="twt-blog"><img alt='bird' src={TwitterIcon}></img></a>
          <a href="https://www.line.com/" target="_blank" className="line-blog" ><img alt='line' src={LineIcon}></img></a>
        </div>
        <div className='blog-tag'>
          <ul className='blog-taglist'>
            <li><a href="/key">ホラー</a></li>
            <li><a href="/writer/1">ニュース編集部</a></li>
            <li><a href="/newitem">新着</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogArea;