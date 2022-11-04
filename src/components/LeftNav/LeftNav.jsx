import { 
  github_white, 
  linkedin_cyan, 
  camera, 
} from '../../assets/images/exports'

const LeftNav = () => {
  return ( 
    <div id="icon-div">
      <a href="https://github.com/shakestuffup73">
        <img src={ github_white } alt="icon for link to github profile" id="github-icon" />
      </a>
      <a href="https://www.linkedin.com/in/amandastern73/">
        <img src={ linkedin_cyan } alt="icon for link to linkedin profile" id="linkedin-icon" />
      </a>
      <a href="https://www.photosbyamandas.com/">
        <img src={ camera } alt="icon for link to photography website" id="camera-icon" />
      </a>
    </div>
  );
}

export default LeftNav;