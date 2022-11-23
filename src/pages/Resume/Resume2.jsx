import styles from '../Resume/Resume2.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import DOI_LOGO from '../Icons/DOI'
import { amandaResume } from '../../pdf/exports'
// import { url } from 'express'
// import DOI_logo from '../../assets/images/exports'

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
            date="August 2022 - November 2022"
            iconStyle={{ color: '#fff' }}
            icon={<DOI_LOGO />}
          >
          <h3 className="vertical-timeline-element-title">General Assembly, NYC</h3>
          <h4 className="vertical-timeline-element-subtitle">Software Engineering Fellow</h4>
          <p>
            
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Career Sabbatical</h3>
          <h4 className="vertical-timeline-element-subtitle">Appalachian Trail</h4>
          <p>
            Backpacked 600 continuous miles of the Appalachian Trail from Georgia to Virginia
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