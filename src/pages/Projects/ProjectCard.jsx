import hyphenateWords from '../../utilities/hyphenateWords';
import styles from '../Projects/Projects.module.css'
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
  const path = hyphenateWords(project.title)

  return ( 
    <div className={ styles.one }>
      <h1>{ project.title }</h1>
      <p>{ project.tech }</p>
      <Link to={`/projects/${path}`}>
        <button className={styles.detailsBtn}>Details</button>
      </Link>
      <img src={ project.image.src } alt={ project.image.altText } className={ styles.projImg } />
    </div>
  );
}

export default ProjectCard;