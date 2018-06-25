import { BaseBehavioursFactory } from "../../behaviours/BehavioursFactory";
import { IBehavioursFactory } from "../../behaviours/interfaces/BehavioursFactory.interface";
import { MoveOneUnitController } from "./move/MoveOneUnitController";

export class RobotBehavioursFactory extends BaseBehavioursFactory
  implements IBehavioursFactory {
  constructor() {
    super();
  }

  public createMoveAbility() {
    return new MoveOneUnitController();
  }
}
