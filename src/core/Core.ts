import { EntityFactory } from "../entities/EntityFactory";
import { ICommand } from "../interfaces/Command.interface";
import { UserInterfaceAdapterFactory } from "../ui/UserInterfaceAdapterFactory";
import { UserInterfaceType } from "../ui/UserInterfaceType";

export class Core implements ICommand {
  constructor(
    private entityFactory = new EntityFactory(),
    private uiAdapterFactory = new UserInterfaceAdapterFactory()
  ) {}

  public execute() {
    this.toyRobotOnFiveByFiveTableCLI().execute();
  }

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
