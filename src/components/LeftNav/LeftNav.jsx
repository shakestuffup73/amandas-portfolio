import { 
  github_icon, 
  linkedin_icon, 
  camera_icon, 
} from '../../assets/images/exports'
import LeftNavLink from './LeftNavLink'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import compass from '../../assets/lotties/compass.json'
import { star_icon } from '../../assets/images/exports'
import Lottie from 'react-lottie-player'

const LeftNav = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
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
        <div id="lottie-div">
          <Lottie
            loop
            animationData={compass}
            play
            style={{ width: 25, margin: 5 }}
            onClick={handleToggle}
          />
        </div>
        <nav className={`menuNav ${navbarOpen ? "" : "showMenu"}`}>
          <HashLink to='/#tech'>Projects</HashLink>
          <HashLink to='/#resume'>Resume</HashLink>
          <HashLink to='/#contact'>Contact</HashLink>
          <HashLink to='/#landing'><img src={star_icon.src} alt={star_icon.alt} height="15px" width="15px" /></HashLink>
        </nav>
      </header>
      <div id="icon-div">
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