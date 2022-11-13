import styles from '../Landing/Landing.module.css'
import { amandaRFLogo_icon } from '../../assets/images/exports'
import AboutMe from '../AboutMe/AboutMe'
import { amandaResume } from '../../pdf/exports'

const Landing = () => {
  return (
    <div className={styles.container}>
      <div id="brand-image">
        <img src={ amandaRFLogo_icon.src } alt={ amandaRFLogo_icon.alt } />
      </div>
        <AboutMe />
      <div className={styles.techDiv}>
        <a href={amandaResume.src} download="amandaResume">Download My Resume</a>
      </div>
    </div>
  )
}

export default Landing