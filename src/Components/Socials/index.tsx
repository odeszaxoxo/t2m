import Button from 'Components/UI/Button';
import { OkSocial, TgSocial, VkSocial } from 'Icons';
import React from 'react';
import cn from 'classnames';

export default function Socials({ className }: { className?: string }) {
  const socialsClassNames = cn('socials', className);

  return (
    <div className={socialsClassNames} style={{ display: 'flex' }}>
      <Button url="/" className="button-social">
        <TgSocial />
      </Button>
      <Button url="/" className="button-social">
        <VkSocial />
      </Button>
      <Button url="/" className="button-social">
        <OkSocial />
      </Button>
    </div>
  );
}
