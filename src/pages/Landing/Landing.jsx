import styles from '../Landing/Landing.module.css'

const Landing = () => {
  return (
    <>
    <main className={styles.container}>
      <div id="brand-image">
        <img src="assets/images/AmandaRFLogo.png" alt="amanda stern and dog libby in camera preview display"></img>
        <h1>Software Engineer</h1>
        <h2>Wilderness Wanderer</h2>
        <h2>Avid Photographer</h2>
      </div>
      <div className={styles.intro}>
      </div>
    </main>
    </>
  )
}

export default Landing