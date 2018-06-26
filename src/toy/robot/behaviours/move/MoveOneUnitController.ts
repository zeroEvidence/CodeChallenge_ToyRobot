import { BaseController } from "../../../behaviours/BaseController";
import { IMoveController } from "../../../behaviours/move/interfaces/MoveController.interface";
import { CardinalDirections } from "../../../behaviours/orientation/CardinalDirections";
import { IToyPositional } from "../../../interfaces/ToyPositional.interface";

export class MoveOneUnitController extends BaseController<IToyPositional>
  implements IMoveController {
  constructor(toy: IToyPositional) {
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
