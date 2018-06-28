import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IOrientation } from "../orientation/interfaces/Orientation";
import { IPosition } from "../position/interfaces/Position.interface";
import { Toy } from "../Toy";
import { IRobot } from "./interfaces/Robot.interface";
import { RobotStrings } from "./RobotStrings";

export class Robot extends Toy implements IRobot {
  constructor(toyStrings = RobotStrings) {
    super(toyStrings);
  }

  public place(
    position: IPosition,
    orientation: IOrientation,
    surface?: ISurface
  ): boolean {
    return;
  }

  public report() {}

  public move(): boolean {
    return;
  }

  public left() {}

  public right() {}

  public changeOrientation(amount: number) {}
}
