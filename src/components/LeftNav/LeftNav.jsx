import { 
  github_icon, 
  linkedin_icon, 
  camera_icon, 
} from '../../assets/images/exports'
import LeftNavLink from './LeftNavLink'

const LeftNav = () => {
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
    <div id="icon-div">
      { 
        linkData.map(link => (
          <LeftNavLink key={JSON.stringify(link)} data={link}/>
        ))
      }
    </div>
  );
}

export default LeftNav;