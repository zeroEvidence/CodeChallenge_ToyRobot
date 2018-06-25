import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IPosition } from "./Position.interface";

export interface IToy {
  position: IPosition;
  surface: ISurface;

  setSurface(environment: ISurface): void;
  setPosition(position: IPosition): boolean;
  place(position: IPosition): boolean;
  isPlaced(): boolean;
  report(): IPosition;
  move(): boolean;
  left(): void;
  right(): void;
}
