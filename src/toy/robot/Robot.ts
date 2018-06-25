import { Toy } from "../Toy";
import { IRobot } from "./interfaces/Robot.interface";

export class Robot extends Toy implements IRobot {
  constructor() {
    super();
  }
}
