import styles from '../Landing/Landing.module.css'

const Landing = () => {
  return (
    <>
    <main className={styles.container}>
      <div id="brand-image">
        <img src="assets/images/AmandaRFLogo.png" alt="amanda stern and dog libby in camera preview display"></img>
        <h1>Software Engineer  ||  Photographer  || Loyal human to my dog</h1>
      </div>
      <div>
        <h1>Hey there! I'm Amanda, a professional Software Engineer, outdoor adventurer and non-commital photographer.</h1>
      </div>
    </main>
    </>
  )
}

export default Landing