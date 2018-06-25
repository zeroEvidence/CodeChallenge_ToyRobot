import { MoveOneUnitController } from "../../behaviours/move/MoveOneUnitController";
import { BehavioursFactory } from "../../behaviours/ToyBehavioursFactory";

export class RobotBehavioursFactory extends BehavioursFactory {
  constructor() {
    super();
    //
  }

  public createMoveAbility() {
    return new MoveOneUnitController();
  }
}
