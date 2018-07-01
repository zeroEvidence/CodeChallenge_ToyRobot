import { IToy } from "./Toy.interface";

/**
 * IToyReportable is a specification for toys that report something back.
 *
 * @export
 * @interface IToyReportable
 * @extends {IToy}
 * @template T
 */
export interface IToyReportable<T = any> extends IToy {
  report(): T;
}
