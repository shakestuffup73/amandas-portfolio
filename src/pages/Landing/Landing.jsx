import styles from '../Landing/Landing.module.css'
import { amandaRFLogo_icon } from '../../assets/images/exports'
import AboutMe from '../AboutMe/AboutMe'
import Resume from '../Resume/Resume2'

const Landing = () => {
  return (
    <div className={styles.container}>
        <div id="brand-image">
          <img src={ amandaRFLogo_icon.src } alt={ amandaRFLogo_icon.alt } />
        </div>
          <AboutMe />
        <div className={styles.techDiv}>
          <button>Download My Resume Here</button>
        </div>
          <Resume />
    </div>
  )
}

export default Landing