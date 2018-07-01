import { ToyRules } from "../../configs/rules/ToyRules";
import { IToyStrings } from "./ToyStrings.interface";

/**
 * IToyConfig defines a specification for all toy configuration objects.
 *
 * @export
 * @interface IToyConfig
 */
export interface IToyConfig {
  type?: number;
  rules: ToyRules[];
  strings?: IToyStrings;
}
