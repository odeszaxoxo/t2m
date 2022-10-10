import Section from 'Components/UI/Section';
import React from 'react';
import Hero from 'Components/Hero';
import useResize from 'Hooks/useResize';
import VacanciesList from 'Components/UI/List/VacanciesList';
import VariousList from 'Components/UI/List/VariousList';
import List from 'Components/UI/List';
import Title from 'Components/UI/Title';

import cn from 'classnames';
import heroImgDesktop from '../../../public/Images/Shop/heroBackgroundDesk.jpg';
import heroImg from '../../../public/Images/Shop/heroBackground.jpg';
import home from '../../../public/Images/Shop/home.svg';
import official from '../../../public/Images/Shop/official.svg';
import calendar from '../../../public/Images/Shop/calendar.svg';
import money from '../../../public/Images/Shop/money.svg';

const testList = [
  { title: 'Продавец-кассир', count: 241 },
  { title: 'Товаровед', count: 24 },
  { title: 'Охранник', count: 5 },
  { title: 'Грузчик', count: 99 },
];

const careerList = [
  { name: 'Продавец', additional: '1.5 мес.' },
  { name: 'Товаровед (зам. директора)', additional: '6 мес.' },
  { name: 'Директор', additional: '6 мес.' },
  { name: 'Супервайзер', additional: '6 мес.' },
  {
    name: 'Территориальный управляющий',
    additional: '6 мес.',
  },
  { name: 'Директор филиала', additional: '12 мес.' },
  { name: 'Операционный директор округа', additional: '' },
];

const shopList = [
  {
    title: 'Рядом с домом',
    description:
      'Магазины Магнит есть в 4 000 населённых пунктах — вам точно не придётся тратить время на дорогу до работы',
    icon: home,
  },
  {
    title: 'Официальное оформление',
    description:
      'Можно не беспокоиться о трудовом стаже, будущей пенсии и социальных выплатах. Чувствуйте себя уверенно в завтрашнем дне!',
    icon: official,
  },
  {
    title: 'Гибкий график работы',
    description:
      'Работа, которая учитывает ваши планы на отдых, время для семьи и хобби',
    icon: calendar,
  },
  {
    title: 'Стабильные выплаты',
    description:
      'Мы платим зарплату и аванс 15 и 30 числа каждого месяца. Можно планировать бюджет, отпуск или крупные покупки',
    icon: money,
  },
];

export default function Shop() {
  const { isDesktop } = useResize();
  const sectionClassNames = cn('shop', {
    'section--wide': isDesktop,
  });

  return (
    <Section className={sectionClassNames}>
      <Hero
        className="hero--shop"
        image={isDesktop ? heroImgDesktop : heroImg}
        title="Магазины"
      />
      <VacanciesList title="Выберите должность" list={testList} />
      <VariousList title="О работе в магазине" list={shopList} />
      <div className="list--career-container">
        <Title>Карьерный рост</Title>
        <h4>
          Для тех, кто хочет расти по&nbsp;карьерной лестнице, у&nbsp;нас есть
          специальная система для обучения и&nbsp;роста
        </h4>
        <List className="list--career" list={careerList} />
      </div>
    </Section>
  );
}
