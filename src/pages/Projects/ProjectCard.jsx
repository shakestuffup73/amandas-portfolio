import hyphenateWords from '../../utilities/hyphenateWords';
import styles from '../Projects/Projects.module.css'
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
  const path = hyphenateWords(project.title)

  return (
    <>
      <h1>{ project.title }</h1>
      <div className={ styles.one }>
        <p>{ project.tech }</p>
        <Link to={`/projects/${path}`}>
          <button className={styles.detailsBtn}>Details</button>
        </Link>
        <img src={ project.image.src } alt={ project.image.altText } className={ styles.projImg } />
      </div>
    </> 
  );
}

export default ProjectCard;