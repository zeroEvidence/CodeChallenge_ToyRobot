import { IToyPositional } from "../../interfaces/ToyPositional.interface";
import { BaseController } from "../BaseController";
import { IMoveController } from "./interfaces/MoveController.interface";

/**
 * MoveController gives a toy the ability to move themselves.
 *
 * MoveController is toy specific implementation of this class WILL
 * throw errors.
 *
 * MoveController is here for posterity, in the future we may want to
 * define default behaviours or apply this behaviour on a large subset of toys,
 * but for now this MoveController exists to prevent future developers
 * from rewriting an MoveController. MoveController was first written for
 * the Robot toy.
 *
 * @export
 * @class MoveController
 * @extends {BaseController}
 */
export class MoveController extends BaseController implements IMoveController {
  constructor(protected toy: IToyPositional) {
    super(toy);
  }

  // By default toys do not move by themselves
  public move(): boolean {
    throw Error("Method not implemented.");
  }
}
