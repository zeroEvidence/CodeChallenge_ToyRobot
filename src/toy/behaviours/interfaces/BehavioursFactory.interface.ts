import { IMoveController } from "../move/interfaces/MoveController.interface";
import { IOrientationController } from "../orientation/interfaces/OrientationConstoller.interface";

export interface IBehavioursFactory {
  createMoveAbility(): IMoveController;
  createOrientationAbility(): IOrientationController;
}
