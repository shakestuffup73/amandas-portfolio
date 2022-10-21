import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'
import AboutMe from './pages/AboutMe/AboutMe'
import Tech from './pages/Tech/Tech'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>AMANDA'S PORTFOLIO</p>
        <nav>
          <NavBar />
        </nav>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
