import { IToy } from "../../interfaces/Toy.interface";
import { ControllerBase } from "../BaseController";
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
 * @extends {ControllerBase}
 */
export class OrientationController extends ControllerBase
  implements IOrientationController {
  constructor(toy: IToy) {
    super(toy);
  }

  public left() {
    throw Error("Method not implemented.");
  }

  public right() {
    throw Error("Method not implemented.");
  }

  // The default is all toys can have any orientation
  public validateOrientation() {
    return true;
  }

  protected changeOrientation(amount: number) {
    throw Error("Method not implemented.");
  }
}
