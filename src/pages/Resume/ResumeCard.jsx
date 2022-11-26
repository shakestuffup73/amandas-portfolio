import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import styles from '../Resume/Resume2.module.css'

const ResumeCard = ({experience}) => {
  
  return ( 
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'whitesmoke', color: '#181819' }}
      contentArrowStyle={{ borderRight: '7px solid whitesmoke' }}
      date={experience.date}
      iconStyle={{ background: '#181819', color: '#181819' }}
      icon={
        <img
        className={styles.icons} 
        src={experience.image.src}
        alt={experience.altText}
        />
      }
    >
      <h3 className="vertical-timeline-element-title">{experience.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{experience.role}</h4>
      <p>
      {experience.description}
      <br />
      {experience.details}
      <br />
      {experience.info}
      <br />
      {experience.details2}
      </p>
    </VerticalTimelineElement>
  );
}

export default ResumeCard;