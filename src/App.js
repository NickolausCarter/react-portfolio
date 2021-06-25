import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Header />
        <Wrapper>
          <Route exact path='./' component={About} />
          <Route exact path='./about' component={About} />
          <Route exact path='./contact' component={Contact} />
          <Route exact path='./portfolio' component={Portfolio} />
          <Route exact path='./resume' component={Resume} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
