import projects from '../../data/projects.js'
import styles from '../Projects/Projects.module.css'
import ProjectCard from './ProjectCard.jsx'

const Projects = () => {
  console.log('this is projects', projects)

  if (!projects) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <div className={styles.techStack}>
      <h1>Tech Skills</h1>
      <div className={styles.languages}>
        <h2>Languages</h2>
      </div>
      <div className={styles.stacks}>
        <h2>Libraries/Frameworks/Databases</h2>
      </div>
      <div className={styles.gridContainer}>
      {projects?.map(project => 
        <ProjectCard key={JSON.stringify(project)} project={project} />
      )}
      </div>
    </div>
    </>
  )
}

export default Projects