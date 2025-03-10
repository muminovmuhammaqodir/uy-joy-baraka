/* eslint-disable no-unused-vars */

import React from "react";
import "./footer.scss";
// Store links
import AppStorePic from "../../../public/assets/images/footer_store-link_iphone.svg";
import PlayStorePic from "../../../public/assets/images/footer_store-link_android.svg";
import Logo from "../../../public/assets/images/logo.svg";
// Footer icons
import TelegramIcon from "../../../public/assets/images/tg-icon.svg";
import InstagramIcon from "../../../public/assets/images/insta-icon.svg";
import FacebookIcon from "../../../public/assets/images/facebook-icon.svg";
import TwitterIcon from "../../../public/assets/images/twitter-icon.svg";
import YouTubeIcon from "../../../public/assets/images/youtube-icon.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {/* Pre footer */}
      <div className="upper-footer">
        <div className="container">
          <div className="pre-footer mt-5">
            <div className="pre-footer__inner">
              <img
                className="pre-footer__bg"
                src="../../../public/assets/images/footer_bg-phone.png"
                alt=""
              />
            </div>
            <div className="pre-footer__inner">
              <h2 className="pre-footer__text">
                Har doim xabardor bo’ling Uy-joy baraka ilovasini yuklab oling
              </h2>
            </div>
            <div className="pre-footer__inner">
              {/* Pre links [1] */}
              <div className="pre-footer__links">
                <a
                  className="pre-footer__button"
                  href="https://www.apple.com/uz/app-store/"
                >
                  <img src={AppStorePic} alt="" />
                </a>
              </div>
              {/* Pre links [2] */}
              <div className="pre-footer__links">
                <a
                  className="pre-footer__button"
                  href="https://play.google.com/store/games?pli=1"
                >
                  <img src={PlayStorePic} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer__items">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="footer__items">
              <Link className="footer__aboutLink" to="/haqida">
                Biz haqimizda
              </Link>
              <ul className="footer__list links">
                <li>
                  <a href="https://t.me/hamkorlikuyjoybaraka">Hamkorlik</a>
                </li>
                <li>
                  <a href="https://t.me/reklamauyjoybaraka">Reklama</a>
                </li>
                <li>
                  <a href="tel:+998907776655">Murojaat uchun</a>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <ul className="footer__list social_links">
                <li>
                  <a href="https://t.me/uyjoybaraka">
                    <img src={TelegramIcon} alt="Telegram icon" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com">
                    <img src={InstagramIcon} alt="Instagram icon" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com">
                    <img src={FacebookIcon} alt="Facebook icon" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <img src={TwitterIcon} alt="Twitter icon" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com">
                    <img src={YouTubeIcon} alt="YouTube icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__innerTitle">
            <p>
              «uy-joy baraka.uz» сайтида эълон қилинган материаллардан нусха
              кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят
              ёзма розилиги билан амалга оширилиши мумкин. Гувоҳнома: №0987.
              Берилган санаси: 22.06.2023 йил. Муассис: «WEB EXPERT» МЧЖ.
              Таҳририят манзили: 100043, Тошкент шаҳри, К. Ёрматов кўчаси,
              12-уй. Электрон манзил: info@uyjoy.uz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
