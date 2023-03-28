import AtomEffects from 'AtomEffects';
import Main from 'Components/Main';
import Layout from 'Components/UI/Layout';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <AtomEffects />
      <Layout>
        <Main />
      </Layout>
    </Router>
  );
}
