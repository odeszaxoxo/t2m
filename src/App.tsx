import AtomEffects from 'AtomEffects';
import Main from 'Components/Main';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <AtomEffects />
      <Main />
    </Router>
  );
}
