import { IToy } from "../../interfaces/Toy.interface";
import { IToyManipulatable } from "../../interfaces/ToyManipulatable.interface";
import { IToySurfaceMountable } from "../../interfaces/ToySurfaceMountable.interface";
import { IMoveController } from "../move/interfaces/MoveController.interface";
import { IOrientationController } from "../orientation/interfaces/OrientationController.interface";
import { IPositionController } from "../position/interfaces/PositionController.interface";
import { IReportController } from "../report/interfaces/ReportController.interface";
import { ISurfaceController } from "../surface/interfaces/SurfaceController.interface";

export interface IBehavioursFactory {
  createMoveController(toy: IToy): IMoveController;
  createOrientationController(toy: IToy): IOrientationController;
  createPositionController(toy: IToyManipulatable): IPositionController;
  createReportController(toy: IToy): IReportController;
  createSurfaceController(toy: IToySurfaceMountable): ISurfaceController;
}
