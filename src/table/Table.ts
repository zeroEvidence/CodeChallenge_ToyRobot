import { ICoordinates } from "./interfaces/ICoordinates.interface";
import { ITable } from "./interfaces/ITable.interface";

export class Table implements ITable {
  public readonly length: number;
  public readonly width: number;

  constructor(length = 5, width = 5) {
    this.length = length;
    this.width = width;
  }

  public hasSurfaceAtCoords(coordinates: ICoordinates) {
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
