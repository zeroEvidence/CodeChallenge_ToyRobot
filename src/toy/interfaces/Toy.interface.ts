import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IPosition } from "../behaviours/orientation/interfaces/Position.interface";

export interface IToy {
  position: IPosition;
  surface: ISurface;

  setSurface(environment: ISurface): void;
  place(position: IPosition): boolean;
  report(): IPosition;
  move(): boolean;
  left(): void;
  right(): void;
}
