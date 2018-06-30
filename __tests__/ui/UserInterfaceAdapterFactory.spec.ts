import { ToyType } from "../../src/entities/configs/toyType/ToyType";
import { UserInterfaceAdapterFactory } from "../../src/ui/UserInterfaceAdapterFactory";
import { UserInterfaceType } from "../../src/ui/UserInterfaceType";

describe("UserInterfaceAdapterFactory", () => {
  describe("createUIAdapter", () => {
    it("Should get UIAdapter", () => {
      expect(
        new UserInterfaceAdapterFactory().createUIAdapter(
          UserInterfaceType.CLI,
          {
            type: ToyType.StandardRobotV1
          } as any,
          {} as any
        )
      ).toHaveProperty("execute");
    });

    it("Should throw an error if given an unknown UIType", () => {
      expect(() => {
        new UserInterfaceAdapterFactory().createUIAdapter(
          -1,
          {
            type: ToyType.StandardRobotV1
          } as any,
          {} as any
        );
      }).toThrow("Unknown user interface type: '-1'.");
    });
  });
});
