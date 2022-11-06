import { Route, Routes } from 'react-router-dom'
import LeftNav from './components/LeftNav/LeftNav';
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import './App.css';

function App() {
  return (
    <>
      <LeftNav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
