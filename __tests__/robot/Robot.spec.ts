describe("Robot", () => {
  it("Should be able to be instantiated", () => {
    return expect(new Robot()).toBeInstanceOf(Object);
  });

  it("Should have an initial position of -1, -1", () => {
    return expect(new Robot().position).toEqual({ x: -1, y: -1 });
  });

  it("Should have an initial default environment of Table", () => {
    return expect(new Robot().environment).toEqual(Table);
  });

  describe("Behaviours", () => {
    let robot: IRobot;
    let mockTable: any = {
      hasSurfaceAtCoords: () => true
    };

    beforeEach(() => {
      robot = new robot();
    });

    describe("place", () => {
      it("Should be true at position 0,0 N", () => {
        return expect(
          robot.place({ x: 0, y: 0, orientation: Orientation.north })
        ).toEqual(true);
      });

      it("Should be true at position 0,4 E", () => {
        return expect(
          robot.place({ x: 0, y: 4, orientation: Orientation.east })
        ).toEqual(true);
      });

      it("Should be true at position 4,0 S", () => {
        return expect(
          robot.place({ x: 4, y: 0, orientation: Orientation.south })
        ).toEqual(true);
      });

      it("Should be true at position 4,4 W", () => {
        return expect(
          robot.place({ x: 4, y: 4, orientation: Orientation.west })
        ).toEqual(true);
      });

      it("Should be false at position -1,0 N", () => {
        return expect(
          robot.place({ x: -1, y: 0, orientation: Orientation.north })
        ).toEqual(false);
      });

      it("Should be false at position 0,-1 E", () => {
        return expect(
          robot.place({ x: 0, y: -1, orientation: Orientation.east })
        ).toEqual(false);
      });

      it("Should be false at position 5,0 S", () => {
        return expect(
          robot.place({ x: 5, y: 0, orientation: Orientation.south })
        ).toEqual(false);
      });

      it("Should be false at position 0,5 W", () => {
        return expect(
          robot.place({ x: 0, y: 5, orientation: Orientation.west })
        ).toEqual(false);
      });
    });
  });
});
