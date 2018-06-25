import { ISurface } from "../surface/interfaces/Surface.interface";
import { IPosition } from "./interfaces/Position.interface";
import { IToy } from "./interfaces/Toy.interface";
import { CardinalDirections } from "./orientation/CardinalDirections";
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

  public setSurface(surface: ISurface) {
    this.surface = surface;
  }

  public place(position: IPosition) {
    const positionSet = this.setPosition(position);

    if (positionSet) {
      this.isPlacedFlag = true;
    }

    return positionSet;
  }

  public report() {
    if (this.isPlaced()) {
      return this.position;
    }
  }

  public move() {
    if (!this.isPlaced()) {
      // noop
    }

    const newPosition = { ...this.position };

    switch (this.position.orientation) {
      case CardinalDirections.north:
        newPosition.y++;
        break;

      case CardinalDirections.east:
        newPosition.x++;
        break;

      case CardinalDirections.south:
        newPosition.y--;
        break;

      case CardinalDirections.west:
        newPosition.x--;
        break;
    }

    return this.setPosition(newPosition);
  }

  public left() {
    this.changeOrientation(++this.position.orientation);
  }

  public right() {
    this.changeOrientation(
      --this.position.orientation === -1 ? 3 : this.position.orientation
    );
  }

  protected changeOrientation(amount: number) {
    if (!this.isPlaced()) {
      // noop
    }

    this.position.orientation = amount % 4;
  }

  protected validatePosition(position: IPosition): boolean {
    if (!this.environment) {
      return false;
    }

    return this.environment.hasSurfaceAtPos(position);
  }

  protected setPosition(position: IPosition): boolean {
    const validPosition = this.validatePosition(position);

    if (validPosition) {
      this.position = position;
    }

    return validPosition;
  }

  protected isPlaced(): boolean {
    if (!this.isPlacedFlag) {
      throw new Error(ToyStrings.missingEnvironment);
    }

    return true;
  }
}
