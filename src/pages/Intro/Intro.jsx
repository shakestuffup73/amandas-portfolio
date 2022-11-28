import styles from './Intro.module.css'
import Lottie from 'react-lottie-player'
import arrow from '../../assets/lotties/arrow.json'
import dinosaur from '../../assets/lotties/dinosaur.json' 

const Intro = () => {
  return ( 
    <div className={ styles.introDiv }>
      <div className={styles.name}>
        <h1>AMANDA STERN</h1>
        <h3>Software Engineer || Wilderness-Wanderer || Photographer || Loyal Human To My Dog</h3>
        <Lottie
          loop
          animationData={dinosaur}
          play
          style={{ width: 390 }}
        />
        <h2>Explore My Portfolio</h2>
        <Lottie
          loop
          animationData={arrow}
          play
          style={{ width: 30 }}
        />
      </div>
    </div>
  );
}
export default Intro
