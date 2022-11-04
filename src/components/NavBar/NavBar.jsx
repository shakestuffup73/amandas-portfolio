import { Link } from 'react-router-dom'
import { React, useState } from 'react'
import Lottie from 'react-lottie-player'
import styles from '../NavBar/NavBar.modules.css'
import arrow from '../../assets/lotties/arrow.json'

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
        {/* <img src="assets/images/Star.png" height="25px" alt="small white star" onClick={handleToggle} /> */}
        <Lottie
          loop
          animationData={arrow}
          play
          style={{ width: 150, height: 150 }}
          onClick={handleToggle}
        />
        <div className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
            <Link to='/aboutme' onClick={() => closeMenu()}>About Me</Link>
            <Link to='/projects' onClick={() => closeMenu()}>Projects</Link>
            <Link to='/resume' onClick={() => closeMenu()}>Resume</Link>
            <Link to='/contact' onClick={() => closeMenu()}>Contact</Link>
            <Link to='/' onClick={() => closeMenu()}><img src="src/assets/images/Star.png" alt="star links to homepage" height="15px" width="15px"></img ></Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;