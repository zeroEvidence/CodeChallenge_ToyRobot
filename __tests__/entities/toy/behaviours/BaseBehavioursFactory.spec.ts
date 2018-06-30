import { TestBaseBehavioursFactory } from "./BaseBehavioursFactory";

describe("BaseBehavioursFactory", () => {
  describe("createMoveController", () => {
    it("Should give back a MoveController", () => {
      expect(
        new TestBaseBehavioursFactory().createMoveController()
      ).toHaveProperty("move");
    });
  });

  describe("createOrientationController", () => {
    it("Should give back a MoveController", () => {
      expect(
        new TestBaseBehavioursFactory().createOrientationController()
      ).toHaveProperty("left");
    });
  });

  describe("createPositionController", () => {
    it("Should give back a PositionController", () => {
      expect(
        new TestBaseBehavioursFactory().createPositionController()
      ).toHaveProperty("place");
    });
  });

  describe("createReportController", () => {
    it("Should give back a ReportController", () => {
      expect(
        new TestBaseBehavioursFactory().createReportController()
      ).toHaveProperty("report");
    });
  });

  describe("createSurfaceController", () => {
    it("Should give back a SurfaceController", () => {
      expect(
        new TestBaseBehavioursFactory().createSurfaceController()
      ).toHaveProperty("setSurface");
    });
  });
});
