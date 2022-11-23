import styles from '../Resume/Resume2.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import DOI_logo from '../Icons/DOI'
import { amandaResume } from '../../pdf/exports'

const Resume2 = () => {

  return (
    <>
    <div className={styles.resume} id="resume">
      <a href={amandaResume.src} download="amandaResume" >Download My Resume</a>
    </div>
    <div className={styles.gridContainer}>
      <h1>Professional Timeline</h1>
      <div className={styles.one}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<DOI_logo />}
          >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
      </div>
    </div>
    </>
  )
}

export default Resume2