import React from 'react';
import './App.css';
import Hello from './sections/Hello';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact'

import CodeLinks from './components/CodeLinks'
import Navigation from './components/Navigation'
import ReactFullpage from "@fullpage/react-fullpage";
// import curiaCover from './images/curiaCover.png'
// import syndAICover from './images/syndAICover.png'
// import electrumCover from './images/electrumCover.png'
// import qualcatCover from './images/qualcatCover.png'

class App extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  
  render(){
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'fixed', paddingTop: 10, width: '100vw'}}>
          <Navigation/>
          <CodeLinks/>
        </div>
        <ReactFullpage
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state }) => {
            return (
              <div id="fullpage-wrapper">
                <Hello/>
                <Projects/>
                <Resume/>
                <Contact/>
              </div>
            )
          }}
        >
        </ReactFullpage>
      </div>
    );
  }
}

export default App;