import styles from '../Projects/Projects.module.css'

const ProjectCard = (props) => {
  const {project} = props
  return ( 
      <div className={styles.one}>
        <img src={project.image.src} alt={project.image.altText}/>
        <h2>{project.title}</h2>
        <h3>{project.description}</h3>
        <div className={styles.linkDiv}>
          <a href={project.deploymentLink} alt={project.deploymentLink.altText}>
            <h3>Play {project.title} {project.title.src}</h3>
          </a>
        </div>
      </div>
  );
}

export default ProjectCard;