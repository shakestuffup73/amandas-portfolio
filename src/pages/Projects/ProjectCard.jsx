import styles from '../Projects/Projects.module.css'

const ProjectCard = (props) => {
  const {project} = props
  return ( 
    <div className={ styles.one }>
      <img src={ project.image.src } alt={ project.image.altText } className={ styles.projImg } />
      <h2>{ project.title }</h2>
      <h2>{ project.description }</h2>
      <div className={ styles.linkDiv }>
        <a href={ project.deploymentLink } alt={ project.deploymentLink.altText }>
          <h3 className={ styles.play }> { project.title } { project.title.src }</h3>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;