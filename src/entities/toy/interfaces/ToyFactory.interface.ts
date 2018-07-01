import { IToy } from "./Toy.interface";
import { IToyConfig } from "./ToyConfig.interface";

/**
 * IToyFactory defines a specification for all abstract toy factories.
 *
 * @export
 * @interface IToyFactory
 * @template T
 */
export interface IToyFactory<T extends IToy = IToy> {
  createToy(toyConfig: IToyConfig): T;
}
