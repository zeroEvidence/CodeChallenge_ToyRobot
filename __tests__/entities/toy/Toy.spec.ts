import { InfiniteEnvironment } from "../../mockObjects/InfiniteEnvironment";
import { TestToy } from "./TestToy";

describe("Toy", () => {
  describe("setSurface", () => {
    it("Should set the surface", () => {
      const testToy = new TestToy();
      testToy.setSurface(new InfiniteEnvironment());

      expect(testToy.surface).toHaveProperty("hasSurfaceAtPos");
    });
  });

  describe("setPosition", () => {
    it("Should set the position", () => {
      const testToy = new TestToy();
      testToy.setPosition({ x: 0, y: 0 });

      expect(testToy.position).toHaveProperty("x", 0);
    });
  });

  describe("setOrientation", () => {
    it("Should set the orientation", () => {
      const testToy = new TestToy();
      testToy.setOrientation({ orientation: 0 });

      expect(testToy.orientation).toHaveProperty("orientation", 0);
    });
  });

  describe("validateOrientation", () => {
    it("Should validate the orientation as true", () => {
      const testToy = new TestToy();

      expect(testToy.validateOrientation({ orientation: 0 })).toEqual(true);
    });
  });

  describe("validatePosition", () => {
    it("Should validate the position as true", () => {
      const testToy = new TestToy();

      expect(testToy.validatePosition({ x: 0, y: 0 })).toEqual(true);
    });
  });

  describe("validatePlacement", () => {
    it("Should validate the position as true", () => {
      const testToy = new TestToy();
      testToy.setSurface(new InfiniteEnvironment());
      testToy.setPosition({ x: 0, y: 0 });
      testToy.setOrientation({ orientation: 0 });

      expect(testToy.validatePlacement()).toEqual(true);
    });

    it("Should throw an error if it validates the position as false", () => {
      const testToy = new TestToy();
      testToy.setSurface(new InfiniteEnvironment());
      testToy.setPosition({ x: 0, y: -1 });
      testToy.setOrientation({ orientation: 0 });

      expect(() => {
        testToy.validatePlacement();
      }).toThrow("Environment is not set");
    });
  });
});
