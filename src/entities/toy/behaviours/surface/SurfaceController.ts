import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { IToy } from "../../interfaces/Toy.interface";
import { ISurfaceController } from "./interfaces/SurfaceController.interface";

/**
 * SurfaceController gives a toy the ability to be applied to a surface.
 *
 * @export
 * @class SurfaceController
 * @extends {BaseController}
 */
export class SurfaceController<
  T extends IToy = IToy,
  S extends ISurface = ISurface
> implements ISurfaceController<S> {
  constructor() {}

  public setSurface(this: IToy, surface: S): void {
    this.surface = surface;
  }
}
