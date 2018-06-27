import { IToy } from "../../interfaces/Toy.interface";

export interface IBaseController<T extends IToy = IToy> {
  toy: T;
}
