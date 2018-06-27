import { IToyConfig } from "../interfaces/ToyConfig.interface";
import { ToyFactory } from "../interfaces/ToyFactory.interface";
import { ToyRules } from "../ToyRules";
import { RobotBehavioursFactory } from "./behaviours/RobotBehaviorsFactory";
import { IRobot } from "./interfaces/Robot.interface";

export class RobotFactory implements ToyFactory<IRobot> {
  constructor(private toyBehaviours = new RobotBehavioursFactory()) {
    //
  }

  public createToy(toyConfig: IToyConfig) {
    const newToy = {} as IRobot;
    let i = toyConfig.length;

    while (i--) {
      switch (toyConfig[i]) {
        case ToyRules.isMoveable:
          const moveController = this.toyBehaviours.createMoveController();
          newToy.move = moveController.move;
          break;

        case ToyRules.isOrientable:
          const orientationController = this.toyBehaviours.createOrientationController();
          newToy.left = orientationController.left;
          newToy.right = orientationController.right;
          newToy.validateOrientation =
            orientationController.validateOrientation;
          break;

        case ToyRules.isPositionable:
          const positionController = this.toyBehaviours.createPositionController();
          newToy.isPlacedFlag = false;
          newToy.position = {
            orientation: -1,
            x: -1,
            y: -1
          };
          newToy.place = positionController.place;
          newToy.isPlaced = positionController.isPlaced;
          newToy.setPosition = positionController.setPosition;
          newToy.validatePosition = positionController.validatePosition;
          newToy.validateOrientation = positionController.validatePosition;
          break;

        case ToyRules.isReportable:
          const reportController = this.toyBehaviours.createReportController();
          newToy.report = reportController.report;
          break;

        case ToyRules.isSurfaceMountable:
          const surfaceController = this.toyBehaviours.createSurfaceController();
          newToy.surface = undefined;
          newToy.setSurface = surfaceController.setSurface;
          break;

        default:
          break;
      }
    }

    return newToy;
  }
}
