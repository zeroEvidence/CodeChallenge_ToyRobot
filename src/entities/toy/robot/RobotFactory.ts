import { ToyRules } from "../../configs/rules/ToyRules";
import { IToyConfig } from "../interfaces/ToyConfig.interface";
import { IToyFactory } from "../interfaces/ToyFactory.interface";
import { ToyFactoryBase } from "../ToyFactoryBase";
import { RobotBehavioursFactory } from "./behaviours/RobotBehaviorsFactory";
import { IRobot } from "./interfaces/Robot.interface";
import { Robot } from "./Robot";

/**
 * RobotFactory produces toy robots from configuration objects.
 *
 * @export
 * @class RobotFactory
 * @extends {ToyFactoryBase}
 * @implements {IToyFactory<IRobot>}
 */
export class RobotFactory extends ToyFactoryBase
  implements IToyFactory<IRobot> {
  constructor(private toyBehaviours = new RobotBehavioursFactory()) {
    super();
  }

  /**
   * createToy takes a configuration and applies the respective methods from
   * the controller objects to a blank Robot.
   *
   * @param {IToyConfig} toyConfig
   * @returns {IRobot}
   * @memberof RobotFactory
   */
  public createToy(toyConfig: IToyConfig): IRobot {
    const toy: IRobot = new Robot(toyConfig.strings, toyConfig.type);
    const behaviours = [];
    let i = toyConfig.rules.length;

    while (i--) {
      switch (toyConfig.rules[i]) {
        case ToyRules.isMoveable:
          behaviours.push(this.toyBehaviours.createMoveController());
          break;

        case ToyRules.isOrientable:
          behaviours.push(this.toyBehaviours.createOrientationController());
          break;

        case ToyRules.isPositionable:
          behaviours.push(this.toyBehaviours.createPositionController());
          break;

        case ToyRules.isReportable:
          behaviours.push(this.toyBehaviours.createReportController());
          break;

        case ToyRules.isSurfaceMountable:
          behaviours.push(this.toyBehaviours.createSurfaceController());
          break;
      }
    }

    this.applyBehaviours(toy, behaviours);

    return toy;
  }
}
