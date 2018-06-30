import { IMoveController } from "../../../behaviours/move/interfaces/MoveController.interface";
import { Toy } from "../../../Toy";
import { CardinalDirection } from "../orientation/CardinalDirections";

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
      case CardinalDirection.north:
        newPosition.y++;
        break;

      case CardinalDirection.east:
        newPosition.x++;
        break;

      case CardinalDirection.south:
        newPosition.y--;
        break;

      case CardinalDirection.west:
        newPosition.x--;
        break;
    }

    return this.setPosition(newPosition);
  }
}
