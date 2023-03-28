import useResize from 'Hooks/useResize';
import React from 'react';
import CareImage from './image.svg';
import Form from './Forms';
import SigninNote from './Note';

export default function Signin() {
  const { isPhone } = useResize();
  return (
    <>
      <Form />
      <div className="signin__image-holder">
        {/* <CareImage width={isPhone ? '' : '653'} height={isPhone ? '' : '475'} /> */}
        {!isPhone && <SigninNote />}
      </div>
      {isPhone && <SigninNote />}
    </>
  );
}
