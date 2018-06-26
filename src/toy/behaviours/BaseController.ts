import { IToy } from "../interfaces/Toy.interface";
import { IBaseController } from "./interfaces/BaseController.interface";

export abstract class BaseController<T extends IToy = IToy>
  implements IBaseController<T> {
  constructor(public toy: T) {
    //
  }
}
