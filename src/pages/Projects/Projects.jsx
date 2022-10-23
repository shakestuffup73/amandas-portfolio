import styles from '../Projects/Projects.module.css'

const Projects = () => {

  return (
    <>
    <div className={styles.pageLayout}>
      <div className={styles.titleDiv}>
        <h1>Projects</h1>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.one}>One</div>
        <div className={styles.two}>Two</div>
        <div className={styles.three}>Three</div>
        <div className={styles.four}>Four</div>
        <div className={styles.five}>Five</div>
      </div>
    </div>
    </>
  )
}

export default Projects