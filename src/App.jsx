import { Route, Routes, Link } from 'react-router-dom'
import './App.css';
import Landing from './pages/Landing/Landing'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'
import AboutMe from './pages/AboutMe/AboutMe'
import Tech from './pages/Tech/Tech'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>AMANDA'S PORTFOLIO</p>
        <nav>
          <Link to='/'>Welcome</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/aboutme'>About Me</Link>
          <Link to='/tech'>Tech</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
