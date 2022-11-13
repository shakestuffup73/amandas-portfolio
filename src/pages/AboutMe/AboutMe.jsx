import styles from '../AboutMe/AboutMe.module.css'
import { amandaLibby_desert } from '../../assets/images/exports'

const AboutMe = () => {

  return (
    <div className={styles.gridContainer}>
      <div className={styles.one}>
        <h1>Hi, I'm Amanda.</h1>
        <img src={amandaLibby_desert.src} alt={amandaLibby_desert.alt} />
        <div className={styles.myTagLine}>
          <h3>Software Engineer <br /> Photographer <br /> Wilderness Wanderer <br /> Loyal Human to my Beloved Lab, Libby </h3>
        </div>
        <h3>
        As a Software Engineer, I utilize best practices to create applications and products to meet a variety of business and user needs. I began my professional career working project management for software development programs in the Air Force and then went on to manage SQL databases as a Park Ranger in the Bureau of Land Management. From these experiences I was inspired to pursue Software Development full-time and made the career-switch by attending an immersive Software Engineering bootcamp through General Assembly.  
        </h3>
      </div>
    </div>
  )
}

export default AboutMe