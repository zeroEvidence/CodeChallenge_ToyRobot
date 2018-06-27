import { IToyConfig } from "../interfaces/ToyConfig.interface";
import { ToyRules } from "../ToyRules";

export const RobotConfigStandard: IToyConfig = [
  ToyRules.isSurfaceMountable,
  ToyRules.isReportable,
  ToyRules.isPositionable,
  ToyRules.isOrientable,
  ToyRules.isMoveable
];
