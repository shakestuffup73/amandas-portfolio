import { Route, Routes } from 'react-router-dom'
import LeftNav from './components/LeftNav/LeftNav';
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/Projects/ProjectDetails'
import Resume2 from './pages/Resume/Resume2';
import './App.css';

function App() {
  return (
    <>
      <LeftNav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/resume' element={<Resume2 />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectDetails' element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
