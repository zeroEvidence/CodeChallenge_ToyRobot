import { BaseBehavioursFactory } from "../../behaviours/BehavioursFactory";
import { IBehavioursFactory } from "../../behaviours/interfaces/BehavioursFactory.interface";
import { MoveOneUnitController } from "./move/MoveOneUnitController";
import { NESWOrientationController } from "./orientation/NESWOrientationController";
import { ReportPositionController } from "./report/ReportPositionController";

export class RobotBehavioursFactory extends BaseBehavioursFactory
  implements IBehavioursFactory {
  constructor() {
    super();
  }

  public createMoveController() {
    return new MoveOneUnitController();
  }

  public createOrientationController() {
    return new NESWOrientationController();
  }

  public createReportController() {
    return new ReportPositionController();
  }
}
