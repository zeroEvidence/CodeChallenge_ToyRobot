import { ToyType } from "../../../entities/configs/toyType/ToyType";
import { IToy } from "../../../entities/toy/interfaces/Toy.interface";
import { IApplicationStrings } from "./interfaces/ApplicationStrings.interface";
import { RobotApplicationStrings } from "./RobotApplicationStrings";

/**
 * ApplicationStringsFactory is a factory that creates the application strings
 * depending on the type of toy object is passed into it.
 *
 * @export
 * @class ApplicationStringsFactory
 */
export class ApplicationStringsFactory {
  constructor() {
    //
  }

  public createApplicationStrings(toy: IToy) {
    let applicationStrings: IApplicationStrings;

    switch (toy.type) {
      case ToyType.StandardRobotV1:
        applicationStrings = RobotApplicationStrings;
        break;

      default:
        throw new Error(
          `Application strings not found for toy type: ${toy.type}`
        );
    }

    return applicationStrings;
  }
}
