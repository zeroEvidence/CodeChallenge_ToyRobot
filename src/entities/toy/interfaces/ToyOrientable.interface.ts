import { IToy } from "./Toy.interface";

/**
 * IToyOrientable is a specification for toys that are orientable
 *
 * @export
 * @interface IToyOrientable
 */
export interface IToyOrientable extends IToy {
  left(): void;
  right(): void;
  changeOrientation?(amount: number): void;
}
