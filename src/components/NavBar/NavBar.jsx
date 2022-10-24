import { Link } from 'react-router-dom'
import { React, useState } from 'react'
import styles from '../NavBar/NavBar.modules.css'

const NavBar = () => {
  
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(!navbarOpen)
  }

  return ( 
    <>
      <nav className={styles.navBar}>
        <button onClick={handleToggle}><img src="assets/images/Star.png" height="25px" /></button>
        <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
          <li>
            <Link to='/aboutme' onClick={() => closeMenu()}>About Me</Link>
          </li>
          <li>
            <Link to='/projects' onClick={() => closeMenu()}>Projects</Link>
          </li>
          <li>
            <Link to='/resume' onClick={() => closeMenu()}>Resume</Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => closeMenu()}>Contact</Link>
          </li>
          <li>
            <Link to='/' onClick={() => closeMenu()}><img src="assets/images/Star.png" alt="star links to homepage" height="15px"></img ></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;