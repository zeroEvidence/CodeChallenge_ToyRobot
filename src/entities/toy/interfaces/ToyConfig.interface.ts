import { ToyRules } from "../../configs/rules/ToyRules";
import { IToyStrings } from "./ToyStrings.interface";

export interface IToyConfig {
  type?: number;
  rules: ToyRules[];
  strings?: IToyStrings;
}
