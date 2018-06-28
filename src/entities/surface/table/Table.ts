import { IPosition } from "../../toy/position/interfaces/Position.interface";
import { Surface } from "../Surface";

export class Table extends Surface {
  constructor(length: number, width: number) {
    super(length, width);
  }

  public hasSurfaceAtPos(position: IPosition) {
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
