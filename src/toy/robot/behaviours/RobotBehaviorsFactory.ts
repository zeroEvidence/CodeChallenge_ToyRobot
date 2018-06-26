import { BaseBehavioursFactory } from "../../behaviours/BehavioursFactory";
import { IBehavioursFactory } from "../../behaviours/interfaces/BehavioursFactory.interface";
import { IMoveController } from "../../behaviours/move/interfaces/MoveController.interface";
import { IToyPositional } from "../../interfaces/ToyPositional.interface";
import { MoveOneUnitController } from "./move/MoveOneUnitController";
import { NESWOrientationController } from "./orientation/NESWOrientationController";

export class RobotBehavioursFactory extends BaseBehavioursFactory
  implements IBehavioursFactory {
  constructor() {
    super();
  }

  public createMoveController(toy: IToyPositional): IMoveController {
    return new MoveOneUnitController(toy);
  }

  public createOrientationController(toy: IToyPositional) {
    return new NESWOrientationController(toy);
  }

  public createReportController() {}
}
