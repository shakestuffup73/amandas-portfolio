import styles from '../AboutMe/AboutMe.module.css'

const AboutMe = () => {

  return (
    <>
    <div className={styles.pageLayout}>
      <div className={styles.titleDiv}>
        <img src="assets/images/AmandaAboutMeLogo.png" alt="aperture with dev projects words"></img>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.one}>
          <h1>Hi, I'm Amanda.</h1>
          <img src='assets/images/AmandaLibby.jpg' alt='amanda with her labrador, libby'></img>
          <h2>I'm a Software Engineer, photographer, wilderness-wanderer, and loyal human to my beloved labrador, Libby.</h2>
          <h3>Upon graduating college in 2012, I commissioned as an Acquisitions Officer working Project Management for the Air Force. My early career years were spent working Software Development, Testing and Fielding for Global Positioning Systems at Space Command in Los Angeles. As a military liasion to Lockheed Martin and Sandia National Laboratories, I worked closely with various stakeholders and industry partners to develop the software to launch and command/control our next generation of satellites.
          </h3>  
          <h3>After spending six years on Active Duty in the Air Force, I decided to branch out (pun intended!) and see what else life had to offer. Seeking new adventures, I worked Outdoor Education in Washington and Maine, becoming certified in high-angle rock rescue, avalanche search & rescue, and as a Wilderness Emergency Medical Technician. As an expedition team member, I spent months traversing glaciers, backpacking canyons, and backcountry skiing through rugged and remote environments.</h3>
          <h3>With refined wilderness competency skills, I went on to become a Federal Park Ranger for the Bureau of Land Management in Colorado and Montana. In my Park Ranger years I learned Geographic Information Systems database management, where I utilized a SQL database and ArcMap, ArcPro, Citrix and ESRI products to make recreation and wilderness maps.</h3>
          <h3>After a long walk in the woods (600 miles on the AT!) I decided to make a career-switch to return to the software industry, this time as a dedicated Software Engineer, attending an intensive Software Engineering Immersive through General Assembly from Aug-November 2022.
          </h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe