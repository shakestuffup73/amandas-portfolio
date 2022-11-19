import styles from '../Landing/Landing.module.css'
import { amandaRFLogo_icon } from '../../assets/images/exports'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
// import Resume from '../Resume/Resume2'
import Contact from '../Contact/Contact'

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* <div id="brand-image">
        <img src={ amandaRFLogo_icon.src } alt={ amandaRFLogo_icon.alt } className={styles.logo}/>
      </div> */}
        <AboutMe />
        <Projects />
        <Contact />
    </div>
  )
}

export default Landing