import { RobotConfigStandard } from "./configs/RobotConfigStandard";
import { TableFiveByFiveConfig } from "./configs/TableFiveByFiveConfig";
import { ISurface } from "./surface/interfaces/Surface.interface";
import { ISurfaceFactory } from "./surface/interfaces/SurfaceFactory.interface";
import { TableFactory } from "./surface/table/TableFactory";
import { IToyFactory } from "./toy/interfaces/ToyFactory.interface";
import { IRobot } from "./toy/robot/interfaces/Robot.interface";
import { RobotFactory } from "./toy/robot/RobotFactory";

/**
 * EntityFactory produces the available entity objects.
 *
 * @export
 * @class EntityFactory
 */
export class EntityFactory {
  constructor(
    private tableFactory: ISurfaceFactory<ISurface> = new TableFactory(),
    private robotFactory: IToyFactory<IRobot> = new RobotFactory()
  ) {
    //
  }

  public createFiveByFiveTable(): ISurface {
    return this.tableFactory.createSurface(TableFiveByFiveConfig);
  }

  public createStandardRobot(): IRobot {
    return this.robotFactory.createToy(RobotConfigStandard);
  }
}
