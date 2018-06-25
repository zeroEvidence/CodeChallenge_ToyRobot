import { IMoveController } from "../move/interfaces/MoveController.interface";
import { IOrientationController } from "../orientation/interfaces/OrientationController.interface";

export interface IBehavioursFactory {
  createMoveAbility(): IMoveController;
  createOrientationAbility(): IOrientationController;
}
