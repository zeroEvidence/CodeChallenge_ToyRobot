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

  it("Should set the environment if given at instantiation", () => {
    return expect(new Robot(new Table()).environment).toEqual(Table);
  });

  describe("Behaviours", () => {
    let robot: IRobot;
    let mockTruthyTable: any = {
      hasSurfaceAtCoords: () => true
    };
    let mockFalseyTable: any = {
      hasSurfaceAtCoords: () => false
    };

    describe("place", () => {
      describe("valid positions", () => {
        beforeEach(() => {
          robot = new robot(mockTruthyTable);
        });

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
      });

      describe("Invalid positions", () => {
        beforeEach(() => {
          robot = new robot(mockFalseyTable);
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

        it("Should be false at position 4,0 S", () => {
          return expect(
            robot.place({ x: 4, y: 0, orientation: Orientation.south })
          ).toEqual(false);
        });

        it("Should be false at position 0,4 W", () => {
          return expect(
            robot.place({ x: 0, y: 4, orientation: Orientation.west })
          ).toEqual(false);
        });
      });
    });

    describe("Report", () => {
      it("Should throw an error stating that the environment is unset", () => {
        return expect(() => {
          new Robot().report();
        }).toThrowError("Environment is unset");
      });

      it(
        "Should throw an error stating that the environment is unset if " +
          "the toy had been placed in an invalid area",
        () => {
          const robot = new Robot();
          robot.place({ x: -1, y: -1, orientation: -1 });

          return expect(() => {
            robot.report();
          }).toThrowError("Environment is unset");
        }
      );

      it("Should give back the current position of the robot", () => {
        const robot = new Robot();
        const southWestCorner: ICoordinates = {
          x: 0,
          y: 0,
          orientation: Orientation.north
        };

        robot.place(southWestCorner);

        return expect(robot.report()).toEqual(southWestCorner);
      });
    });

    describe("move", () => {
      let robot: IRobot;
      let middleOfTableCoords = { x: 2, y: 2, orientation: -1 };

      describe("valid movement", () => {
        beforeEach(() => {
          robot = new Robot(mockTruthyTable);
        });

        it("Should be a valid movement", () => {
          middleOfTableCoords.orientation = Orientation.north;

          robot.place(middleOfTableCoords);

          return expect(robot.move()).toEqual(true);
        });

        it("Should report a move of +1 north", () => {
          middleOfTableCoords.orientation = Orientation.north;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 2,
            y: 3,
            orientation: Orientation.north
          });
        });

        it("Should report a move of +1 east", () => {
          middleOfTableCoords.orientation = Orientation.east;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 3,
            y: 2,
            orientation: Orientation.east
          });
        });

        it("Should report a move of +1 south", () => {
          middleOfTableCoords.orientation = Orientation.south;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 2,
            y: 1,
            orientation: Orientation.south
          });
        });

        it("Should report a move of +1 west", () => {
          middleOfTableCoords.orientation = Orientation.south;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 1,
            y: 2,
            orientation: Orientation.west
          });
        });
      });

      describe("invalid movement", () => {
        const southWestCorner = { x: 0, y: 0, orientation: -1 };
        const northEastCorner = { x: 4, y: 4, orientation: -1 };

        it("Should be invalid to move at position 0,0 S", () => {
          southWestCorner.orientation = Orientation.south;

          robot.place(southWestCorner);

          return expect(robot.move()).toEqual(false);
        });

        it("Should be at the same position when moved at position 0,0 S", () => {
          southWestCorner.orientation = Orientation.south;

          robot.place(southWestCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: Orientation.south
          });
        });

        it("Should be at the same position when moved at position 0,0 W", () => {
          southWestCorner.orientation = Orientation.west;

          robot.place(southWestCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: Orientation.west
          });
        });

        it("Should be at the same position when moved at position 4,4 N", () => {
          northEastCorner.orientation = Orientation.north;

          robot.place(northEastCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: Orientation.north
          });
        });

        it("Should be at the same position when moved at position 4,4 W", () => {
          northEastCorner.orientation = Orientation.west;

          robot.place(northEastCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: Orientation.west
          });
        });
      });
    });
  });
});
