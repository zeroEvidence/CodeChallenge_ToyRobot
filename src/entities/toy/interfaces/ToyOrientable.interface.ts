import { IToy } from "./Toy.interface";

/**
 * IToyOrientable is an interface for toys that are orientable
 *
 * @export
 * @interface IToyOrientable
 */
export interface IToyOrientable extends IToy {
  left(): void;
  right(): void;
  changeOrientation?(amount: number): void;
}
