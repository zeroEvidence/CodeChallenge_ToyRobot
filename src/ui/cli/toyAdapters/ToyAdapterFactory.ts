import Vorpal = require("vorpal");
import { ToyType } from "../../../entities/configs/toyType/ToyType";
import { ISurface } from "../../../entities/surface/interfaces/Surface.interface";
import { IToy } from "../../../entities/toy/interfaces/Toy.interface";
import { IRobot } from "../../../entities/toy/robot/interfaces/Robot.interface";
import { IApplicationStrings } from "../strings/interfaces/ApplicationStrings.interface";
import { IToyCommandsAdapter } from "./interfaces/ToyCommandsAdapter";
import { RobotCommandsAdapter } from "./robot/RobotCommandsAdapter";

export class ToyAdapterFactory {
  constructor() {
    //
  }

  public createToyAdapter(
    toy: IToy,
    surface: ISurface,
    appStrings: IApplicationStrings,
    vorpal: Vorpal
  ) {
    let toyAdapter: IToyCommandsAdapter;

    switch (toy.type) {
      case ToyType.StandardRobotV1:
        toyAdapter = new RobotCommandsAdapter(
          vorpal,
          toy as IRobot,
          surface,
          appStrings
        );
        break;

      default:
        throw new Error(`Toy CLI adapter not found for toy type: ${toy.type}`);
    }

    return toyAdapter;
  }
}
