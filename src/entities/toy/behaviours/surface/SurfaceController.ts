import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { Toy } from "../../Toy";
import { ISurfaceController } from "./interfaces/SurfaceController.interface";

/**
 * SurfaceController gives a toy the ability to be applied to a surface.
 *
 * @export
 * @class SurfaceController
 * @extends {BaseController}
 */
export class SurfaceController<T extends ISurface = ISurface> extends Toy
  implements ISurfaceController<T> {
  constructor() {
    super();
  }

  public setSurface(surface: T): void {
    this.surface = surface;
  }
}
