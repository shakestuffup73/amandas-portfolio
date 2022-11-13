import styles from '../Projects/Projects.module.css'
import projects from '../../data/projects';

const ProjectCard = (props) => {
  const {project} = props
  return ( 

    <>
      <h1>{projects[0].title}</h1>
    </>
    // <div className={ styles.one }>
    //   <img src={ project.image.src } alt={ project.image.altText } className={ styles.projImg } />
    //   <h2>{ project.title }</h2>
    //   <h2>{ project.description }</h2>
    //   <div className={ styles.linkDiv }>
    //     <a href={ project.deploymentLink } alt={ project.deploymentLink.altText }>
    //       <h3 className={ styles.play }> { project.title } { project.title.src }</h3>
    //     </a>
    //   </div>
    //   <div className={ styles.linkDiv }>
    //     <a href={ project.repositoryLink } alt="repository link">
    //       <h3 className={ styles.play }>GitHub Repository</h3>
    //     </a>
    //   </div>
    // </div>
  );
}

export default ProjectCard;