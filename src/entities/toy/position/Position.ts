import { IPosition } from "./interfaces/Position.interface";

/**
 * Position provides a blank Position data object.
 *
 * @export
 * @class Position
 * @implements {IPosition}
 */
export class Position implements IPosition {
  constructor(public x = -1, public y = -1) {}
}
