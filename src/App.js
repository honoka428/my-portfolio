import React from 'react';
import { Pager } from "react-bootstrap";

import './App.css';
import Hello from './sections/Hello';
import Resume from './sections/Resume';
import Contact from './sections/Contact'
import Ikuzo from './sections/Ikuzo';
import SyndAI from './sections/SyndAI';
import Electrum from './sections/Electrum';
import Qualcat from './sections/Qualcat';

import CodeLinks from './components/CodeLinks'

function isHidden(number) {
  if (number >= 3 && number <= 5) {
    return 'none'
  } else {
    return 'block'
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    console.log(number);

    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };

  getPagesNumbers = () => {
    const pageNumbers = [];
    const navItems = ['', 'HELLO', 'PROJECTS', 'hide', 'hide', 'hide', 'RESUME', 'CONTACT']
    for (let i = 1; i <= 7; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange} style={{display: isHidden(i), paddingBottom: '1%', fontWeight: '600'}}>
          {navItems[i]}
        </Pager.Item>,
      );
  }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <Pager className="desktop-nav" bsSize="large">
              {pagesNumbers}
              <CodeLinks/>
        </Pager>
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