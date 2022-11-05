import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import LeftNav from './components/LeftNav/LeftNav';
import Landing from './pages/Landing/Landing'
import Resume2 from './pages/Resume/Resume2'
import Projects from './pages/Projects/Projects'
import AboutMe from './pages/AboutMe/AboutMe'
import Contact from './pages/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar id="top-nav-div"/>
      <div id="bottom-nav">
        <LeftNav />
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/resume' element={<Resume2 />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
