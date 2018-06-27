import { IToy } from "./Toy.interface";
import { IToyConfig } from "./ToyConfig.interface";

export interface ToyFactory<T extends IToy = IToy> {
  createToy(toyConfig: IToyConfig): T;
}
