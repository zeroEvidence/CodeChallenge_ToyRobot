import { IMoveController } from "../move/interfaces/MoveController.interface";
import { IOrientationController } from "../orientation/interfaces/OrientationController.interface";
import { IPositionController } from "../position/interfaces/PositionController.interface";
import { IReportController } from "../report/interfaces/ReportController.interface";
import { ISurfaceController } from "../surface/interfaces/SurfaceController.interface";

/**
 * IBehavioursFactory is an abstract factory used for defining a behaviours
 * factory for a toy entity.
 *
 * @export
 * @interface IBehavioursFactory
 */
export interface IBehavioursFactory {
  createMoveController(): IMoveController;
  createOrientationController(): IOrientationController;
  createPositionController(): IPositionController;
  createReportController(): IReportController;
  createSurfaceController(): ISurfaceController;
}
