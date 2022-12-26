import Intro from '../Intro/Intro'
import { lazy } from 'react';
import styles from '../Landing/Landing.module.css'
const AboutMe = lazy(() => import ('../AboutMe/AboutMe'))
const Resume = lazy(() => import ('../Resume/Resume2'))
const Contact = lazy(() => import ('../Contact/Contact'))
const Projects = lazy(() => import ('../Projects/Projects'))

const Landing = () => {

  return (
    <div className={styles.container} id="landing">
      <Intro />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default Landing