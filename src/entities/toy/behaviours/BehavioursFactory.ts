import { IBehavioursFactory } from "./interfaces/BehavioursFactory.interface";
import { MoveController } from "./move/MoveController";
import { OrientationController } from "./orientation/OrientationController";
import { PositionController } from "./position/PositionController";
import { ReportController } from "./report/ReportController";
import { SurfaceController } from "./surface/SurfaceController";

/**
 * BaseBehavioursFactory creates the default behaviours for a toy entity.
 *
 * WARNING: There are limited default behaviours, most of these controllers will
 * throw errors.
 *
 * @export
 * @abstract
 * @class BaseBehavioursFactory
 * @implements {IBehavioursFactory}
 */
export abstract class BaseBehavioursFactory implements IBehavioursFactory {
  constructor() {
    //
  }

  public createMoveController() {
    return new MoveController();
  }

  public createOrientationController() {
    return new OrientationController();
  }

  public createPositionController() {
    return new PositionController();
  }

  public createReportController() {
    return new ReportController();
  }

  public createSurfaceController() {
    return new SurfaceController();
  }
}
