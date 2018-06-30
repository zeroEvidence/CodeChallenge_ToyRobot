import { ToyType } from "../../configs/toyType/ToyType";
import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IToyStrings } from "../interfaces/ToyStrings.interface";
import { IOrientation } from "../orientation/interfaces/Orientation";
import { IPosition } from "../position/interfaces/Position.interface";
import { Toy } from "../Toy";
import { IRobot } from "./interfaces/Robot.interface";

/* tslint:disable:no-empty */
export class Robot extends Toy implements IRobot {
  constructor(toyStrings: IToyStrings, type: ToyType) {
    super(toyStrings, type);
  }

  public place(
    position: IPosition,
    orientation: IOrientation,
    surface?: ISurface
  ): boolean {
    return;
  }

  // ts-
  public report() {}

  public move(): boolean {
    return;
  }

  public left() {}

  public right() {}

  public changeOrientation(amount: number) {}
}
