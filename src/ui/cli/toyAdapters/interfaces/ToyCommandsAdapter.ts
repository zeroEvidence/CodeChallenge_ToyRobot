/**
 * IToyCommandsAdapter defines a specification for objects that provides vorpal
 * commands and links them with toy behaviours.
 *
 * @export
 * @interface IToyCommandsAdapter
 */
export interface IToyCommandsAdapter {
  beforeExec(): void;
  afterExec(): void;
}
