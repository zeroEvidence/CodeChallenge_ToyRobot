import { IToy } from "../../interfaces/Toy.interface";

export abstract class MoveControllerBase {
  constructor(protected toy: IToy) {
    //
  }
}
