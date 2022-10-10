import AtomEffects from './AtomEffects';
import Footer from './Components/Footer';
import Main from './Components/Main';
// import Main from 'Components/Main'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <AtomEffects />
      <Main />
      <Footer />
    </Router>
  );
}
