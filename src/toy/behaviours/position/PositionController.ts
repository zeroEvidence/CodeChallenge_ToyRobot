import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { IToy } from "../../interfaces/Toy.interface";
import { ControllerBase } from "../BaseController";
import { ISurfaceController } from "./interfaces/PositionController.interface";

/**
 * SurfaceController gives a toy the ability to move themselves.
 *
 * SurfaceController is toy specific implementation of this class WILL
 * throw errors.
 *
 * SurfaceController is here for posterity, in the future we may want to
 * define default behaviours or apply this behaviour on a large subset of toys,
 * but for now this SurfaceController exists to prevent future developers
 * from rewriting an SurfaceController. SurfaceController was first written for
 * the Robot toy.
 *
 * @export
 * @class SurfaceController
 * @extends {ControllerBase}
 */
export class SurfaceController<T extends ISurface> extends ControllerBase
  implements ISurfaceController<T> {
  constructor(protected toy: IToy) {
    super(toy);
  }

  public setSurface(surface: T): void {
    this.toy.surface = surface;
  }
}
