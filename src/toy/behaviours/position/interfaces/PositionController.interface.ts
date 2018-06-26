import { ISurface } from "../../../../surface/interfaces/Surface.interface";

export interface ISurfaceController<T extends ISurface> {
  setSurface(surface: T): void;
}
