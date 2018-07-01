/**
 * ICommand defines a specification for all objects that are executable.
 *
 * @export
 * @interface ICommand
 */
export interface ICommand {
  execute: () => void;
}
