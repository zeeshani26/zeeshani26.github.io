import './App.css';
import Nav from './components/navbar/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Skill from './components/skill/skill';
import Projects from './components/Projects/projects';
import Contacts from './components/Contacts/Contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Nav className="navbar"/>
      <Home/>
      <About/>
      <Experience/>
      <Skill/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
