import Vorpal = require("vorpal");
import { ISurface } from "../entities/surface/interfaces/Surface.interface";
import { IToy } from "../entities/toy/interfaces/Toy.interface";
import { ICommand } from "../interfaces/Command.interface";
import { AppCLI } from "./cli/AppCLI";
import { StringsFactory } from "./cli/strings/StringsFactory";
import { ToyAdapterFactory } from "./cli/toyAdapters/ToyAdapterFactory";
import { IUserInterfaceAdapterFactory } from "./interfaces/UserInterfaceAdapterFactory.interface";
import { UserInterfaceType } from "./UserInterfaceType";

export class UserInterfaceAdapterFactory
  implements IUserInterfaceAdapterFactory {
  constructor(
    private toyAdapterFactory = new ToyAdapterFactory(),
    private appStringsFactory = new StringsFactory()
  ) {}

  public createUIAdapter(UIType: number, toy: IToy, surface: ISurface) {
    let uiAdapter: ICommand;

    switch (UIType) {
      case UserInterfaceType.CLI:
        uiAdapter = this.createCLIAdapter(toy, surface);
        break;

      default:
        break;
    }

    return uiAdapter;
  }

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
