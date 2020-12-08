import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import MyWork from './pages/MyWork';
import Nav from './components/Nav';
import GlobalStyle from './components/GlobalStyle';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
//Animate
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/work" exact>
            <MyWork />
          </Route>
          <Route path="/work/:id" exact>
            <ProjectDetail />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
