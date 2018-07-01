import { IPosition } from "../../toy/position/interfaces/Position.interface";

/**
 * ISurface is the interface that defines a surface object
 *
 * @export
 * @interface ISurface
 */
export interface ISurface {
  readonly length: number;
  readonly width: number;

  hasSurfaceAtPos(position: IPosition): boolean;
}
