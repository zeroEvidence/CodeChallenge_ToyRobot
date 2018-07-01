import Vorpal = require("vorpal");
import { ISurface } from "../entities/surface/interfaces/Surface.interface";
import { IToy } from "../entities/toy/interfaces/Toy.interface";
import { ICommand } from "../interfaces/Command.interface";
import { AppCLI } from "./cli/AppCLI";
import { ApplicationStringsFactory } from "./cli/strings/ApplicationStringsFactory";
import { ToyAdapterFactory } from "./cli/toyAdapters/ToyAdapterFactory";
import { IUserInterfaceAdapterFactory } from "./interfaces/UserInterfaceAdapterFactory.interface";
import { UserInterfaceType } from "./UserInterfaceType";

/**
 * UserInterfaceAdapterFactory is a factory that creates user interface
 * adapters based on UIType that's passed in.
 *
 * @export
 * @class UserInterfaceAdapterFactory
 * @implements {IUserInterfaceAdapterFactory}
 */
export class UserInterfaceAdapterFactory
  implements IUserInterfaceAdapterFactory {
  constructor(
    private toyAdapterFactory = new ToyAdapterFactory(),
    private appStringsFactory = new ApplicationStringsFactory()
  ) {}

  /**
   * createUIAdapter creates the adapter used to talk between the interface
   * provider and the toy and surface based on the UI type and the type of toy
   * and surface.
   *
   * @param {number} UIType
   * @param {IToy} toy
   * @param {ISurface} surface
   * @returns
   * @memberof UserInterfaceAdapterFactory
   */
  public createUIAdapter(UIType: number, toy: IToy, surface: ISurface) {
    let uiAdapter: ICommand;

    switch (UIType) {
      case UserInterfaceType.CLI:
        uiAdapter = this.createCLIAdapter(toy, surface);
        break;

      default:
        throw new Error(`Unknown user interface type: '${UIType}'.`);
    }

    return uiAdapter;
  }

  /**
   * createCLIAdapter creates the adapter object used to talk between the
   * interface provider and the toy and surface.
   *
   * @private
   * @param {IToy} toy
   * @param {ISurface} surface
   * @returns {ICommand}
   * @memberof UserInterfaceAdapterFactory
   */
  private createCLIAdapter(toy: IToy, surface: ISurface): ICommand {
    const vorpal = new Vorpal();
    const appStrings = this.appStringsFactory.createApplicationStrings(toy);
    const toyAdapter = this.toyAdapterFactory.createToyAdapter(
      toy,
      surface,
      appStrings,
      vorpal
    );

    return new AppCLI(vorpal, toyAdapter, appStrings);
  }
}
