import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import styles from '../Resume/Resume2.module.css'

const ResumeCard = ({experience}) => {
  
  return ( 
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'whitesmoke', color: '#181819', boxshadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', }}
      contentArrowStyle={{ borderRight: '7px solid whitesmoke', boxshadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}
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
      <h2 className="vertical-timeline-element-subtitle">{experience.role}</h2>
      <br></br>
      <h3>
      {experience.description}
      <br />
      {experience.details}
      <br />
      {experience.info}
      <br />
      {experience.details2}
      </h3>
      <h3>{experience.date}</h3>
    </VerticalTimelineElement>
  );
}

export default ResumeCard;