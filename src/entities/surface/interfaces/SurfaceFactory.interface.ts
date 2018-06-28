import { ISurface } from "./Surface.interface";
import { ISurfaceConfig } from "./SurfaceConfig.interface";

export interface ISurfaceFactory<T extends ISurface = ISurface> {
  createSurface(surfaceConfig: ISurfaceConfig): T;
}
