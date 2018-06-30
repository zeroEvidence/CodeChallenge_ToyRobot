import { RobotConfigStandard } from "../../../src/entities/configs/RobotConfigStandard";
import { EntityFactory } from "../../../src/entities/EntityFactory";
import { IOrientation } from "../../../src/entities/toy/orientation/interfaces/Orientation";
import { IPosition } from "../../../src/entities/toy/position/interfaces/Position.interface";
import { CardinalDirection } from "../../../src/entities/toy/robot/behaviours/orientation/CardinalDirections";
import { IRobot } from "../../../src/entities/toy/robot/interfaces/Robot.interface";
import { RobotFactory } from "../../../src/entities/toy/robot/RobotFactory";
import { InfiniteEnvironment } from "../../mockObjects/InfiniteEnvironment";
import { NoEnvironment } from "../../mockObjects/NoEnvironment";
import { RestrictedEnvironment } from "../../mockObjects/RestrictedEnvironment";

describe("Robot", () => {
  let robot: IRobot;

  beforeEach(() => {
    // robot = new Robot();
    robot = new EntityFactory().createStandardRobot();
  });

  it("Should be able to be instantiated", () => {
    return expect(robot).toBeInstanceOf(Object);
  });

  it("Should have an initial position of -1, -1", () => {
    return expect(robot.position).toEqual({ x: -1, y: -1 });
  });

  it("Should have an initial orientation of -1", () => {
    return expect(robot.orientation).toEqual({ orientation: -1 });
  });

  it("Should have an initial default environment of undefined", () => {
    return expect(robot.surface).toBeUndefined();
  });

  it("Should set the environment", () => {
    const environment = new InfiniteEnvironment();

    robot.setSurface(environment);

    return expect(robot.surface).toBeInstanceOf(InfiniteEnvironment);
  });

  describe("Behaviours", () => {
    const mockInfiniteEnvironment = new InfiniteEnvironment();
    const mockNoEnvironment = new NoEnvironment();
    const mockRestrictedEnvironment = new RestrictedEnvironment();
    const invalidPlaceA = {
      x: -1,
      y: 1
    };
    const invalidPlaceB = {
      x: 1,
      y: -1
    };
    const northOrientation = {
      orientation: CardinalDirection.north
    };
    const eastOrientation = {
      orientation: CardinalDirection.east
    };
    const southOrientation = {
      orientation: CardinalDirection.south
    };
    const westOrientation = {
      orientation: CardinalDirection.west
    };
    const invalidOrientation = {
      orientation: -1
    };
    const missingEnvironment = RobotConfigStandard.strings.missingEnvironment;
    const invalidPlace = RobotConfigStandard.strings.invalidPlace;
    let middleOfTableCoords = { x: 2, y: 2 };

    describe("Method .place(...)", () => {
      describe("Valid positions", () => {
        beforeEach(() => {
          return robot.setSurface(mockInfiniteEnvironment);
        });

        it("Should be valid at position 0,0 N", () => {
          return expect(
            robot.place(
              { x: 0, y: 0 },
              { orientation: CardinalDirection.north }
            )
          ).toEqual(true);
        });

        it("Should be valid at position 0,4 E", () => {
          return expect(
            robot.place({ x: 0, y: 4 }, { orientation: CardinalDirection.east })
          ).toEqual(true);
        });

        it("Should be valid at position 4,0 S", () => {
          return expect(
            robot.place(
              { x: 4, y: 0 },
              { orientation: CardinalDirection.south }
            )
          ).toEqual(true);
        });

        it("Should be valid at position 4,4 W", () => {
          return expect(
            robot.place({ x: 4, y: 4 }, { orientation: CardinalDirection.west })
          ).toEqual(true);
        });
      });

      describe("Invalid positions", () => {
        beforeEach(() => {
          return robot.setSurface(mockNoEnvironment);
        });

        it("Should be invalid at position -1,0 N", () => {
          return expect(() => {
            robot.place(invalidPlaceA, northOrientation);
          }).toThrowError(invalidPlace);
        });

        it("Should be invalid at position 0,-1 N", () => {
          return expect(() => {
            robot.place(invalidPlaceB, northOrientation);
          }).toThrowError(invalidPlace);
        });

        it("Should be invalid at position 1,1 -1", () => {
          return expect(() => {
            robot.place({ x: 1, y: 1 }, invalidOrientation);
          }).toThrowError(invalidPlace);
        });

        it("Should be invalid at position 1,1 -1 with table", () => {
          return expect(() => {
            robot.place(
              { x: 1, y: 1 },
              invalidOrientation,
              new EntityFactory().createFiveByFiveTable()
            );
          }).toThrowError(invalidPlace);
        });

        it("Should be invalid at position 5,0 S", () => {
          return expect(() => {
            robot.place(
              { x: 5, y: 0 },
              { orientation: CardinalDirection.south }
            );
          }).toThrowError(invalidPlace);
        });

        it("Should be invalid at position 0,5 W", () => {
          return expect(() => {
            robot.place(
              { x: 0, y: 5 },
              { orientation: CardinalDirection.west }
            );
          }).toThrowError(invalidPlace);
        });
      });
    });

    describe("Method .report()", () => {
      beforeEach(() => {
        return robot.setSurface(mockInfiniteEnvironment);
      });

      it("Should throw an error when unplaced", () => {
        return expect(() => {
          robot.report();
        }).toThrowError(missingEnvironment);
      });

      it("Should give back the current position of the robot", () => {
        const southWestCorner: IPosition & IOrientation = {
          x: 0,
          y: 0,
          orientation: CardinalDirection.north
        };

        robot.place(southWestCorner, northOrientation);

        return expect(robot.report()).toEqual(southWestCorner);
      });
    });

    describe("Method .move()", () => {
      beforeEach(() => {
        robot.setSurface(mockInfiniteEnvironment);
      });

      describe("Without placing first", () => {
        it("Should throw an error when moving without placing", () => {
          robot.setSurface(mockNoEnvironment);

          return expect(() => {
            robot.move();
          }).toThrowError(missingEnvironment);
        });
      });

      describe("A valid move in any direction", () => {
        beforeEach(() => {
          robot.setSurface(mockInfiniteEnvironment);
          middleOfTableCoords = { x: 2, y: 2 };
        });

        it("Should return true when given a valid move", () => {
          robot.place(middleOfTableCoords, northOrientation);

          return expect(robot.move()).toEqual(true);
        });

        it("Should report a move of +1 north", () => {
          robot.place(middleOfTableCoords, northOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 2,
            y: 3,
            orientation: CardinalDirection.north
          });
        });

        it("Should report a move of +1 east", () => {
          robot.place(middleOfTableCoords, eastOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 3,
            y: 2,
            orientation: CardinalDirection.east
          });
        });

        it("Should report a move of +1 south", () => {
          robot.place(middleOfTableCoords, southOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 2,
            y: 1,
            orientation: CardinalDirection.south
          });
        });

        it("Should report a move of +1 west", () => {
          robot.place(middleOfTableCoords, westOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 1,
            y: 2,
            orientation: CardinalDirection.west
          });
        });
      });

      describe("An invalid move in any direction", () => {
        let southWestCorner: IPosition;
        let northEastCorner: IPosition;

        beforeEach(() => {
          southWestCorner = { x: 0, y: 0 };
          northEastCorner = { x: 4, y: 4 };

          return robot.setSurface(mockRestrictedEnvironment);
        });

        it("Should return false when given an invalid move", () => {
          robot.place(southWestCorner, southOrientation);

          return expect(robot.move()).toEqual(false);
        });

        it("Should not move when moved at position 0,0 S", () => {
          robot.place(southWestCorner, southOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: CardinalDirection.south
          });
        });

        it("Should not move when moved at position 0,0 W", () => {
          robot.place(southWestCorner, westOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 0,
            y: 0,
            orientation: CardinalDirection.west
          });
        });

        it("Should not move when moved at position 4,4 N", () => {
          robot.place(northEastCorner, northOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: CardinalDirection.north
          });
        });

        it("Should not move when moved at position 4,4 E", () => {
          robot.place(northEastCorner, eastOrientation);
          robot.move();

          return expect(robot.report()).toEqual({
            x: 4,
            y: 4,
            orientation: CardinalDirection.east
          });
        });
      });
    });

    describe("Method .left()", () => {
      beforeEach(() => {
        return robot.setSurface(mockRestrictedEnvironment);
      });

      describe("Without placing", () => {
        it("Should throw an error", () => {
          return expect(() => {
            robot.left();
          }).toThrowError(missingEnvironment);
        });
      });

      it("Should orient to west", () => {
        robot.place(middleOfTableCoords, Object.assign(northOrientation));
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.west
        });
      });

      it("Should orient to north", () => {
        robot.place(middleOfTableCoords, eastOrientation);
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.north
        });
      });

      it("Should orient to east", () => {
        robot.place(middleOfTableCoords, southOrientation);
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.east
        });
      });

      it("Should orient to north", () => {
        robot.place(middleOfTableCoords, westOrientation);
        robot.left();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.south
        });
      });
    });

    describe("Method .right()", () => {
      beforeEach(() => {
        return robot.setSurface(mockRestrictedEnvironment);
      });

      describe("Without placing", () => {
        it("Should throw an error", () => {
          return expect(() => {
            robot.right();
          }).toThrowError(missingEnvironment);
        });
      });

      it("Should orient to east", () => {
        const robotA = new RobotFactory().createToy(RobotConfigStandard);
        robotA.setSurface(mockRestrictedEnvironment);
        robotA.place(middleOfTableCoords, Object.assign(northOrientation));
        robotA.right();

        return expect(robotA.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.east
        });
      });

      it("Should orient to north", () => {
        robot.place(middleOfTableCoords, westOrientation);
        robot.right();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.north
        });
      });

      it("Should orient to west", () => {
        robot.place(middleOfTableCoords, southOrientation);
        robot.right();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.west
        });
      });

      it("Should orient to south", () => {
        robot.place(middleOfTableCoords, eastOrientation);
        robot.right();

        return expect(robot.report()).toEqual({
          x: 2,
          y: 2,
          orientation: CardinalDirection.south
        });
      });
    });
  });
});
