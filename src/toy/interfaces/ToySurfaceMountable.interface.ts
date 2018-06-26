import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IToy } from "./Toy.interface";

/**
 * IToySurfaceMountable is an interface for toy that can be bound to a surface
 *
 * @export
 * @interface IToySurfaceMountable
 * @extends {IToy}
 */
export interface IToySurfaceMountable<T extends ISurface> extends IToy {
  surface: T;
  setSurface(environment: T): void;
}
