import { ReportController } from "../../../../../src/entities/toy/behaviours/report/ReportController";

describe("ReportController", () => {
  describe("report", () => {
    it("Should throw an error", () => {
      expect(() => {
        new ReportController().report();
      }).toThrow("Method not implemented");
    });
  });
});
