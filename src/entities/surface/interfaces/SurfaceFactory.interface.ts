import { ISurface } from "./Surface.interface";
import { ISurfaceConfig } from "./SurfaceConfig.interface";

/**
 * ISurfaceFactory is an interface that defines an abstract factory that creates
 * surface objects.
 *
 * @export
 * @interface ISurfaceFactory
 * @template T
 */
export interface ISurfaceFactory<T extends ISurface = ISurface> {
  createSurface(surfaceConfig: ISurfaceConfig): T;
}
