import ProjectModel from './project.model';

export default interface ArtifactModel {
  id: number;
  project: ProjectModel;
  programmingLanguage: string;
  content: string;
  script?: string;
}
