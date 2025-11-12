import PPAModel from '../models/PPA.model';
import { artifactMock } from './artifactMock';

export let PPAMock: PPAModel = {
  id: 0,
  action: 'action',
  artifact: artifactMock,
  local: 'src/app/mocks/PPAMock.ts',
  score: 77,
  type: 'mock',
};
