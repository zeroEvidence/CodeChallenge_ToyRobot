import { ISurface } from "../surface/interfaces/Surface.interface";
import { IToy } from "./interfaces/Toy.interface";
import { IOrientation } from "./orientation/interfaces/Orientation";
import { Orientation } from "./orientation/Orientation";
import { IPosition } from "./position/interfaces/Position.interface";
import { Position } from "./position/Position";
import { ToyStrings } from "./ToyStrings";

export abstract class Toy implements IToy {
  constructor(
    private toyStrings = ToyStrings,
    public surface: ISurface = void 0,
    public position: IPosition = new Position(),
    public orientation: IOrientation = new Orientation()
  ) {}

  public setSurface(surface: ISurface) {
    this.surface = surface;
  }

  public setPosition(position: IPosition) {
    this.position = position;
    return true;
  }

  public setOrientation(orientation: IOrientation) {
    // get a copy, not a reference.
    this.orientation = { ...orientation };

    return true;
  }

  public validateOrientation(orientation: IOrientation) {
    return true;
  }

  public validatePosition(position: IPosition) {
    return true;
  }

  public validatePlacement() {
    if (
      !this.surface ||
      this.position.x < 0 ||
      this.position.y < 0 ||
      this.orientation.orientation < 0
    ) {
      throw new Error(this.toyStrings.missingEnvironment);
    }

    return true;
  }
}
