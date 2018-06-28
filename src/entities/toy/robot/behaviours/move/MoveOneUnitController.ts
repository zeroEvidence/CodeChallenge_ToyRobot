import { IMoveController } from "../../../behaviours/move/interfaces/MoveController.interface";
import { Toy } from "../../../Toy";
import { CardinalDirections } from "../orientation/CardinalDirections";

export class MoveOneUnitController extends Toy implements IMoveController {
  constructor() {
    super();
  }

  public move() {
    if (this.validatePlacement()) {
      // noop
    }

    const newPosition = { ...this.position };

    switch (this.orientation.orientation) {
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

    return this.setPosition(newPosition);
  }
}
