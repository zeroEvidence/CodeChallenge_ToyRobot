import { IToyConfig } from "../toy/interfaces/ToyConfig.interface";

// This sets the default strings for toys
export const ToyConfig: IToyConfig = {
  rules: [],
  strings: {
    missingEnvironment: "Environment is not set",
    invalidPlace: "Position is invalid"
  }
};
