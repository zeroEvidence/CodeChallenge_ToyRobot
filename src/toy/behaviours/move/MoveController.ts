import { IToy } from "../../interfaces/Toy.interface";
import { IMoveController } from "./interfaces/MoveController.interface";
import { MoveControllerBase } from "./MoveControllerBase";

export class MoveController extends MoveControllerBase
  implements IMoveController {
  constructor(protected toy: IToy) {
    super(toy);
  }

  // By default toys do not move by themselves
  public move() {
    return true;
  }
}
