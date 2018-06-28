import { IMoveController } from "../move/interfaces/MoveController.interface";
import { IOrientationController } from "../orientation/interfaces/OrientationController.interface";
import { IPositionController } from "../position/interfaces/PositionController.interface";
import { IReportController } from "../report/interfaces/ReportController.interface";
import { ISurfaceController } from "../surface/interfaces/SurfaceController.interface";

export interface IBehavioursFactory {
  createMoveController(): IMoveController;
  createOrientationController(): IOrientationController;
  createPositionController(): IPositionController;
  createReportController(): IReportController;
  createSurfaceController(): ISurfaceController;
}
