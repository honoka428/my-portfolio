import React from 'react';

import './App.css';
import Hello from './sections/Hello';
import Resume from './sections/Resume';
import Contact from './sections/Contact'
import Ikuzo from './sections/Ikuzo';
import Curia from './sections/Curia';
import Electrum from './sections/Electrum';
import Qualcat from './sections/Qualcat';
import Navigation from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Hello />
        <Curia/>
        <Qualcat/>
        <Electrum/>
        <Ikuzo/>
        <Resume />
        <Contact />
      </React.Fragment>
    );
  }
}