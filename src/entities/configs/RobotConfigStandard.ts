import { IToyConfig } from "../toy/interfaces/ToyConfig.interface";
import { ToyRules } from "./rules/ToyRules";
import { ToyType } from "./toyType/ToyType";

/**
 * RobotConfigStandard is the configuration object that is used to produce the
 * standard robot.
 */
export const RobotConfigStandard: IToyConfig = {
  rules: [
    ToyRules.isSurfaceMountable,
    ToyRules.isReportable,
    ToyRules.isPositionable,
    ToyRules.isOrientable,
    ToyRules.isMoveable
  ],
  strings: {
    invalidPlace: "Boop-boop! Error: invalid place.",
    missingEnvironment: "Boop-boop! Error: place me first."
  },
  type: ToyType.StandardRobotV1
};
