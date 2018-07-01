/**
 * ToyRules specifies the available rules / behaviours for toy entities.
 *
 * these match up with the controllers in the the src/entities/toy/behaviours
 * directory.
 *
 * @export
 * @enum {number}
 */
export enum ToyRules {
  isSurfaceMountable,
  isReportable,
  isPositionable,
  isOrientable,
  isMoveable
}
