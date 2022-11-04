import styles from '../Landing/Landing.module.css'
import { AmandaAboutMeLogo } from '../../assets/images/exports'

const Landing = () => {
  return (
    <>
    <body className={styles.container}>
      <div id="layout">
        <div id="brand-image">
          <img src={AmandaAboutMeLogo} alt="amanda stern name through camera aperture" />
        </div>
      </div>
    </body>
    </>
  )
}

export default Landing