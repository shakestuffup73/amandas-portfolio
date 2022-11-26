import projects from '../../data/projects.js'
import styles from '../Projects/Projects.module.css'
import ProjectCard from './ProjectCard.jsx'
import { 
  adobeillustrator_svg, 
  adobelightroom_svg,
  adobephotoshop_svg,
  adobefonts_svg,
  bootstrap2_svg,
  css3_svg,
  django_svg,
  docker_svg,
  dotenv_svg,
  express_svg,
  heroku_svg,
  html5_svg,
  javascript_svg,
  jsonwebtokens_svg,
  microsoftazure_svg,
  mongodb_svg,
  mui_svg,
  netlify_svg,
  nodedotjs_svg,
  nodemon_svg,
  npm_svg,
  postgresql_svg,
  postman_svg,
  python2_svg,
  react_svg,
  visualstudiocode_svg,
} from '../../assets/images/exports.js'
// import { json } from 'react-router-dom'

const Projects = () => {
  console.log('this is projects', projects)

  if (!projects) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.gridContainer3}>
      <div className={styles.techStack} id="tech">
          <h1>Tech Stack/Projects</h1>
        <div className={styles.languages2}>
          <img src={html5_svg.src} alt={html5_svg.altText} className={styles.svg} />
          <img src={javascript_svg.src} alt={javascript_svg.altText} className={styles.svg} />
          <img src={css3_svg.src} alt={css3_svg.altText} className={styles.svg} />
          <img src={python2_svg.src} alt={python2_svg.altText} className={styles.svg} />
          <img src={express_svg.src} alt={express_svg.altText} className={styles.svg} />
          <img src={react_svg.src} alt={react_svg.altText} className={styles.svg} />
          <img src={bootstrap2_svg.src} alt={bootstrap2_svg.altText} className={styles.svg} />
          <img src={django_svg.src} alt={django_svg.altText} className={styles.svg} />
          <img src={docker_svg.src} alt={docker_svg.altText} className={styles.svg} />
          <img src={postgresql_svg.src} alt={postgresql_svg.altText} className={styles.svg} />
          <img src={mongodb_svg.src} alt={mongodb_svg.altText} className={styles.svg} />
          <img src={netlify_svg.src} alt={netlify_svg.altText} className={styles.svg} />
          <img src={heroku_svg.src} alt={heroku_svg.altText} className={styles.svg} />
          <img src={postman_svg.src} alt={postman_svg.altText} className={styles.svg} />
          <img src={dotenv_svg.src} alt={dotenv_svg.altText} className={styles.svg} />
          <img src={jsonwebtokens_svg.src} alt={jsonwebtokens_svg.altText} className={styles.svg} />
          <img src={microsoftazure_svg.src} alt={microsoftazure_svg.altText} className={styles.svg} />
          <img src={mui_svg.src} alt={mui_svg.altText} className={styles.svg} />
          <img src={nodedotjs_svg.src} alt={nodedotjs_svg.altText} className={styles.svg} />
          <img src={nodemon_svg.src} alt={nodemon_svg.altText} className={styles.svg} />
          <img src={npm_svg.src} alt={npm_svg.altText} className={styles.svg} />
          <img src={visualstudiocode_svg.src} alt={visualstudiocode_svg.altText} className={styles.svg} />
          <img src={adobefonts_svg.src} alt={adobefonts_svg.altText} className={styles.svg} />
          <img src={adobeillustrator_svg.src} alt={adobeillustrator_svg.altText} className={styles.svg} />
          <img src={adobelightroom_svg.src} alt={adobelightroom_svg.altText} className={styles.svg} />
          <img src={adobephotoshop_svg.src} alt={adobephotoshop_svg.altText} className={styles.svg} />
        </div>
        <div className={styles.gridContainer}>
        {projects?.map(project => 
          <ProjectCard key={JSON.stringify(project)} project={project} />
        )}
        </div>
      </div>
    </div>
  )
}

export default Projects