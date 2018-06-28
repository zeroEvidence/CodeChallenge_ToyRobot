import { IToy } from "./Toy.interface";
import { IToyConfig } from "./ToyConfig.interface";

export interface IToyFactory<T extends IToy = IToy> {
  createToy(toyConfig: IToyConfig): T;
}
