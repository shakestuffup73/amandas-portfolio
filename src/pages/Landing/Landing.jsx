import styles from '../Landing/Landing.module.css'

const Landing = () => {
  return (
    <>
    <body className={styles.container}>
      <div id="layout">
        <div id="brand-image">
          <img src="assets/images/AmandaRFLogo6.png" alt="amanda stern name through camera aperture"></img>
        </div>
      </div>
      {/* <div id="title-div" className={styles}>
        <h1>Software Engineer</h1>
        <h1>Photographer</h1>
        <h1>Wilderness-Wanderer</h1>
      </div> */}
    </body>
    </>
  )
}

export default Landing