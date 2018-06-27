import { ISurface } from "../surface/interfaces/Surface.interface";
import { IToy } from "./interfaces/Toy.interface";
import { IPosition } from "./position/interfaces/Position.interface";

export abstract class Toy implements IToy {
  public surface: ISurface;
  public position: IPosition;
  public isPlacedFlag: boolean;

  constructor() {
    this.isPlacedFlag = false;
    this.position = {
      orientation: -1,
      x: -1,
      y: -1
    };
  }
}
