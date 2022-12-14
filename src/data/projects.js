import { 
  amandalorian_screenshot, 
  rock_screenshot, 
  tictaccatjam_screenshot, 
  rockcollector_screenshot, 
  lamdb_screenshot,
} from "../assets/images/exports"


const projects = [
  {
    title: "Rock Collector",
    description: "Collect rocks, feed them lichen, moss and mushrooms, and give them pet frogs to keep them company.",
    image: rockcollector_screenshot,
    respositoryLink: "https://github.com/shakestuffup73/rock-collector/blob/main/READme.md",
    deploymentLink: "https://web-production-3d7b.up.railway.app/",
    languages: "HTML, CSS, Python",
    details: "Full-Featured Framework Application Built Utilizing Django and Docker",
    tech: "Django, Docker, Python, HTML5, CSS"
  },
  {
    title: "Rock and Ice",
    description: "A community forum for rock and ice climbers to share climbs, comment on climbs, share their skills, and add climbing partners to their profiles.",
    image: rock_screenshot,
    respositoryLink: "https://github.com/shakestuffup73/appalachian-mtns/blob/main/README.md",
    deploymentLink: "https://appalachian-mtns.fly.dev/",
    languages: "EJS, CSS, Javascript",
    details: "MEN Stack CRUD Application: MongoDB, Express, NodeJS, Javascript, HTML5, CSS3",
    tech: "MEN Stack CRUD Application: MongoDB, Express, NodeJS, Javascript, HTML5, CSS3, GoogleOAuth"   
  },
  {
    title: "LAMdb",
    description: "A secure database for managing pets' veterinary records.",
    image: lamdb_screenshot,
    respositoryLink: "Front End: https://github.com/shakestuffup73/lamdb-frontend || Back End: https://github.com/shakestuffup73/lamdb-backend",
    deploymentLink: "https://lamdb.netlify.app/",
    languages: "Front-end: Javascript, CSS, HTML, Back-end: Javascript",
    tech: "MERN Stack CRUD Application: MongoDB, Express, React,NodeJS, Javascript, HTML5, CSS3", 
  },
  {
    title: "Amandalorian",
    description: "A choose-your-own adventure game inspired by the Disney Series The Manadalorian.",
    image: amandalorian_screenshot,
    respositoryLink: "https://github.com/shakestuffup73/amandalorian/blob/main/ReadME.md",
    deploymentLink: "https://amandalorian.netlify.app/",
    languages: "HTML, CSS, Javascript",
    details: "",
    tech: "Javascript, HTML5, CSS3"  
  },
  {
    title: "Tic-Tac-CatJam",
    description: "First software development project from GA's Software Engineering Immersive Bootcamp - an interactive tic-tac-toe game with music and flashing light effects for the win!",
    image: tictaccatjam_screenshot,
    repositoryLink: "https://github.com/shakestuffup73/ttt-weekend/blob/main/README.md",
    deploymentLink: "https://tictaccatjam.fly.dev/",
    languages: "HTML, CSS, Javascript",
    details: "Browser-based game",
    tech: "Javascript, HTML5, CSS3"  
  },
]

export default projects