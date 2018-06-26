import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { IToySurfaceMountable } from "../../interfaces/ToySurfaceMountable.interface";
import { ControllerBase } from "../BaseController";
import { ISurfaceController } from "./interfaces/SurfaceController.interface";

/**
 * SurfaceController gives a toy the ability to be applied to a surface.
 *
 * @export
 * @class SurfaceController
 * @extends {ControllerBase}
 */
export class SurfaceController<T extends ISurface = ISurface>
  extends ControllerBase
  implements ISurfaceController<T> {
  constructor(protected toy: IToySurfaceMountable<T>) {
    super(toy);
  }

  public setSurface(surface: T): void {
    this.toy.surface = surface;
  }
}
