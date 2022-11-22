import styles from '../AboutMe/AboutMe.module.css'
import { Self8_image } from '../../assets/images/exports'

const AboutMe = () => {

  return (
    
    <div className={styles.gridContainer}>
      <h1 id="brand-image">Hi, I'm Amanda.</h1>
      <div className={styles.one}>
        <p>
        <img src={Self8_image.src} alt={Self8_image.alt} className={styles.headshot} />
        As a Software Engineer, I utilize best practices to create applications and products to meet a variety of business and user needs. I've spent my professional career working project management for software development programs in the Air Force and as a Park Ranger in the Bureau of Land Management, where I worked wildland fire response and collected field data for integration into SQL databases. From these experiences I was inspired to pursue Software Development full-time and made the career-switch by attending an immersive Software Engineering bootcamp through General Assembly.
        <br></br>
        <br></br>
        After spending almost a decade exploring the states, I've returned to my New England roots. I now spend my free time wandering the woods with my dog, perusing bookshop shelves for hours, staring at the sky and any body of water I happen upon, people-watching under the guise of drinking coffee, and obsessively listening to the music that puts words to my emotions. I'm a non-commital professional Photographer and appreciate all forms of artistic expression.
        </p>
      </div>
        <iframe src="https://open.spotify.com/embed/album/50ZenUP4O2Q5eCy2NRNvuz?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" alt="stickseasonalbum" title="noahkahan" id="album"></iframe>
    </div>
  )
}

export default AboutMe