import React, { Suspense, lazy } from 'react';
import './App.css';
import Nav from './components/navbar/nav';
import Home from './components/home/home';

const About = lazy(() => import('./components/about/about'));
const Experience = lazy(() => import('./components/experience/experience'));
const Skill = lazy(() => import('./components/skill/skill'));
const Projects = lazy(() => import('./components/Projects/projects'));
const Contacts = lazy(() => import('./components/Contacts/Contact'));
const Footer = lazy(() => import('./components/footer/footer'));

function App() {
  return (
    <div className="App">
      <Nav className="navbar"/>
      <Home/>
      <Suspense fallback={null}>
        <About/>
        <Experience/>
        <Skill/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
