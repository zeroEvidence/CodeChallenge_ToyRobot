import { IBehavioursFactory } from "./interfaces/BehavioursFactory.interface";
import { MoveController } from "./move/MoveController";
import { OrientationController } from "./orientation/OrientationController";

export abstract class BaseBehavioursFactory implements IBehavioursFactory {
  constructor() {
    //
  }

  public createMoveAbility() {
    return new MoveController();
  }

  public createOrientationAbility() {
    return new OrientationController();
  }
}
