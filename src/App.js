import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import MyWork from './pages/MyWork';
import Nav from './components/Nav';
import GlobalStyle from './components/GlobalStyle';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/work" exact>
          <MyWork />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
