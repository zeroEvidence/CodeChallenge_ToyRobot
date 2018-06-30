import { ToyType } from "../../../../src/entities/configs/toyType/ToyType";
import { ToyAdapterFactory } from "../../../../src/ui/cli/toyAdapters/ToyAdapterFactory";

describe("ToyAdapterFactory", () => {
  describe("createToyAdapter", () => {
    it("Should produce an object with .beforeExec()", () => {
      expect(
        new ToyAdapterFactory().createToyAdapter(
          { type: ToyType.StandardRobotV1 } as any,
          {} as any,
          {} as any,
          {} as any
        )
      ).toHaveProperty("beforeExec");
    });

    it("Should produce an object with .afterExec()", () => {
      expect(
        new ToyAdapterFactory().createToyAdapter(
          { type: ToyType.StandardRobotV1 } as any,
          {} as any,
          {} as any,
          {} as any
        )
      ).toHaveProperty("afterExec");
    });

    it("Should throw an error if it can't find an adapter", () => {
      expect(() => {
        new ToyAdapterFactory().createToyAdapter(
          { type: -1 } as any,
          {} as any,
          {} as any,
          {} as any
        );
      }).toThrowError("Toy CLI adapter not found for toy type: -1");
    });
  });
});
