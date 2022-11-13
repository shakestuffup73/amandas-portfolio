import { 
  github_icon, 
  linkedin_icon, 
  camera_icon, 
} from '../../assets/images/exports'
import LeftNavLink from './LeftNavLink'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/lotties/arrow.json'
import { star_icon } from '../../assets/images/exports'
import Lottie from 'react-lottie-player'

const LeftNav = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(!navbarOpen)
  }

  const linkData = [
    {
      href: "https://github.com/shakestuffup73",
      src:  github_icon.src,
      alt: github_icon.alt,
      id: "github-icon"
    },
    {
      href: "https://www.linkedin.com/in/amandastern73/",
      src:  linkedin_icon.src,
      alt: linkedin_icon.alt,
      id: "linkedin-icon"
    },
    {
      href: "https://www.photosbyamandas.com/",
      src:  camera_icon.src,
      alt: camera_icon.alt,
      id: "camera-icon"
    }
  ]

  return (
    <>
      <header>
        <nav className={`menuNav ${navbarOpen ? "" : "showMenu"}`}>
          <Link to='/projects' onClick={() => closeMenu()}>Projects</Link>
          <Link to='/resume2' onClick={() => closeMenu()}>Resume</Link>
          <Link to='/contact' onClick={() => closeMenu()}>Contact</Link>
          <Link to='/' onClick={() => closeMenu()}><img src={star_icon.src} alt={star_icon.alt} height="15px" width="15px" /></Link>
        </nav>
      </header>
      <div id="icon-div">
        <Lottie
        loop
        animationData={arrow}
        play
        style={{ width: 80 }}
        onClick={handleToggle}
        />
        { 
          linkData.map(link => (
            <LeftNavLink key={JSON.stringify(link)} data={link}/>
          ))
        }
      </div>
    </>
  );
}

export default LeftNav;