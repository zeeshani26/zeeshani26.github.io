// import logo from './logo.svg';
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
