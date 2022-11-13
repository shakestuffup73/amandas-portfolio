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
        <h3>
          After spending almost a decade exploring the states, I've returned to my New England roots. I spend my free time wandering the woods with my dog, perusing bookshop shelves for hours, people watching under the guise of drinking coffee and obsessively listening to the artists that bring my emotions to words through poetic, introspective lyrical beauty.
        </h3>
        <iframe src="https://open.spotify.com/embed/album/50ZenUP4O2Q5eCy2NRNvuz?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" alt="stickseasonalbum"></iframe>
      </div>
    </div>
  )
}

export default AboutMe