import Navigation from 'Components/Navigation';
import { Outlet } from 'react-router-dom';
import useResize from 'Hooks/useResize';
import React from 'react';

export default function HomePage() {
  const { isPhone } = useResize();
  return (
    <>
      {!isPhone && <Navigation />}
      <Outlet />
    </>
  );
}
