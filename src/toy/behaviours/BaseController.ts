import { IToy } from "../interfaces/Toy.interface";

export abstract class ControllerBase {
  constructor(protected toy: IToy) {
    //
  }
}
