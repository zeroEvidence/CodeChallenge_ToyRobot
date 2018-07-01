import { ToyConfig } from "../configs/ToyConfig";
import { ToyType } from "../configs/toyType/ToyType";
import { ISurface } from "../surface/interfaces/Surface.interface";
import { IToy } from "./interfaces/Toy.interface";
import { IToyStrings } from "./interfaces/ToyStrings.interface";
import { IOrientation } from "./orientation/interfaces/Orientation";
import { Orientation } from "./orientation/Orientation";
import { IPosition } from "./position/interfaces/Position.interface";
import { Position } from "./position/Position";

/**
 * Toy is the base class from which all toys are derived from.
 *
 * @export
 * @abstract
 * @class Toy
 * @implements {IToy}
 */
export abstract class Toy implements IToy {
  constructor(
    public toyStrings: IToyStrings = ToyConfig.strings,
    public type: ToyType = -1,
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
    // position must always be a real number and be relative to a surface.
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
