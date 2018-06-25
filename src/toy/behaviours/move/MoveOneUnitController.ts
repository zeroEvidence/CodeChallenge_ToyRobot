import { IToy } from "../../interfaces/Toy.interface";
import { IMoveController } from "./interfaces/MoveController.interface";
import { MoveControllerBase } from "./MoveControllerBase";

export class MoveOneUnitController extends MoveControllerBase
  implements IMoveController {
  constructor(protected toy: IToy) {
    super(toy);
  }

  public move() {
    if (!this.toy.isPlaced()) {
      // noop
    }

    const newPosition = { ...this.toy.position };

    switch (this.toy.position.orientation) {
      case CardinalDirections.north:
        newPosition.y++;
        break;

      case CardinalDirections.east:
        newPosition.x++;
        break;

      case CardinalDirections.south:
        newPosition.y--;
        break;

      case CardinalDirections.west:
        newPosition.x--;
        break;
    }

    return this.toy.setPosition(newPosition);
  }
}
