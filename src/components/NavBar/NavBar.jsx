import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <>
      <Link to='/'>Welcome</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/aboutme'>About Me</Link>
      <Link to='/tech'>Tech</Link>
    </>
  );
}

export default NavBar;