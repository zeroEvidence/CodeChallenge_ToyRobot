import { IEnvironment } from "./interfaces/Environment.interface";
import { IPosition } from "./interfaces/Position.interface";
import { IToy } from "./interfaces/Toy.interface";

export abstract class Toy implements IToy {
  public environment: IEnvironment;
  public position: IPosition;

  constructor() {
    this.position = {
      x: -1,
      y: -1,
      orientation: -1
    };
  }

  public setEnvironment(environment: IEnvironment) {
    this.environment = environment;
  }
}
