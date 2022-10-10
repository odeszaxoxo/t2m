import React from 'react';
import Section from 'Components/UI/Section';
import Hero from 'Components/Hero';
import Button from 'Components/UI/Button';
import ShopIcon from 'Icons/WorkDirections/Shop';
import CarIcon from 'Icons/WorkDirections/Car';
import WarehouseIcon from 'Icons/WorkDirections/Warehouse';
import WorksIcon from 'Icons/WorkDirections/Works';
import OfficeIcon from 'Icons/WorkDirections/Office';
import PharmaIcon from 'Icons/WorkDirections/Pharma';
import ItIcon from 'Icons/WorkDirections/It';
import SloganIcon from 'Icons/Slogan';
import cn from 'classnames';
import useResize from 'Hooks/useResize';
import List from 'Components/UI/List';
import Title from 'Components/UI/Title';
import person from '../../../public/Images/Home/person.png';
import heroImgDesktop from '../../../public/Images/Home/heroBackgroundDesk.png';
import heroImg from '../../../public/Images/Home/heroBackground.png';

export default function Home() {
  const { isDesktop } = useResize();
  const sectionClassNames = cn('home', {
    'section--wide': isDesktop,
  });

  const testList = [
    'Тутаев',
    'Фоминское',
    'Мунделеево',
    'Григорьевское Григорьевское Григорьевское Григорьевское',
    'Остановка «33 Магазин Остановка «33 Магазин»',
  ];

  return (
    <Section className={sectionClassNames}>
      <Hero
        className="hero--home"
        image={isDesktop ? heroImgDesktop : heroImg}
        title="Стань частью команды Магнит"
      />

      <div className="home__work-directions">
        <Title sizeName="xl">Выберите, где хотите работать</Title>
        <Button url="/" className="home__work-direction">
          <ShopIcon />
          <h5>Магазины</h5>
        </Button>
        <Button url="/" className="home__work-direction">
          <CarIcon />
          <h5>Перевозки</h5>
        </Button>
        <Button url="/" className="home__work-direction">
          <WarehouseIcon />
          <h5>Склад</h5>
        </Button>
        <Button url="/" className="home__work-direction">
          <PharmaIcon />
          <h5>Аптеки</h5>
        </Button>
        <Button url="/" className="home__work-direction">
          <OfficeIcon />
          <h5>Офис</h5>
        </Button>
        <Button url="/" className="home__work-direction">
          <WorksIcon />
          <h5>Стажировки в офисе</h5>
        </Button>
        <Button url="/" className="home__work-direction">
          <ItIcon />
          <h5>IT</h5>
        </Button>
      </div>

      <div className="home__success">
        <Title sizeName="xl">История успеха</Title>
        <img src={person} alt="person" />
        <div className="home__success-description">
          <h3>Иван Иванов</h3>
          <h4>
            Продавец, Магнит Косметик <br /> 10 лет в компании <br />
            <br />
          </h4>
          <h4>
            В&nbsp;частности, укрепление и&nbsp;развитие внутренней структуры,
            в&nbsp;своём классическом представлении, допускает внедрение
            первоочередных требований. <br />
            <br />
            Ясность нашей позиции очевидна: экономическая повестка сегодняшнего
            дня говорит о&nbsp;возможностях новых предложений.
          </h4>
        </div>
        <Button>Хочу работать в Магните</Button>
      </div>
      <div className="home__slogan">
        <SloganIcon />
        <div className="home__slogan-text">
          <Title sizeName="xl" marginSizeName="m">
            Магнит создают люди
          </Title>
          <h4>
            Сегодня Магнит&nbsp;&mdash; одна из&nbsp;крупнейших компаний
            в&nbsp;России. Это не&nbsp;только магазины, но&nbsp;и&nbsp;аптеки,
            офисы, логистические центры, собственные агропромышленные
            и&nbsp;пищевые предприятия. Выбирайте работу по&nbsp;душе!
          </h4>
        </div>
      </div>
      <div className="home__form">
        <h2 className="title--main">Подать заявку</h2>
        <List className="list--routes" list={testList} isHidenable />
      </div>
    </Section>
  );
}
