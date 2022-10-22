import styles from '../Landing/Landing.module.css'

const Landing = () => {
  return (
    <>
    <main className={styles.container}>
      <div id="brand-image">
        <img src="assets/images/AmandaRFLogo.png" alt="amanda stern and dog libby in camera preview display"></img>
        <h1>Software Engineer  ||  Photographer  || Loyal human to my dog</h1>
      </div>
      <div className={styles.intro}>
        <h1>Hey there! I'm Amanda, a Professional Software Engineer, wilderness-wanderer, avid-photographer, and loyal human to my beloved dog, Libby.</h1>
      </div>
    </main>
    </>
  )
}

export default Landing