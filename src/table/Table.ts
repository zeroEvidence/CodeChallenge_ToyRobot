import { Surface } from "../surface/Surface";
import { ICoordinates } from "./interfaces/ICoordinates.interface";

export class Table extends Surface {
  public readonly length: number;
  public readonly width: number;

  constructor(length = 5, width = 5) {
    super();

    this.length = length;
    this.width = width;
  }

  public hasSurfaceAtPos(coordinates: ICoordinates) {
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
