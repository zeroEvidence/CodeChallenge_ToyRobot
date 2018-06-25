import { IRobot } from "../../src/robot/interfaces/Robot.interface";
import { Robot } from "../../src/robot/Robot";
import { IPosition } from "../../src/toy/interfaces/Position.interface";
import { CardinalDirections } from "../../src/toy/orientation/CardinalDirections";
import { ToyStrings } from "../../src/toy/ToyStrings";
import { InfiniteEnvironment } from "./mocks/InfinateEnvironment";
import { NoEnvironment } from "./mocks/NoEnvironment";
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
    const mockNoEnvironment = new NoEnvironment();
    const mockRestrictedEnvironment = new RestrictedEnvironment();
    const invalidPlaceA = {
      x: -1,
      y: 1,
      orientation: CardinalDirections.north
    };
    const invalidPlaceB = {
      x: 1,
      y: -1,
      orientation: CardinalDirections.north
    };
    const invalidPlaceC = { x: 1, y: 1, orientation: -1 };
    let middleOfTableCoords = { x: 2, y: 2, orientation: -1 };

    describe("Method .place(...)", () => {
      describe("Valid positions", () => {
        beforeEach(() => {
          return robot.setEnvironment(mockInfiniteEnvironment);
        });

        it("Should be valid at position 0,0 N", () => {
          return expect(
            robot.place({ x: 0, y: 0, orientation: CardinalDirections.north })
          ).toEqual(true);
        });

        it("Should be valid at position 0,4 E", () => {
          return expect(
            robot.place({ x: 0, y: 4, orientation: CardinalDirections.east })
          ).toEqual(true);
        });

        it("Should be valid at position 4,0 S", () => {
          return expect(
            robot.place({ x: 4, y: 0, orientation: CardinalDirections.south })
          ).toEqual(true);
        });

        it("Should be valid at position 4,4 W", () => {
          return expect(
            robot.place({ x: 4, y: 4, orientation: CardinalDirections.west })
          ).toEqual(true);
        });
      });

      describe("Invalid positions", () => {
        beforeEach(() => {
          return robot.setEnvironment(mockNoEnvironment);
        });

        it("Should be invalid at position -1,0 N", () => {
          return expect(robot.place(invalidPlaceA)).toEqual(false);
        });

        it("Should be invalid at position 0,-1 E", () => {
          return expect(robot.place(invalidPlaceB)).toEqual(false);
        });

        it("Should be invalid at position 1,1 -1", () => {
          return expect(robot.place(invalidPlaceC)).toEqual(false);
        });

        it("Should be invalid at position 5,0 S", () => {
          return expect(
            robot.place({ x: 5, y: 0, orientation: CardinalDirections.south })
          ).toEqual(false);
        });

        it("Should be invalid at position 0,5 W", () => {
          return expect(
            robot.place({ x: 0, y: 5, orientation: CardinalDirections.west })
          ).toEqual(false);
        });
      });
    });

    describe("Method .report()", () => {
      beforeEach(() => {
        return robot.setEnvironment(mockInfiniteEnvironment);
      });

      it("Should throw an error when unplaced", () => {
        return expect(() => {
          robot.report();
        }).toThrowError(ToyStrings.missingEnvironment);
      });

      it(
        "Should throw an error if the toy had been placed in an " +
          "invalid area",
        () => {
          robot.setEnvironment(mockNoEnvironment);
          robot.place({ x: -1, y: -1, orientation: -1 });

          return expect(() => {
            robot.report();
          }).toThrowError(ToyStrings.missingEnvironment);
        }
      );

      it("Should give back the current position of the robot", () => {
        const southWestCorner: IPosition = {
          x: 0,
          y: 0,
          orientation: CardinalDirections.north
        };

        robot.place(southWestCorner);

        return expect(robot.report()).toEqual(southWestCorner);
      });
    });

    describe("Method .move()", () => {
      beforeEach(() => {
        robot.setEnvironment(mockInfiniteEnvironment);
      });

      describe("Without placing first", () => {
        it("Should throw an error when moving without placing", () => {
          robot.setEnvironment(mockNoEnvironment);

          return expect(() => {
            robot.move();
          }).toThrowError(ToyStrings.missingEnvironment);
        });
      });

      describe("Invalid placing", () => {
        it("Should throw an error", () => {
          robot.setEnvironment(mockNoEnvironment);
          robot.place(invalidPlaceA);

          return expect(() => {
            robot.move();
          }).toThrowError(ToyStrings.missingEnvironment);
        });
      });

      describe("A valid move in any direction", () => {
        beforeEach(() => {
          robot.setEnvironment(mockInfiniteEnvironment);
          middleOfTableCoords = { x: 2, y: 2, orientation: -1 };
        });

        it("Should return true when given a valid move", () => {
          middleOfTableCoords.orientation = CardinalDirections.north;

          robot.place(middleOfTableCoords);

          return expect(robot.move()).toEqual(true);
        });

        it("Should report a move of +1 north", () => {
          middleOfTableCoords.orientation = CardinalDirections.north;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 2,
            y: 3,
            orientation: CardinalDirections.north
          });
        });

        it("Should report a move of +1 east", () => {
          middleOfTableCoords.orientation = CardinalDirections.east;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 3,
            y: 2,
            orientation: CardinalDirections.east
          });
        });

        it("Should report a move of +1 south", () => {
          middleOfTableCoords.orientation = CardinalDirections.south;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 2,
            y: 1,
            orientation: CardinalDirections.south
          });
        });

        it("Should report a move of +1 west", () => {
          middleOfTableCoords.orientation = CardinalDirections.west;

          robot.place(middleOfTableCoords);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 1,
            y: 2,
            orientation: CardinalDirections.west
          });
        });
      });

      describe("An invalid move in any direction", () => {
        let southWestCorner: IPosition;
        let northEastCorner: IPosition;

        beforeEach(() => {
          southWestCorner = { x: 0, y: 0, orientation: -1 };
          northEastCorner = { x: 4, y: 4, orientation: -1 };

          return robot.setEnvironment(mockRestrictedEnvironment);
        });

        it("Should return false when given an invalid move", () => {
          southWestCorner.orientation = CardinalDirections.south;

          robot.place(southWestCorner);

          return expect(robot.move()).toEqual(false);
        });

        it("Should not move when moved at position 0,0 S", () => {
          southWestCorner.orientation = CardinalDirections.south;

          robot.place(southWestCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: CardinalDirections.south
          });
        });

        it("Should not move when moved at position 0,0 W", () => {
          southWestCorner.orientation = CardinalDirections.west;

          robot.place(southWestCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: CardinalDirections.west
          });
        });

        it("Should not move when moved at position 4,4 N", () => {
          northEastCorner.orientation = CardinalDirections.north;

          robot.place(northEastCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: CardinalDirections.north
          });
        });

        it("Should not move when moved at position 4,4 E", () => {
          northEastCorner.orientation = CardinalDirections.east;

          robot.place(northEastCorner);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: CardinalDirections.east
          });
        });
      });
    });

    describe("Method .left()", () => {
      beforeEach(() => {
        return robot.setEnvironment(mockRestrictedEnvironment);
      });

      describe("Without placing", () => {
        it("Should throw an error", () => {
          return expect(() => {
            robot.left();
          }).toThrowError(ToyStrings.missingEnvironment);
        });
      });

      describe("Invalid placing", () => {
        it("Should throw an error", () => {
          robot.place(invalidPlaceB);

          return expect(() => {
            robot.left();
          }).toThrowError(ToyStrings.missingEnvironment);
        });
      });

      it("Should orient to east", () => {
        middleOfTableCoords.orientation = CardinalDirections.north;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.east
        });
      });

      it("Should orient to south", () => {
        middleOfTableCoords.orientation = CardinalDirections.east;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.south
        });
      });

      it("Should orient to west", () => {
        middleOfTableCoords.orientation = CardinalDirections.south;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.west
        });
      });

      it("Should orient to north", () => {
        middleOfTableCoords.orientation = CardinalDirections.west;

        robot.place(middleOfTableCoords);
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.north
        });
      });
    });

    describe("Method .right()", () => {
      beforeEach(() => {
        return robot.setEnvironment(mockRestrictedEnvironment);
      });

      describe("Without placing", () => {
        it("Should throw an error", () => {
          return expect(() => {
            robot.right();
          }).toThrowError(ToyStrings.missingEnvironment);
        });
      });

      describe("Invalid placing", () => {
        it("Should throw an error", () => {
          robot.place(invalidPlaceC);

          return expect(() => {
            robot.right();
          }).toThrowError(ToyStrings.missingEnvironment);
        });
      });

      it("Should orient to west", () => {
        middleOfTableCoords.orientation = CardinalDirections.north;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.west
        });
      });

      it("Should orient to south", () => {
        middleOfTableCoords.orientation = CardinalDirections.west;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.south
        });
      });

      it("Should orient to east", () => {
        middleOfTableCoords.orientation = CardinalDirections.south;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.east
        });
      });

      it("Should orient to north", () => {
        middleOfTableCoords.orientation = CardinalDirections.east;

        robot.place(middleOfTableCoords);
        robot.right();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirections.north
        });
      });
    });
  });
});
