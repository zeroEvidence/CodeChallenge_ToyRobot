import { ISurface } from "../../../src/entities/surface/interfaces/Surface.interface";
import { TableFactory } from "../../../src/entities/surface/table/TableFactory";

describe("Table", () => {
  it("Should be able to be instantiated", () => {
    return expect(
      new TableFactory().createSurface({ length: 0, width: 0 })
    ).toBeInstanceOf(Object);
  });

  it("Should default set the constructor arguments, length, to 5", () => {
    return expect(
      new TableFactory().createSurface({ length: 5, width: 5 }).length
    ).toEqual(5);
  });

  it("Should default set the constructor arguments, width, to 5", () => {
    return expect(
      new TableFactory().createSurface({ length: 5, width: 5 }).width
    ).toEqual(5);
  });

  describe("Behaviours", () => {
    let table: ISurface;

    beforeEach(() => {
      table = new TableFactory().createSurface({ length: 5, width: 5 });
    });

    describe("hasSurfaceAtPos", () => {
      it("Should be true at position 0,0", () => {
        return expect(table.hasSurfaceAtPos({ x: 0, y: 0 })).toEqual(true);
      });

      it("Should be true at position 0,4", () => {
        return expect(table.hasSurfaceAtPos({ x: 0, y: 4 })).toEqual(true);
      });

      it("Should be true at position 4,0", () => {
        return expect(table.hasSurfaceAtPos({ x: 4, y: 0 })).toEqual(true);
      });

      it("Should be true at position 4,4", () => {
        return expect(table.hasSurfaceAtPos({ x: 4, y: 4 })).toEqual(true);
      });

      it("Should be false at position -1,0", () => {
        return expect(table.hasSurfaceAtPos({ x: -1, y: 0 })).toEqual(false);
      });

      it("Should be false at position 0,-1", () => {
        return expect(table.hasSurfaceAtPos({ x: 0, y: -1 })).toEqual(false);
      });

      it("Should be false at position 5,0", () => {
        return expect(table.hasSurfaceAtPos({ x: 5, y: 0 })).toEqual(false);
      });

      it("Should be false at position 0,5", () => {
        return expect(table.hasSurfaceAtPos({ x: 0, y: 5 })).toEqual(false);
      });
    });
  });
});
