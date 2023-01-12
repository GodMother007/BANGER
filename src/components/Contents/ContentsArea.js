import  React, {useState} from "react";
import "./ContentsArea.css";
import GenreArea from "../Genre/GenreArea";
import TopItemsArea from "../Items/TopItemsArea";
import SpecialItemsArea from "../Items/SpecialItemsArea";
import MovieItemsArea from "../Items/MovieItemsArea";
import DramaItemsArea from "../Items/DramaItemsArea";
import AnimeItemsArea from "../Items/AnimeItemsArea";
import NewsItemsArea from "../Items/NewsItemsArea";
import NewitemItemsArea from "../Items/NewitemItemsArea";
import NewsArea from "../News/NewsArea";
import RankingArea from "../Ranking/RankingArea";
import AboutusArea from "../Aboutus/AboutusArea";
import WritersArea from "../Writers/WritersArea";
import KeywordArea from "../Keyword/KeywordArea";
import BlogArea from "../Blog/BlogArea";
import SpecialArea from "../MainSpecial/SpecialArea";
import WriterpageArea from "../Writers/WriterpageArea";
import MediaQuery from "react-responsive";
import logo from "./images/logo.svg";
import ftlogo from "./images/logowhite.svg";
import bglogo from "./images/logoblack.svg";
import FacebookIcon from "./images/fb.png";
import TwitterLogoIcon from "./images/twt.png";
import SearchIcon from "./images/magnifying-glass.svg";
import ClossIcon from "./images/closs.svg";
import SliderArea from "../Slider/SliderArea";
import PowerpushArea from "../Powerpush/PowerpushArea";
import {
  Routes,
  Route,
  } from "react-router-dom";


