import { MoveController } from "./move/MoveController";

export abstract class BehavioursFactory {
  constructor() {
    //
  }

  public createMoveAbility() {
    return new MoveController();
  }
}
