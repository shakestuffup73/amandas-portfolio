import styles from '../Landing/Landing.module.css'
import { amandaRFLogo_icon } from '../../assets/images/exports'

const Landing = () => {
  return (
    <>
    <body className={styles.container}>
      <div id="layout">
        <div id="brand-image">
          <img src={ amandaRFLogo_icon.src } alt={ amandaRFLogo_icon.alt } />
        </div>
      </div>
    </body>
    </>
  )
}

export default Landing