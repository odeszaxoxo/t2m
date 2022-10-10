import Socials from 'Components/Socials';
import Description from 'Components/UI/Description';
import Title from 'Components/UI/Title';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <Title marginSizeName="xs">Наши контакты</Title>
      <Description marginSizeName="xs">
        Звоните, если остались вопросы или нужна помощь по поиску работы. Звонок
        бесплатный
      </Description>

      <ul className="footer__phone-list">
        <li>
          <Description>Магазин</Description>
          <a href="tel:88007006303">8 800 700 63 03</a>
        </li>
        <li>
          <Description>Склад и перевозки</Description>
          <a href="tel:88003006777">8 800 300 67 77</a>
        </li>
        <li>
          <Description>Аптека</Description>
          <a href="tel:88006007271">8 800 600 72 71</a>
        </li>
      </ul>
      <Description>Узнайте больше о жизни компании</Description>
      <Socials className="footer__socials" />
      <Link className="footer__legacy-link" to="/">
        Политика в отношении файлов cookie
      </Link>
      <Link className="footer__legacy-link" to="/">
        Политика обработки персональных данных
      </Link>
      <Link className="footer__legacy-link" to="/">
        Согласие на обработку персональных данных
      </Link>
      <Description sizeName="xs">
        © Официальный сайт сети «Магнит». 2010‑2022 АО «Тандер»
      </Description>
    </footer>
  );
}
