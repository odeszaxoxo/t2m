import ROUTES from 'Dictionary/routes';
import Home from 'Pages/Home';
import Signin from 'Pages/Signin';
import SettingsPage from 'Pages/Settings';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import useResize from 'Hooks/useResize';
import Navigation from 'Components/Navigation';
import AppointmentsPage from 'Pages/Appointments';
import SchedulePage from 'Pages/Schedule';
import PrivateRoute from './PrivateRouteWrapper';
import PublicRoute from './PublicRouteWrapper';

export default function Main() {
  const { isPhone } = useResize();
  const location = useLocation();

  return (
    <main>
      {!isPhone && location.pathname !== ROUTES.signin() && <Navigation />}
      <Routes>
        <Route
          path={ROUTES.signin()}
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.settings()}
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.home()}
          element={
            <PrivateRoute>
              <SchedulePage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.appointments()}
          element={
            <PrivateRoute>
              <AppointmentsPage />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.home()} element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
