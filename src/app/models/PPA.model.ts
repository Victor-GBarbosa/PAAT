import ArtifactModel from './artifact.model';

export default interface PPAModel {
  id: number;
  artifact: ArtifactModel;
  local: string;
  type: string; // Preferivel trocar por ENUM
  score: number;
  action: string;
}
