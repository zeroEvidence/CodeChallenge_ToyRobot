import { Toy } from "../toy/Toy";
import { IRobot } from "./interfaces/Robot.interface";

export class Robot extends Toy implements IRobot {
  constructor() {
    super();
  }
}
