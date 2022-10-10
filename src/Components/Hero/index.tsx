import React from 'react';
import Button from 'Components/UI/Button';
import cn from 'classnames';
import Title from '../UI/Title';

interface IHero {
  className?: string;
  image?: string;
  title: string;
  isButton?: boolean;
}

export default function Hero({
  className,
  image,
  title,
  isButton = true,
}: IHero) {
  const heroClassNames = cn('hero', {
    [`${className}`]: className,
  });

  return (
    <div className={heroClassNames}>
      <div className="hero__image">
        <img src={image} alt="hero-background" />
      </div>
      <div className="hero__content">
        <Title sizeName="xl">{title}</Title>
        {isButton && <Button>Подать заявку</Button>}
      </div>
    </div>
  );
}
