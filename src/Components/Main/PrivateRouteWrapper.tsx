import ROUTES from 'Dictionary/routes';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Utilities from 'Utilities';

interface IPrivateRoute {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: IPrivateRoute) {
  if (Utilities.apiTokenStorage.get()) {
    return children;
  }
  return <Navigate to={ROUTES.signin()} replace />;
}
