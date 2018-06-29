/// <reference path="../../../typings/modules/vorpal/index.d.ts" />
import Vorpal = require("vorpal");
import { isUndefined } from "lodash";
import { EntityFactory } from "../../entities/EntityFactory";
import { CardinalDirections } from "../../entities/toy/robot/behaviours/orientation/CardinalDirections";

const entities = new EntityFactory();
const robot = entities.createStandardRobot();
const table = entities.createFiveByFiveTable();

const vorpal = new Vorpal();

vorpal
  .command("PLACE <x,y,f>", "Places the robot at x,y,f.")
  .allowUnknownOptions()
  .alias("place")
  .parse((command, args: any) => {
    args = (args as string).replace("-", "neg");
    return `${command} \'${args}\'`;
  })
  .validate(args => {
    args["x,y,f"] = (args["x,y,f"] as string).replace("neg", "-");
    const split = (x: string) => x.split(",");
    const makeObject = ([x, y, orientation]: string[]) => {
      const cardinal =
        CardinalDirections[
          orientation.toLowerCase() as keyof typeof CardinalDirections
        ];

      return {
        position: {
          x: +x,
          y: +y
        },
        direction: {
          orientation: isUndefined(cardinal) ? -1 : cardinal
        }
      };
    };
    const coords = makeObject(split(args["x,y,f"] as string));

    try {
      const place = robot.place(coords.position, coords.direction, table);
      return place;
    } catch (e) {
      vorpal.activeCommand.log(e.message);
    }
  })
  .action((args, cb) => {
    vorpal.activeCommand.log("successful place");
    cb();
  });

vorpal
  .command("help PLACE")
  .alias("help place")
  .action((args, cb) => {
    vorpal.activeCommand.log("");
    vorpal.activeCommand.log("Usage:  PLACE x,y,f");
    vorpal.activeCommand.log("");
    vorpal.activeCommand.log(
      "Where x and y are numbers and f is 'NORTH', 'SOUTH', 'EAST', or 'WEST'."
    );
    vorpal.activeCommand.log("");
    vorpal.activeCommand.log("Example:");
    vorpal.activeCommand.log("PLACE 1,1,NORTH");
    vorpal.activeCommand.log("");

    cb();
  })
  .hidden();

vorpal.delimiter("toy-robot$").show();

vorpal.log("Toy robot is awaiting your commands.");
