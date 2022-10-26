import styles from '../AboutMe/AboutMe.module.css'

const AboutMe = () => {

  return (
    <>
    <div className={styles.titleDiv}>
      <img src="assets/images/AmandaAboutMeLogo.png" alt="aperture with dev projects words"></img>
    </div>
    <div className={styles.pageLayout}>
      <div className={styles.gridContainer}>
        <div className={styles.one}>
          <h1>Hi, I'm Amanda.</h1>
          <img src='assets/images/AmandaLibby.jpg' alt='amanda with her labrador, libby'></img>
          <div className={styles.myTagLine}>
            <h3>Software Engineer <br /> Photographer <br /> Wilderness Wanderer <br /> Loyal Human to my Beloved Lab, Libby </h3>
          </div>
          <h2>
          As a Professional Software Engineer, I'm passionate about creating applications and products to meet a variety of business and user needs. I began my professional career working project management for software development programs in the Air Force, and managing SQL databases as a Park Ranger in the Bureau of Land Management. From these experiences I was inspired to pursue Software Development full-time and made the career-switch by attending an immersive Software Engineering bootcamp through General Assembly.  
          </h2>
          <h3>Continue reading for a more detailed summary of my professional background:</h3>
          <h3>Upon graduating college in 2012, I commissioned as an Acquisitions Officer in the U.S. Air Force. My early career years were spent working as a Project Manager in Software Development, Testing and Fielding for Global Positioning Systems at Space Command in Los Angeles. As a military liasion to Lockheed Martin and Sandia National Laboratories, I collaborated with various stakeholders and industry partners to develop the software that launches and commands/controls our next generation of satellites.
          </h3>  
          <h3>
          After six years on Active Duty in the Air Force, I decided to branch out (pun intended!) and see what else life had to offer. Seeking new adventures, I worked Outdoor Education and became certified as a Wilderness Emergency Medical Technician. As an expedition team member, I spent months traversing glaciers, backpacking canyons, and backcountry skiing through rugged and remote environments.<br />
          With refined wilderness competency skills, I went on to become a Federal Park Ranger for the Bureau of Land Management in Colorado and Montana. In my Park Ranger years, I learned Geographic Information Systems, utilizing a SQL database, ArcMap, ArcPro, Citrix and ESRI to make recreation and wilderness maps.
          </h3>
          <h3>After a long walk in the woods (600 miles on the AT!) I decided to make a career-switch to return to the Software Industry, this time as a dedicated Software Engineer. From August-November 2022 I attended an intensive Software Engineering Immersive through General Assembly.
          </h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe