import { MoveController } from "../../../../../src/entities/toy/behaviours/move/MoveController";

describe("MoveController", () => {
  describe("move", () => {
    it("Should throw an error", () => {
      expect(() => {
        new MoveController().move();
      }).toThrow("Method not implemented");
    });
  });
});
