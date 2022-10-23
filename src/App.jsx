import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import BottomNav from './components/LeftNav/LeftNav';
import Landing from './pages/Landing/Landing'
import Resume2 from './pages/Resume/Resume2'
import Projects from './pages/Projects/Projects'
import AboutMe from './pages/AboutMe/AboutMe'
import Tech from './pages/Tech/Tech'
import './App.css';

function App() {
  return (
  <>
  <main>
    <div className="App">
      <div id="top-nav-div">
        <NavBar />
      </div>
      <div id="bottom-nav">
        <BottomNav />
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/resume' element={<Resume2 />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/tech' element={<Tech />} />
      </Routes>
    </div>
  </main>
  </>
  );
}

export default App;
