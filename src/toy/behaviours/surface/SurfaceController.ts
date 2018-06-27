import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { IToySurfaceMountable } from "../../interfaces/ToySurfaceMountable.interface";
import { BaseController } from "../BaseController";
import { ISurfaceController } from "./interfaces/SurfaceController.interface";

/**
 * SurfaceController gives a toy the ability to be applied to a surface.
 *
 * @export
 * @class SurfaceController
 * @extends {BaseController}
 */
export class SurfaceController<T extends ISurface = ISurface>
  extends BaseController<IToySurfaceMountable>
  implements ISurfaceController<T> {
  constructor(toy: IToySurfaceMountable<T>) {
    super(toy);
  }

  public setSurface(surface: T): void {
    this.toy.surface = surface;
  }
}
