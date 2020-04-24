import React from 'react';
import logo from './logo.svg';
import './App.css';

/* Import assets */

function App() {
  return (
    /* Landing */
    <div className="titlePage">

      <nav>
        <img src={logo} className="headerLogo"/> 
        <ul className="navButtons">
          <li className="ScrollToWork">My work</li>
          <li className="ScrollToContact">Contact</li>
          <li className='ResumeLink'>My resume</li>
        </ul>
      </nav>

      <main>
        <h1 className="titleLight">Hi, I'm </h1>
        <h1 className="titleBold">Honoka.</h1>
        <h2 className="titleSubtext">Software Engineer & UX/UI Designer</h2>
        <p className="titleDescription">Here to help you design and code your great ideas into beautiful products.</p>
      </main>

    </div>

    /* Housie */

  );
}


export default App;