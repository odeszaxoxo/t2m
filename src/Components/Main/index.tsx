import ROUTES from 'Dictionary/routes';
import Home from 'Pages/Home';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path={ROUTES.home()} element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
