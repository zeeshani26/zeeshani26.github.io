import './App.css';
import Nav from './components/navbar/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Skill from './components/skill/skill';
import Projects from './components/Projects/projects';
import Contacts from './components/Contacts/Contact';

function App() {
  return (
    <div className="App">
      <Nav className="navbar"/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
