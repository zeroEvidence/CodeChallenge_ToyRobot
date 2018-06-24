import { IEnvironment } from "./interfaces/Environment.interface";
import { IPosition } from "./interfaces/Position.interface";
import { IToy } from "./interfaces/Toy.interface";
import { ToyStrings } from "./ToyStrings";

export abstract class Toy implements IToy {
  public environment: IEnvironment;
  public position: IPosition;

  constructor() {
    this.position = {
      orientation: -1,
      x: -1,
      y: -1
    };
  }

  public setEnvironment(environment: IEnvironment) {
    this.environment = environment;
  }

  public place(position: IPosition) {
    const validPos = this.environment.hasSurfaceAtPos(position);

    if (validPos) {
      this.position = position;
    }

    return validPos;
  }

  public report() {
    if (Object.values(this.position).some(coordinate => coordinate < 0)) {
      throw new Error(ToyStrings.unsetEnvironment);
    }

    return this.position;
  }
}
