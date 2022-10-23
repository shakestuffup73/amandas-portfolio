import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <>
      <Link to='/aboutme'>About Me</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/'><img src="assets/images/Star.png" alt="star links to homepage" height="15px"></img ></Link>
    </>
  );
}

export default NavBar;