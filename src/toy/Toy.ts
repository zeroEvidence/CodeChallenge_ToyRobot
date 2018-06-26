import { ISurface } from "../surface/interfaces/Surface.interface";
import { IPosition } from "./behaviours/position/interfaces/Position.interface";
import { IToy } from "./interfaces/Toy.interface";

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

  public setSurface(surface: ISurface) {}

  public place(position: IPosition) {}

  public report() {}

  public move() {}

  public left() {}

  public right() {}

  public isPlaced(): boolean {}

  public setPosition(position: IPosition): boolean {}

  protected changeOrientation(amount: number) {}

  protected validatePosition(position: IPosition): boolean {}

  protected validateOrientation(position: IPosition): boolean {}
}
