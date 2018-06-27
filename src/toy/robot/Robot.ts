import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IMoveController } from "../behaviours/move/interfaces/MoveController.interface";
import { IOrientationController } from "../behaviours/orientation/interfaces/OrientationController.interface";
import { IPositionController } from "../behaviours/position/interfaces/PositionController.interface";
import { IReportController } from "../behaviours/report/interfaces/ReportController.interface";
import { ISurfaceController } from "../behaviours/surface/interfaces/SurfaceController.interface";
import { IPosition } from "../position/interfaces/Position.interface";
import { Toy } from "../Toy";
import { RobotBehavioursFactory } from "./behaviours/RobotBehaviorsFactory";
import { IRobot } from "./interfaces/Robot.interface";

export class Robot extends Toy implements IRobot {
  private moveController: IMoveController;
  private orientationController: IOrientationController;
  private positionController: IPositionController;
  private reportController: IReportController;
  private surfaceController: ISurfaceController;

  constructor(private behaviourFactory = new RobotBehavioursFactory()) {
    super();

    this.moveController = behaviourFactory.createMoveController(this);
    this.orientationController = behaviourFactory.createOrientationController(
      this
    );
    this.positionController = behaviourFactory.createPositionController(this);
    this.reportController = behaviourFactory.createReportController(this);
    this.surfaceController = behaviourFactory.createSurfaceController(this);
  }

  public setSurface(surface: ISurface) {
    return this.surfaceController.setSurface(surface);
  }

  public place(position: IPosition): boolean {
    return this.positionController.place(position);
  }

  public report() {
    return this.reportController.report();
  }

  public move(): boolean {
    return this.moveController.move();
  }

  public left() {
    return this.orientationController.left();
  }

  public right() {
    return this.orientationController.right();
  }

  public isPlaced(): boolean {
    return this.positionController.isPlaced();
  }

  public setPosition(position: IPosition): boolean {
    return this.positionController.setPosition(position);
  }

  public validateOrientation(position: IPosition): boolean {
    return this.orientationController.validateOrientation(position);
  }
}
