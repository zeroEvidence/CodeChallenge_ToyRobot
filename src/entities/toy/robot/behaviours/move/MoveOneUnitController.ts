import { IMoveController } from "../../../behaviours/move/interfaces/MoveController.interface";
import { IToy } from "../../../interfaces/Toy.interface";
import { CardinalDirection } from "../orientation/CardinalDirections";

/**
 * MoveOneUnitController give a toy the ability to move one unit at a time in
 * the direction it is currently facing.
 *
 * @export
 * @class MoveOneUnitController
 * @implements {IMoveController}
 * @template T
 */
export class MoveOneUnitController<T extends IToy = IToy>
  implements IMoveController {
  constructor() {
    //
  }

  public move(this: T) {
    // throw an error if it is not in a valid place.
    if (this.validatePlacement()) {
      // noop, otherwise continue.
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
