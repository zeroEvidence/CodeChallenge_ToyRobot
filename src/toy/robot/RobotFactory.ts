import { IToyConfig } from "../interfaces/ToyConfig.interface";
import { IToyFactory } from "../interfaces/ToyFactory.interface";
import { ToyFactoryBase } from "../ToyFactoryBase";
import { ToyRules } from "../ToyRules";
import { RobotBehavioursFactory } from "./behaviours/RobotBehaviorsFactory";
import { IRobot } from "./interfaces/Robot.interface";
import { Robot } from "./Robot";

export class RobotFactory extends ToyFactoryBase
  implements IToyFactory<IRobot> {
  constructor(private toyBehaviours = new RobotBehavioursFactory()) {
    super();
  }

  public createToy(toyConfig: IToyConfig) {
    let toy = new Robot();
    let i = toyConfig.length;

    while (i--) {
      switch (toyConfig[i]) {
        case ToyRules.isMoveable:
          this.applyBehaviours(toy, this.toyBehaviours.createMoveController());
          break;

        case ToyRules.isOrientable:
          this.applyBehaviours(
            toy,
            this.toyBehaviours.createOrientationController()
          );
          break;

        case ToyRules.isPositionable:
          this.applyBehaviours(
            toy,
            this.toyBehaviours.createPositionController()
          );
          break;

        case ToyRules.isReportable:
          this.applyBehaviours(
            toy,
            this.toyBehaviours.createReportController()
          );
          break;

        case ToyRules.isSurfaceMountable:
          this.applyBehaviours(
            toy,
            this.toyBehaviours.createSurfaceController()
          );
          break;
      }
    }

    return toy;
  }
}
