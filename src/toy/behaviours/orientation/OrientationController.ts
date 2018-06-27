import { IToyPositional } from "../../interfaces/ToyPositional.interface";
import { IPosition } from "../../position/interfaces/Position.interface";
import { BaseController } from "../BaseController";
import { IOrientationController } from "./interfaces/OrientationController.interface";

/**
 * OrientationController gives a toy the ability to reorient themselves.
 *
 * OrientationController is toy specific implementation of this class WILL
 * throw errors.
 *
 * OrientationController is here for posterity, in the future we may want to
 * define default behaviours or apply this behaviour on a large subset of toys,
 * but for now this OrientationController exists to prevent future developers
 * from rewriting an OrientationController. OrientationController was first
 * written for the Robot toy.
 *
 * @export
 * @class OrientationController
 * @extends {BaseController}
 */
export class OrientationController<T extends IPosition = IPosition>
  extends BaseController
  implements IOrientationController {
  constructor(toy: IToyPositional) {
    super(toy);
  }

  public left() {
    throw Error("Method not implemented.");
  }

  public right() {
    throw Error("Method not implemented.");
  }

  // The default is all toys can have any orientation
  public validateOrientation(position: T) {
    return true;
  }
}
