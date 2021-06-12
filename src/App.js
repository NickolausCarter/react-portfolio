import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import NavMenu from './components/Nav';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        {/* <Route exact path='/contact' component={Contact} /> */}
        {/* <Route exact path='/portfolio' component={Portfolio} /> */}
        <Route exact path='/resume' component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
