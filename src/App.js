import React from 'react';
import './App.css';
import Hello from './sections/Hello';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact'

function App() {
  return (
    <div>
      <Hello/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;