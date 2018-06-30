import { IToyConfig } from "../toy/interfaces/ToyConfig.interface";
import { ToyRules } from "./rules/ToyRules";
import { ToyType } from "./toyType/ToyType";

export const RobotConfigStandard: IToyConfig = {
  rules: [
    ToyRules.isSurfaceMountable,
    ToyRules.isReportable,
    ToyRules.isPositionable,
    ToyRules.isOrientable,
    ToyRules.isMoveable
  ],
  strings: {
  type: ToyType.StandardRobotV1
};
