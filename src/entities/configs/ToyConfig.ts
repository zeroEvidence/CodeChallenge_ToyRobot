import { IToyConfig } from "../toy/interfaces/ToyConfig.interface";

/**
 * ToyConfig sets the default strings for toys
 */
export const ToyConfig: IToyConfig = {
  rules: [],
  strings: {
    invalidPlace: "Position is invalid",
    missingEnvironment: "Environment is not set"
  }
};
