import ROUTES from 'Dictionary/routes';
import Home from 'Pages/Home';
import Shop from 'Pages/Shop';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dictionaryAtom from 'Recoil/Atoms/dictionary';

export default function Main() {
  const dictionary = useRecoilValue(dictionaryAtom);

  if (!dictionary) {
    return null;
  }

  return (
    <main>
      <Routes>
        <Route path={ROUTES.home()} element={<Home />} />
        <Route path={ROUTES.shop()} element={<Shop />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
