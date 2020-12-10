import React from 'react';
import './App.css';
import Hello from './sections/Hello';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact'

import CodeLinks from './components/CodeLinks'
import Navigation from './components/Navigation'

function App () {
  return (
    <div>
      <div className="nav" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'fixed', paddingTop: 10, width: '100vw'}}>
        <Navigation/>
        <CodeLinks/>
      </div>

      <div>
        <Hello />
        <Projects/>
        <Resume />
        <Contact />
      </div>

    </div>
  );
}

export default App;