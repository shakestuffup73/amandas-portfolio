import projects from "../data/projects";
import hyphenateWords from "./hyphenateWords";

const findProject = (string) => {
  const project = projects.find(({title}) => {
    return hyphenateWords(title) === string
  })
  return project
}

export default findProject