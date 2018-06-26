import { ISurface } from "../surface/interfaces/Surface.interface";
import { IPosition } from "./behaviours/position/interfaces/Position.interface";
import { IToy } from "./interfaces/Toy.interface";
import { ToyStrings } from "./ToyStrings";

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

  public place(position: IPosition) {
    const positionSet = this.setPosition(position);

    if (positionSet) {
      this.isPlacedFlag = true;
    }

    return positionSet;
  }

  public report() {}

  public move() {}

  public left() {}

  public right() {}

  public isPlaced(): boolean {
    if (!this.isPlacedFlag) {
      throw new Error(ToyStrings.missingEnvironment);
    }

    return true;
  }

  public setPosition(position: IPosition): boolean {
    const validPosition = this.validatePosition(position);
    const validOrientation = this.validateOrientation(position);

    if (validPosition && validOrientation) {
      this.position = position;
    }

    return validPosition && validOrientation;
  }

  protected changeOrientation(amount: number) {}

  protected validatePosition(position: IPosition): boolean {
    let isValid = false;

    if (this.surface) {
      isValid = true;
    }

    return isValid && this.surface.hasSurfaceAtPos(position);
  }

  protected validateOrientation(position: IPosition): boolean {}
}
