import { IRobot } from "../../src/robot/interfaces/Robot.interface";
import { Robot } from "../../src/robot/Robot";
import { InfiniteEnvironment } from "./mocks/InfinateEnvironment";
import { RestrictedEnvironment } from "./mocks/RestrictedEnvironment";

describe("Robot", () => {
  let robot: IRobot;

  beforeEach(() => {
    robot = new Robot();
  });

  it("Should be able to be instantiated", () => {
    return expect(robot).toBeInstanceOf(Object);
  });

  it("Should have an initial position of -1, -1, -1", () => {
    return expect(robot.position).toEqual({ x: -1, y: -1, orientation: -1 });
  });

  it("Should have an initial default environment of undefined", () => {
    return expect(robot.environment).toBeUndefined();
  });

  it("Should set the environment", () => {
    const environment = new InfiniteEnvironment();

    robot.setEnvironment(environment);

    return expect(robot.environment).toBeInstanceOf(InfiniteEnvironment);
  });

  describe("Behaviours", () => {
    const mockInfiniteEnvironment = new InfiniteEnvironment();
    const mockRestrictedEnvironment = new RestrictedEnvironment();
    const invalidPlaceA = { x: -1, y: 1, orientation: Orientation.north };
    const invalidPlaceB = { x: 1, y: -1, orientation: Orientation.north };
    const invalidPlaceC = { x: 1, y: 1, orientation: -1 };
    let middleOfTableCoords = { x: 2, y: 2, orientation: -1 };

    describe("Method .place(...)", () => {
      describe("Valid positions", () => {
        beforeEach(() => {
          robot.setEnvironment(mockInfiniteEnvironment);
        });

        it("Should be valid at position 0,0 N", () => {
          return expect(
            robot.place({ x: 0, y: 0, orientation: Orientation.north })
          ).toEqual(true);
        });

        it("Should be valid at position 0,4 E", () => {
          return expect(
            robot.place({ x: 0, y: 4, orientation: Orientation.east })
          ).toEqual(true);
        });

        it("Should be valid at position 4,0 S", () => {
          return expect(
            robot.place({ x: 4, y: 0, orientation: Orientation.south })
          ).toEqual(true);
        });

        it("Should be valid at position 4,4 W", () => {
          return expect(
            robot.place({ x: 4, y: 4, orientation: Orientation.west })
          ).toEqual(true);
        });
      });

      describe("Invalid positions", () => {
        beforeEach(() => {
          robot = robot.setEnvironment(mockRestrictedEnvironment);
        });

        it("Should be invalid at position -1,0 N", () => {
          return expect(robot.place(invalidPlaceA)).toEqual(false);
        });

        it("Should be invalid at position 0,-1 E", () => {
          return expect(robot.place(invalidPlaceB));
        });

        it("Should be invalid at position 1,1 -1", () => {
          return expect(robot.place(invalidPlaceC)).toEqual(false);
        });

        it("Should be invalid at position 5,0 S", () => {
          return expect(
            robot.place({ x: 5, y: 0, orientation: Orientation.south })
          ).toEqual(false);
        });

        it("Should be invalid at position 0,5 W", () => {
          return expect(
            robot.place({ x: 0, y: 5, orientation: Orientation.west })
          ).toEqual(false);
        });
      });
    });

    describe("Method .report()", () => {
      it("Should throw an error when unplaced", () => {
        return expect(() => {
          robot.report();
        }).toThrowError(ToyStrings.unsetEnvironment);
      });

      it(
        "Should throw an error if the toy had been placed in an " +
          "invalid area",
        () => {
          robot.place({ x: -1, y: -1, orientation: -1 });

          return expect(() => {
            robot.report();
          }).toThrowError(ToyStrings.unsetEnvironment);
        }
      );

      it("Should give back the current position of the robot", () => {
        const southWestCorner: ICoordinates = {
          x: 0,
          y: 0,
          orientation: Orientation.north
        };

        robot.place(southWestCorner);

        return expect(robot.report()).toEqual(southWestCorner);
      });
    });

    describe("Method .move()", () => {
      describe("Without placing first", () => {
        it("Should throw an error when moving without placing", () => {
          return expect(() => {
            robot.move();
          }).toThrowError(ToyStrings.unsetEnvironment);
        });
      });

      describe("Invalid placing", () => {
        it("Should throw an error", () => {
          robot.place(invalidPlaceA);

          return expect(() => {
            robot.move();
          }).toThrowError(ToyStrings.unsetEnvironment);
        });
      });

      describe("A valid move in any direction", () => {
        beforeEach(() => {
          robot.setEnvironment(mockInfiniteEnvironment);
        });

        it("Should return true when given a valid move", () => {
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

      describe("An invalid move in any direction", () => {
        const southWestCorner = { x: 0, y: 0, orientation: -1 };
        const northEastCorner = { x: 4, y: 4, orientation: -1 };

        beforeEach(() => {
          robot.setEnvironment(mockRestrictedEnvironment);
        });

        it("Should return false when given an invalid move", () => {
          southWestCorner.orientation = Orientation.south;

          robot.place(southWestCorner);

          return expect(robot.move()).toEqual(false);
        });

        it("Should not move when moved at position 0,0 S", () => {
          southWestCorner.orientation = Orientation.south;

          robot.place(southWestCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: Orientation.south
          });
        });

        it("Should not move when moved at position 0,0 W", () => {
          southWestCorner.orientation = Orientation.west;

          robot.place(southWestCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: Orientation.west
          });
        });

        it("Should not move when moved at position 4,4 N", () => {
          northEastCorner.orientation = Orientation.north;

          robot.place(northEastCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: Orientation.north
          });
        });

        it("Should not move when moved at position 4,4 E", () => {
          northEastCorner.orientation = Orientation.east;

          robot.place(northEastCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: Orientation.east
          });
        });
      });
    });

    describe("Method .left()", () => {
      describe("Without placing", () => {
        it("Should throw an error", () => {
          return expect(() => {
            robot.left();
          }).toThrowError(ToyStrings.unsetEnvironment);
        });
      });

      describe("Invalid placing", () => {
        it("Should throw an error", () => {
          robot.place(invalidPlaceB);

          return expect(() => {
            robot.left();
          }).toThrowError(ToyStrings.unsetEnvironment);
        });
      });

      it("Should orient to east", () => {
        middleOfTableCoords.orientation = Orientation.north;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.east
        });
      });

      it("Should orient to south", () => {
        middleOfTableCoords.orientation = Orientation.east;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.south
        });
      });

      it("Should orient to west", () => {
        middleOfTableCoords.orientation = Orientation.south;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.west
        });
      });

      it("Should orient to north", () => {
        middleOfTableCoords.orientation = Orientation.west;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.north
        });
      });
    });

    describe("Method .right()", () => {
      describe("Without placing", () => {
        it("Should throw an error", () => {
          return expect(() => {
            robot.right();
          }).toThrowError(ToyStrings.unsetEnvironment);
        });
      });

      describe("Invalid placing", () => {
        it("Should throw an error", () => {
          robot.place(invalidPlaceC);

          return expect(() => {
            robot.right();
          }).toThrowError(ToyStrings.unsetEnvironment);
        });
      });

      it("Should orient to west", () => {
        middleOfTableCoords.orientation = Orientation.north;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.west
        });
      });

      it("Should orient to south", () => {
        middleOfTableCoords.orientation = Orientation.west;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.south
        });
      });

      it("Should orient to east", () => {
        middleOfTableCoords.orientation = Orientation.south;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.east
        });
      });

      it("Should orient to north", () => {
        middleOfTableCoords.orientation = Orientation.east;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report).toEqual({
          x: 2,
          y: 2,
          orientation: Orientation.north
        });
      });
    });
  });
});
