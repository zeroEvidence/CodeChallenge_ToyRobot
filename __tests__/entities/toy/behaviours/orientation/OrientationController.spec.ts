import { OrientationController } from "../../../../../src/entities/toy/behaviours/orientation/OrientationController";

describe("OrientationController", () => {
  describe("left", () => {
    it("Should throw an error", () => {
      expect(() => {
        new OrientationController().left();
      }).toThrow("Method not implemented");
    });
  });

  describe("right", () => {
    it("Should throw an error", () => {
      expect(() => {
        new OrientationController().right();
      }).toThrow("Method not implemented");
    });
  });
});
