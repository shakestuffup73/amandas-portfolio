import styles from '../AboutMe/AboutMe.module.css'
import { Self8_image } from '../../assets/images/exports'
import axios from 'axios'

const AboutMe = () => {
  
  const getNewJoke = async () => {
    const joke = document.getElementById('joke')
    const jokeText = await getDadJoke()
    console.log('this is jokeText:', jokeText)
    joke.textContent=jokeText
    console.log('this is joke:', joke)
  }
  
  const getDadJoke = async () => {
    try {
      const config = { headers: { Accept: 'application/json' } }
      const res = await axios.get('https://icanhazdadjoke.com', config)
      // console.log(res.data.joke)
      return res.data.joke
    } catch (error) {
      console.log('ERROR!: ', error)
      return "No jokes for you, sorry!"
    }
  }

  return (
    
    <div className={styles.gridContainer}>
      <h1 id="brand-image">Hi, I'm Amanda.</h1>
      <div className={styles.one}>
        <p>
        <img src={Self8_image.src} alt={Self8_image.alt} className={styles.headshot} />
        Software Engineer. Wilderness-Wanderer. Photographer. Loyal human to my beloved dog, Libby.
        <br></br><br></br>
        My professional career started with working project management for software development programs in the Air Force. Upon leaving the military, I went on to work outdoor education and became a Park Ranger in the Bureau of Land Management. As a Ranger I worked wildland fire response and collected field data for integration into SQL databases. After a long walk in the woods, I decided to pursue Software Development full-time and made the career-switch by attending an immersive Software Engineering bootcamp through General Assembly.
        <br></br>
        <br></br>
        After spending almost a decade exploring the states, I've returned to my New England roots. I now spend my free time wandering the woods with my dog, perusing bookshop shelves for hours, staring at the sky and any body of water I happen upon, people-watching under the guise of drinking coffee, and obsessively listening to the music that puts words to my emotions. Shamelessly sharing bad dad jokes and even worse puns is another favorite activity, along with spontaneously napping on warm rocks. I'm also a Professional Photographer and appreciate all forms of artistic expression.
        </p>
      </div>
      <div className={styles.jokeDiv}>
          <button onClick={getNewJoke} className={styles.button}>How about a bad Dad-Joke?</button>
          <p className={styles.jokeP} id='joke'></p>
        {/* <Lottie
          loop
          animationData={dinosaur}
          play
          style={{ width: 390 }}
          className={styles.dino}
        /> */}
        </div>
    </div>
  )
}

export default AboutMe