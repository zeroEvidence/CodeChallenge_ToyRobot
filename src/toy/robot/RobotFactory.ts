import { IToyConfig } from "../interfaces/ToyConfig.interface";
import { IToyFactory } from "../interfaces/ToyFactory.interface";
import { ToyRules } from "../ToyRules";
import { RobotBehavioursFactory } from "./behaviours/RobotBehaviorsFactory";
import { IRobot } from "./interfaces/Robot.interface";
import { Robot } from "./Robot";

export class RobotFactory implements IToyFactory<IRobot> {
  constructor(private toyBehaviours = new RobotBehavioursFactory()) {
    //
  }

  public createToy(toyConfig: IToyConfig) {
    const toy = new Robot();
    let i = toyConfig.length;

    while (i--) {
      switch (toyConfig[i]) {
        case ToyRules.isMoveable:
          const moveController = this.toyBehaviours.createMoveController();
          toy.move = moveController.move;
          break;

        case ToyRules.isOrientable:
          const orientationController = this.toyBehaviours.createOrientationController();
          toy.left = orientationController.left;
          toy.right = orientationController.right;
          toy.validateOrientation = orientationController.validateOrientation;
          toy.changeOrientation = orientationController.changeOrientation;
          break;

        case ToyRules.isPositionable:
          const positionController = this.toyBehaviours.createPositionController();
          toy.place = positionController.place;
          toy.setPosition = positionController.setPosition;
          toy.validatePosition = positionController.validatePosition;
          break;

        case ToyRules.isReportable:
          const reportController = this.toyBehaviours.createReportController();
          toy.report = reportController.report;
          break;

        case ToyRules.isSurfaceMountable:
          const surfaceController = this.toyBehaviours.createSurfaceController();
          toy.setSurface = surfaceController.setSurface;
          break;

        default:
          break;
      }
    }

    return toy;
  }
}
