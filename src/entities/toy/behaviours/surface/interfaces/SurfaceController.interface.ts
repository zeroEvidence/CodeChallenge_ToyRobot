import { ISurface } from "../../../../surface/interfaces/Surface.interface";

/**
 * ISurfaceController defines a specification for all SurfaceController classes.
 *
 * @export
 * @interface ISurfaceController
 * @template T
 */
export interface ISurfaceController<T extends ISurface = ISurface> {
  setSurface(surface: T): void;
}
