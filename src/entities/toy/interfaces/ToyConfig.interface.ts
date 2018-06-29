import { ToyRules } from "../../configs/rules/ToyRules";
import { IToyStrings } from "./ToyStrings.interface";

export interface IToyConfig {
  rules: Array<ToyRules>;
  strings?: IToyStrings;
}
