import { IToy } from "../../interfaces/Toy.interface";
import { OrientationControllerBase } from "./OrientationControllerBase";

/**
 * Default orientation controller for toys.
 *
 * Methods are noops as toys do not orient themselves.
 *
 * @export
 * @class OrientationController
 * @extends {OrientationControllerBase}
 */
export class OrientationController extends OrientationControllerBase {
  constructor(toy: IToy) {
    super(toy);
  }

  public left() {}

  public right() {}

  protected changeOrientation(amount: number) {}
}
