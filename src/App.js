import React from 'react';

import './App.css';
import Hello from './sections/Hello';
import Resume from './sections/Resume';
import Contact from './sections/Contact'
import Ikuzo from './sections/Ikuzo';
import SyndAI from './sections/SyndAI';
import Electrum from './sections/Electrum';
import Qualcat from './sections/Qualcat';
import Navigation from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Hello />
        <SyndAI/>
        <Ikuzo/>
        <Qualcat/>
        <Electrum/>
        <Resume />
        <Contact />
      </React.Fragment>
    );
  }
}