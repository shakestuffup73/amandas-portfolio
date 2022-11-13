import projects from "../data/projects";

function findProject(string) {
  let project = projects.filter(string)
  return project
}

export default findProject