import styles from '../AboutMe/AboutMe.module.css'
import { amandaLibby_desert } from '../../assets/images/exports'
import { amandaResume } from '../../pdf/exports'

const AboutMe = () => {

  return (
    
    <div className={styles.gridContainer}>
      <div className={styles.one}>
        <h1>Hi, I'm Amanda.</h1>
        <img src={amandaLibby_desert.src} alt={amandaLibby_desert.alt} />
        <div className={styles.myTagLine} id="resume">
          <h3>Software Engineer <br /> Photographer <br /> Wilderness Wanderer <br /> Loyal Human to my Beloved Lab, Libby </h3>
        </div>
        <div className={styles.techDiv}>
          <a href={amandaResume.src} download="amandaResume">Download My Resume</a>
        </div>
        <h3>
        As a Software Engineer, I utilize best practices to create applications and products to meet a variety of business and user needs. I've spent my professional career working project management for software development programs in the Air Force and as a Park Ranger in the Bureau of Land Management, where I worked on catastrophic wildland fires and collected field data for integration into SQL databases. From these experiences I was inspired to pursue Software Development full-time and made the career-switch by attending an immersive Software Engineering bootcamp through General Assembly.  
        </h3>
        <h3>
        After spending almost a decade exploring the states, I've returned to my New England roots. I now spend my free time wandering the woods with my dog, perusing bookshop shelves for hours, staring at the sky and any body of water I happen upon, people-watching under the guise of drinking coffee, and obsessively listening to the music that puts words to my emotions through introspective lyrical poeticism. I'm a non-commital professional Photographer and appreciate all forms of artistic expression.
        </h3>
        <iframe src="https://open.spotify.com/embed/album/50ZenUP4O2Q5eCy2NRNvuz?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" alt="stickseasonalbum" title="noahkahan" id="album"></iframe>
      </div>
    </div>
  )
}

export default AboutMe