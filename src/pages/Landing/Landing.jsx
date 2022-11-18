import styles from '../Landing/Landing.module.css'
import { amandaRFLogo_icon } from '../../assets/images/exports'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
// import Resume from '../Resume/Resume2'
import Contact from '../Contact/Contact'
import { amandaResume } from '../../pdf/exports'

const Landing = () => {
  return (
    <div className={styles.container}>
      <div id="brand-image">
        <img src={ amandaRFLogo_icon.src } alt={ amandaRFLogo_icon.alt } className={styles.logo}/>
      </div>
        <AboutMe />
      <hr></hr>
      <div id="resume"></div>
      <div className={styles.techDiv}>
        <a href={amandaResume.src} download="amandaResume">Download my Resume</a>
      </div>
      <hr></hr>
        <Projects />
      <hr></hr>
        <Contact />
    </div>
  )
}

export default Landing