import { projects } from '../model/projects'

export function getProjectByName(projectName: string) {
  return projects.find((project) => project.project_name === projectName)
}

