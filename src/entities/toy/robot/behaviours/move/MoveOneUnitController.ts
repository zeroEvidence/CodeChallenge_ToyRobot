import { IMoveController } from "../../../behaviours/move/interfaces/MoveController.interface";
import { IToy } from "../../../interfaces/Toy.interface";
import { CardinalDirection } from "../orientation/CardinalDirections";

export class MoveOneUnitController<T extends IToy = IToy>
  implements IMoveController {
  constructor() {}

  public move(this: T) {
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
