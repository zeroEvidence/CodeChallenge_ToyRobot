import { IToy } from "../interfaces/Toy.interface";
import { IToyManipulatable } from "../interfaces/ToyManipulatable.interface";
import { IToySurfaceMountable } from "../interfaces/ToySurfaceMountable.interface";
import { IBehavioursFactory } from "./interfaces/BehavioursFactory.interface";
import { MoveController } from "./move/MoveController";
import { OrientationController } from "./orientation/OrientationController";
import { PositionController } from "./position/PositionController";
import { ReportController } from "./report/ReportController";
import { SurfaceController } from "./surface/SurfaceController";

export abstract class BaseBehavioursFactory implements IBehavioursFactory {
  constructor() {
    //
  }

  public createMoveController(toy: IToy) {
    return new MoveController(toy);
  }

  public createOrientationController(toy: IToy) {
    return new OrientationController(toy);
  }

  public createPositionController(toy: IToyManipulatable) {
    return new PositionController(toy);
  }

  public createReportController(toy: IToy) {
    return new ReportController(toy);
  }

  public createSurfaceController(toy: IToySurfaceMountable) {
    return new SurfaceController(toy);
  }
}
