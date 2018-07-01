import { EntityFactory } from "../entities/EntityFactory";
import { ICommand } from "../interfaces/Command.interface";
import { UserInterfaceAdapterFactory } from "../ui/UserInterfaceAdapterFactory";
import { UserInterfaceType } from "../ui/UserInterfaceType";

/**
 * Core is the heart of the software.
 *
 * it is responsible for the creation of entities, i,e Robot and Table, and the
 * user interface adapters.
 *
 * @export
 * @class Core
 * @implements {ICommand}
 */
export class Core implements ICommand {
  constructor(
    private entityFactory = new EntityFactory(),
    private uiAdapterFactory = new UserInterfaceAdapterFactory()
  ) {}

  public execute() {
    this.toyRobotOnFiveByFiveTableCLI().execute();
  }

  /**
   * toyRobotOnFiveByFiveTableCLI creates a CLI application with a 5x5 table
   * and robot.
   *
   * @private
   * @returns {ICommand}
   * @memberof Core
   */
  private toyRobotOnFiveByFiveTableCLI(): ICommand {
    const robot = this.entityFactory.createStandardRobot();
    const table = this.entityFactory.createFiveByFiveTable();

    return this.uiAdapterFactory.createUIAdapter(
      UserInterfaceType.CLI,
      robot,
      table
    );
  }
}
