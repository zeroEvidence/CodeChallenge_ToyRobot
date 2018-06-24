import { IEnvironment } from "./Environment.interface";
import { IPosition } from "./Position.interface";

export interface IToy {
  position: IPosition;
  environment: IEnvironment;
  setEnvironment(environment: IEnvironment): void;
  place(position: IPosition): boolean;
}
