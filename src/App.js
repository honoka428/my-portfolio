import React from 'react';
import './App.css';
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CuriaSite from './pages/CuriaWebsite.js';
import Error from './pages/Error.js';
import ScrollToTop from '../src/components/ScrollTop.js'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/curiaWebsite" component={CuriaSite}/>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;