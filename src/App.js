import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Project from './Components/Project';
import Footer from './Components/Footer';
import Homepage from './Components/Layout/Homepage';
import ContactForm from './Components/Contact';
import Particles from 'react-particles-js';
import Resume from './Components/Layout/Resume';
// About Me, Portfolio, Contact, and Resume

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <div className="App">
          <div style={{position: 'relative', }}>
          <div style={{position: 'absolute', width: "100%", height: "100vh", backgroundColor: 'black'}}>
          <Particles
            params={{
              particles: {
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 500,
                  }
                },
                color: {
                  value: '#000000'
                },
                size: {
                  value: 7,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 3
                  }
                },
                line_linked: {
                  enable: true
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
            style={{
              zIndex: "-1"
            }}
          />
          </div>
          </div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Projects" component={Project} />
            <Route exact path="/Contact" component={ContactForm} />
            <Route exact path="/Resume" component={Resume}/>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>

  );
}

export default App;
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo of the developer and a short bio about them
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
