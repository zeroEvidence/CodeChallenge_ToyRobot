import { IPosition } from "../../toy/position/interfaces/Position.interface";
import { Surface } from "../Surface";

/**
 * Table is a surface with boundaries
 *
 * @export
 * @class Table
 * @extends {Surface}
 */
export class Table extends Surface {
  constructor(length: number, width: number) {
    super(length, width);
  }

  public hasSurfaceAtPos(position: IPosition) {
    // Available positions are within its length and width, also can't be a 0
    // length and/or width table
    if (
      position.x >= this.length ||
      position.x < 0 ||
      position.y >= this.width ||
      position.y < 0 ||
      this.length === 0 ||
      this.width === 0
    ) {
      return false;
    }

    return true;
  }
}