const ContentsArea = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(current => !current);
  };

  const contactus = () => {
    window.open("/contactus", "お問い合わせ");
  }

  return (
  <>
    <div className="header-wrap">
      <div className="Site-header">
        <div className="logoarea">
            <Routes>
              <Route exact path="/" element={
                <div>
                  <img className="logo" src={logo} alt="logo"></img>
                  <span>映画評論・情報サイト</span>
                </div>
              }/>
              <Route exact path="/contactus" element={
                <div>
                  <img className="logo" src={ftlogo} alt="logo"></img>
                </div>
              }/>
              <Route path="/*" element={
                <a href="/">
                  <img className="logo hvr-buzz-out" src={logo} alt="logo"></img>
                  <span>映画評論・情報サイト</span>
                </a>
              }/>
            </Routes>
        </div>
        <div className="header-nav">
          <ul className="items-category">
            <li className="item-special"><a href="/special">特集</a></li>
            <li className="item-movie"><a href="/movie">映画</a></li>
            <li className="item-drama"><a href="/drama">ドラマ</a></li>
            <li className="item-anime"><a href="/anime">アニメ</a></li>
          </ul>
          <ul className="items-info">
            <li className="item-news"><a href="/news">新作ニュース</a></li>
            <li className="item-writer"><a href="/writer">ライター一覧</a></li>
          </ul>
        </div>
        <div className="header-intro">
          <div className="header-read">
            <form action="/key">
              <div className="search header-search" >
                <img src={SearchIcon} className="header-glass"/>
                <input placeholder="SEARCH" className="search-input" />
              </div>
            </form>
            <div className="header-sns">
              <a  href="https://twitter.com/" target="_blank" className="twt twth"><img alt="bird" src={TwitterLogoIcon}></img></a>
              <a  href="https://www.facebook.com/" target="_blank" className="fb fbh" ><img alt="f" src={FacebookIcon}></img></a>
              <MediaQuery query="(max-width: 991px)">
                <label className="gls" onClick={handleClick}>{isVisible ? <img  src={SearchIcon} alt="glass" /> : <img  src={ClossIcon} alt="closs" />}</label>
              </MediaQuery>
            </div>
            <MediaQuery query="(max-width: 991px)">
            <div id="hamburger">
              <div className="hamburger-menu">
                <input type="checkbox" id="menu-btn-check"></input>
                <label htmlFor="menu-btn-check" className="menu-btn"><div><span></span></div></label>
                <div id="menu-content">
                  <ul>
                    <div className="burger-logoarea">
                      <img className="burger-logo" src={bglogo} alt="logo"></img>
                      <span>映画評論・情報サイト</span>
                    </div>
                    <li className="burger-top"><a href="/">トップ</a></li>
                    <li className="burger-special"><a href="/special">特集</a></li>
                    <li className="burger-movie"><a href="/movie">映画</a></li>
                    <li className="burger-drama"><a href="/drama">ドラマ</a></li>
                    <li className="burger-anime"><a href="/anime">アニメ</a></li>
                    <li className="burger-writer"><a href="/writer">ライター一覧</a></li>
                    <li className="burger-news"><a href="/news">新着ニュース</a></li>
                    <li className="burger-about"><a href="/aboutus">BANGER!!!とは</a></li>
                  </ul>
                  <div className="burger-sns">
                    <span>FOLLOW US</span>
                    <a className="twt bgtwt" href="https://twitter.com/" target="_blank" ><img alt="bird" src={TwitterLogoIcon}></img></a>
                    <a className="fb bgfb" href="https://www.facebook.com/" target="_blank" ><img alt="m" src={FacebookIcon}></img></a>
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
          </div>
        </div>
      </div>
    </div>
    <MediaQuery query="(max-width: 991px)">
    <div className="hidden-searcharea" style={{display: isVisible ? "none" : "block"}}>
      <div className="hidden-search">
        <form action="/key">
          <img src={SearchIcon} className="header-glass hidden-glass"/>
          <input placeholder="SEARCH" className="search-input"/>
          <input type="submit" value="検索" className="submit hidden-submit"/>
        </form>
      </div>
    </div>
    </MediaQuery>
    <div className="main">
      <div className="inside">
          <Routes>
            <Route exact path="/" element={
              <>
                <SliderArea />
                <PowerpushArea />
              </>
            }/>
          </Routes>
        <div className="contentsarea-wrap">
            <Routes>
              <Route exact path="/" element={<TopItemsArea />}/>
              <Route path="/special" element={<SpecialItemsArea />}/>
              <Route path="/movie" element={<MovieItemsArea />}/>
              <Route path="/drama" element={<DramaItemsArea />}/>
              <Route path="/anime"element={<AnimeItemsArea />}/>
              <Route path="/news" element={<NewsItemsArea />}/>
              <Route path="/writer" element={<WritersArea />}/>
              <Route path="/writer/1" element={<WriterpageArea />} />
              <Route path="/newitem" element={<NewitemItemsArea />}/>
              <Route path="/aboutus" element={<AboutusArea />}/>
              <Route path="/key" element={<KeywordArea />} />
              <Route path="/blog" element={<BlogArea />} />
            </Routes>
          <div className="contents-side">
            <MediaQuery query="(max-width: 991px)">
                <Routes>
                  <Route exact path="/" element={<SpecialArea />} />
                </Routes>
            </MediaQuery>
            <RankingArea />
            <NewsArea />
            <GenreArea />
          </div>
        </div>
        <div className="top-specialarea-wrap">
        <MediaQuery query="(min-width: 992px)">
            <Routes>
              <Route exact path="/" element={<SpecialArea />} />
            </Routes>
        </MediaQuery>
        </div>
        <div className="creditarea">
          <span className="credit">credit</span>
        </div>
      </div>
    </div>
    <footer className="footer-wrap">
      <div className="Site-footer">
        <div className="footer-main">
          <div className="logoarea footer-logo hvr-buzz-out">
            <a href="/" >
              <img className="logo" src={ftlogo} alt="logo"></img>
              <span>映画愛、爆発!!!</span>
            </a>
          </div>
          <div className="footer-sns">
            <span>FOLLOW US</span>
            <a className="twt" href="https://twitter.com/" target="_blank" ><img alt="bird" src={TwitterLogoIcon}></img></a>
            <a className="fb" href="https://www.facebook.com/" target="_blank" ><img alt="m" src={FacebookIcon}></img></a>
          </div>
            <div className="search footer-search" >
              <form action="/key"><input className="footers-input" placeholder="SEARCH" action="/key"></input></form>
              <MediaQuery query="(max-width: 991px)">
                <input className="submit footers-submit" type="submit" value="検索" formAction="/key"/>
              </MediaQuery>
            </div>
        </div>
        <div className="footer-listarea">
          <ul className="footer-list">
            <li className="list-top"><a href="/">トップ</a></li>
            <li className="list-special"><a href="special">特集</a></li>
            <li className="list-none"></li>
            <li className="list-movie"><a href="/movie">映画</a></li>
            <li className="list-drama"><a href="/drama">ドラマ</a></li>
            <li className="list-anime"><a href="/anime">アニメ</a></li>
            <li className="list-writer"><a href="/writer">ライター一覧</a></li>
            <li className="list-news"><a href="/news">新着ニュース</a></li>
            <li className="list-about"><a href="/aboutus">BANGER!!!とは</a></li>
          </ul>
          <ul className="footer-info">
            <li className="list-kiyaku"><a href="https://www.movieplus.jp/corporate/privacy/" target="_blank">個人情報保護規約</a></li>
            <li className="list-company"><a href="https://www.movieplus.jp/corporate/" target="_blank">運営会社</a></li>
            <li className="list-contact" onClick={contactus}><a target="_blank">お問い合せ</a></li>
          </ul>
        </div>
        <div className="footer-copyarea">
          <a href="https://www.movieplus.jp/" target="_blank"><span className="copy-link">Powered by MoviePlus</span></a>
          <span className="copy-word">このホームページに掲載されているデータを権利者の許諾なく使用することを禁じます。</span>
          <span className="copyright">Copyright © BANGER!!! All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  </>
  )
}

export default ContentsArea;