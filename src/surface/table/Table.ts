import { IPosition } from "../../toy/behaviours/position/interfaces/Position.interface";
import { Surface } from "../Surface";

export class Table extends Surface {
  constructor(length = 5, width = 5) {
    super();

    this.length = length;
    this.width = width;
  }

  public hasSurfaceAtPos(coordinates: IPosition) {
    if (
      coordinates.x >= this.length ||
      coordinates.x < 0 ||
      coordinates.y >= this.width ||
      coordinates.y < 0
    ) {
      return false;
    }

    return true;
  }
}
