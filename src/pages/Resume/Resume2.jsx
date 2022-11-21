import styles from '../Resume/Resume2.module.css'

const Resume2 = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.timeline}>
          <ul>
            <li>
              <div className={styles.timelineContent}>
                <h1>Role 1</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, deleniti! Fuga distinctio est facere ducimus itaque consequatur harum, in ipsum at facilis repellendus cupiditate, autem minima, architecto iste laudantium modi?</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Role 2</h1>
                <p>Information About Job</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Role 3</h1>
                <p>Information About Job</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Role 4</h1>
                <p>Information About Job</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Resume2