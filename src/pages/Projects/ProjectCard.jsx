import hyphenateWords from '../../utilities/hyphenateWords';
import styles from '../Projects/Projects.module.css'
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
  const path = hyphenateWords(project.title)

  return (
    <>
      <div className={ styles.one }>
        <img src={ project.image.src } alt={ project.image.altText } className={ styles.projImg } />
        <h2>{project.tech}</h2>
        <h2></h2>
        <Link to={`/projects/${path}`}>
          <button className={styles.detailsBtn}>{project.title}</button>
        </Link>
      </div>
    </> 
  );
}

export default ProjectCard;