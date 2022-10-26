import projects from '../../data/projects.js'
import styles from '../Projects/Projects.module.css'

const Projects = () => {
  console.log('this is projects', projects)

  if (!projects) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className={styles.pageLayout}>
        <img src="assets/images/AmandaProjectsLogo.png" alt="aperture with dev projects words"></img>
      <div className={styles.titleDiv}></div>
        <div className={styles.gridContainer}>
          {projects?.map(project => 
            <div className={styles.one}>
              <div>{project.image}</div>
              <h2>{project.title}</h2>
              <h3>{project.description}</h3>
              <h3>{project.deploymentLink}</h3>
              <h3>{project.repositoryLink}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects