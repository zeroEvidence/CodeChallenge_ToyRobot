import { ISurface } from "../../src/surface/interfaces/Surface.interface";
import { Table } from "../../src/surface/table/Table";

describe("Table", () => {
  it("Should be able to be instantiated", () => {
    return expect(new Table()).toBeInstanceOf(Object);
  });

  it("Should default set the constructor arguments, length, to 5", () => {
    return expect(new Table().length).toEqual(5);
  });

  it("Should default set the constructor arguments, width, to 5", () => {
    return expect(new Table().width).toEqual(5);
  });

  it("Should set constructor arguments length", () => {
    return expect(new Table(10).length).toEqual(10);
  });

  it("Should set constructor arguments width", () => {
    return expect(new Table(void 0, 10).width).toEqual(10);
  });

  describe("Behaviours", () => {
    let table: ISurface;

    beforeEach(() => {
      table = new Table();
    });

    describe("hasSurfaceAtPos", () => {
      it("Should be true at position 0,0", () => {
        return expect(
          table.hasSurfaceAtPos({ x: 0, y: 0, orientation: -1 })
        ).toEqual(true);
      });

      it("Should be true at position 0,4", () => {
        return expect(
          table.hasSurfaceAtPos({ x: 0, y: 4, orientation: -1 })
        ).toEqual(true);
      });

      it("Should be true at position 4,0", () => {
        return expect(
          table.hasSurfaceAtPos({ x: 4, y: 0, orientation: -1 })
        ).toEqual(true);
      });

      it("Should be true at position 4,4", () => {
        return expect(
          table.hasSurfaceAtPos({ x: 4, y: 4, orientation: -1 })
        ).toEqual(true);
      });

      it("Should be false at position -1,0", () => {
        return expect(
          table.hasSurfaceAtPos({ x: -1, y: 0, orientation: -1 })
        ).toEqual(false);
      });

      it("Should be false at position 0,-1", () => {
        return expect(
          table.hasSurfaceAtPos({ x: 0, y: -1, orientation: -1 })
        ).toEqual(false);
      });

      it("Should be false at position 5,0", () => {
        return expect(
          table.hasSurfaceAtPos({ x: 5, y: 0, orientation: -1 })
        ).toEqual(false);
      });

      it("Should be false at position 0,5", () => {
        return expect(
          table.hasSurfaceAtPos({ x: 0, y: 5, orientation: -1 })
        ).toEqual(false);
      });
    });
  });
});
