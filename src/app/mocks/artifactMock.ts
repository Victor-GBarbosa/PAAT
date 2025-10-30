import ArtifactModel from '../models/artifact.model';
import { projectMock } from './projectMock';

export let artifactMock: ArtifactModel = {
  id: 0,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
  programmingLanguage: 'Java 21',
  project: projectMock,
  script: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
};
