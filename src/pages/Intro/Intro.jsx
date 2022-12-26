import styles from './Intro.module.css'
import Lottie from 'react-lottie-player'
import arrow from '../../assets/lotties/arrow.json'
import 'animate.css'
import dinosaur from '../../assets/lotties/dinosaur.json'
// import { Suspense } from 'react' 

const Intro = () => {
  return ( 
    <div className={styles.introDiv}>
      <div className={styles.name}>
        <h1 class="animate__animated animate__fadeInDown">AMANDA STERN</h1>
        <h3 class="animate__animated animate__fadeInDown">Software Engineer || Wilderness-Wanderer || Loyal Human To My Dog</h3>
        {/* <Suspense> */}
          <div>
          {/* <Lottie
            loop
            animationData={dinosaur}
            play
            style={{ width: 390 }}
            className={styles.dino}
          /> */}
          </div>
        {/* </Suspense> */}
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
