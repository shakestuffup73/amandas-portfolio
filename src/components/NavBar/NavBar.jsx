import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <>
    <div>
      <Link to='/'>Welcome</Link>
    </div>
    <div>
      <Link to='/resume'>Resume</Link>
    </div>
    <div>
      <Link to='/projects'>Projects</Link>
    </div>
    <div>
      <Link to='/aboutme'>About Me</Link>
    </div>
    <div>
      <Link to='/tech'>Tech</Link>
    </div>
    </>
  );
}

export default NavBar;