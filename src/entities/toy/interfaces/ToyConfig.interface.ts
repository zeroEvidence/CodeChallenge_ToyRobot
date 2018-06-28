import { ToyRules } from "../ToyRules";
import { IToyStrings } from "./ToyStrings.interface";

export interface IToyConfig {
  rules: Array<ToyRules>;
  strings?: IToyStrings;
}
