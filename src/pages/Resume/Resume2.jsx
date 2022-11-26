import styles from '../Resume/Resume2.module.css'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { amandaResume } from '../../pdf/exports'
import ResumeCard from './ResumeCard'
import experiences from '../../data/experiences.js'

const Resume2 = () => {

  return (
    <>
    <div className={styles.resume} id="resume">
      <a href={amandaResume.src} download="amandaResume" >Download My Resume</a>
    </div>
    <div className={styles.gridContainer}>
      <h1>Professional Timeline</h1>
      <div className={styles.one1}>
        <VerticalTimeline 
          className={styles.vertTimeline} 
          layout="2-columns" 
          lineColor="darkcyan"
          position="left"
        >
          {experiences?.map(experience =>
            <ResumeCard key={JSON.stringify(experience)} experience={experience} />
          )}
        </VerticalTimeline>
      </div>
    </div>
    </>
  )
}

export default Resume2