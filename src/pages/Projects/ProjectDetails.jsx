import styles from '../Projects/Projects.module.css'
import { useParams } from 'react-router-dom'
import findProject from '../../utilities/findProject';

const ProjectCard = () => {

  const { projectDetails } = useParams()
  // console.log('this is params', projectDetails)
  const project = findProject(projectDetails)
  console.log('this is project', project)

  return ( 
    <>
      <h1>{project.title}</h1>
      
      <div className={ styles.detailsDiv }>
        <img src={ project.image.src } alt={ project.image.altText } className={ styles.projImg } />
        <h2>{ project.title }</h2>
        <h3>{ project.description }</h3>
        <h2>{ project.details }</h2>
        <h2>{ project.languages } </h2>
        <div className={ styles.linkDiv }>
          <a href={ project.deploymentLink } alt={ project.deploymentLink.altText }>
            <h3 className={ styles.play }> { project.title } { project.title.src }</h3>
          </a>
        </div>
        <div className={ styles.linkDiv }>
          <a href={ project.repositoryLink } alt="repository link">
            <h3 className={ styles.play }>GitHub Repository</h3>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;