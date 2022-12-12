import styles from '../Landing/Landing.module.css'
// import { amandaRFLogo_icon } from '../../assets/images/exports'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume2'
import Contact from '../Contact/Contact'
import Intro from '../Intro/Intro'

const Landing = () => {

  return (
    <div className={styles.container}>
      <Intro />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default Landing