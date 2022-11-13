import hyphenateWords from '../../utilities/hyphenateWords';
import styles from '../Projects/Projects.module.css'
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
  const path = hyphenateWords(project.title)

  return ( 
    <div className={ styles.one }>
      <img src={ project.image.src } alt={ project.image.altText } className={ styles.projImg } />
      <h2>{ project.title }</h2>
      <Link to={path} >
        <button>Details</button>
      </Link>

      {/* <h2>{ project.description }</h2> */}
      {/* <div className={ styles.linkDiv }>
        <a href={ project.deploymentLink } alt={ project.deploymentLink.altText }>
          <h3 className={ styles.play }> { project.title } { project.title.src }</h3>
        </a>
      </div>
      <div className={ styles.linkDiv }>
        <a href={ project.repositoryLink } alt="repository link">
          <h3 className={ styles.play }> Details</h3>
        </a>
      </div> */}
    </div>
  );
}

export default ProjectCard;