import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import styles from '../Resume/Resume2.module.css'

const ResumeCard = ({experience}) => {
  
  return ( 
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#181819', color: '#f2efee' }}
      contentArrowStyle={{ borderRight: '7px solid  #181819' }}
      date={experience.date}
      iconStyle={{ background: '#181819', color: '#fff' }}
      icon={
        <img
        className={styles.icons} 
        src={experience.image}
        alt={experience.altText}
        />
      }
    >
    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Engineering Fellow</h4>
    <p>
    &#10023; 3-month full-time Software Engineering Immersive Bootcamp
    <br />
    &#10023; Developed projects utilizing Javascript, HTML, CSS, Python, Express, React, Django, Mongoose, MongoDB, PostgreSQL, SQL, and Docker
    <br />
    &#10023; Projects and descriptions found on Portfolio and GitHub
    </p>
    </VerticalTimelineElement>
  );
}

export default ResumeCard;