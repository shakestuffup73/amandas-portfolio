import projects from '../../data/projects.js'
import styles from '../Projects/Projects.module.css'
import ProjectCard from './ProjectCard.jsx'
import { langs_icons, python_icon } from '../../assets/images/exports.js'

const Projects = () => {
  console.log('this is projects', projects)

  if (!projects) {
    return <h1>Loading...</h1>
  }

  return (
      <div className={styles.gridContainer2}>
        <div className={styles.techStack} id="tech">
            <h1>Tech Skills/Projects</h1>
          <div className={styles.languages}>
            <img src={langs_icons.src} alt={langs_icons.altText} className={styles.langImgs}/>
            <img src={python_icon.src} alt={python_icon.altText} className={styles.pythonImg}/>
          </div>
          <div className={styles.languages2}>
            <h2>Libraries/Frameworks/Databases</h2>
            <h3>Bootstrap || NodeJS || Django || React || Mongoose || MongoDB || PostgreSQL || SQL || Express</h3>
          </div>
          <div className={styles.gridContainer}>
          {projects?.map(project => 
            <ProjectCard key={JSON.stringify(project)} project={project} />
          )}
          </div>
        </div>
      </div>
  )
}

export default Projects