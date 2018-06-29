/// <reference path="../../../typings/modules/vorpal/index.d.ts" />
import Vorpal = require("vorpal");

export class ApplicationConfig {
  public static MainHelp: string =
    "  Commands:\n\n" +
    "    help [command...]  Provides help for a given command.\n" +
    "    exit               Exits application.\n" +
    "    PLACE <x,y,f>      Place the robot at x,y,f.\n" +
    "    MOVE               Move the robot one unit in the direction it is facing.\n" +
    "    LEFT               Rotates the robot 90 degrees left.\n" +
    "    RIGHT              Rotates the robot 90 degrees right.\n" +
    "    REPORT             Report the current position and orientation in the form of x,y,f.\n";

  public static InvalidCommandString(args: (string | number)[]) {
    return (
      (args as string[]).join(" ") +
      " is not a valid command.\n" +
      "Run 'help' for more information on commands."
    );
  }

  public static CommandHelp = {
    place: [
      "",
      "Usage:  PLACE x,y,f",
      "",
      "Place the robot at x,y,f.",
      "Where x and y are numbers and f is 'NORTH', 'SOUTH', 'EAST', or 'WEST'.",
      "",
      "Example:",
      "PLACE 1,1,NORTH",
      ""
    ],
    move: [
      "",
      "Usage:  MOVE",
      "",
      "Move one unit in the direction the robot is facing.",
      "",
      "Example:",
      "MOVE",
      ""
    ],
    left: [
      "",
      "Usage:  LEFT",
      "",
      "Rotates the robot 90 degrees left",
      "",
      "Example:",
      "LEFT",
      ""
    ],
    right: [
      "",
      "Usage:  RIGHT",
      "",
      "Rotates the robot 90 degrees right",
      "",
      "Example:",
      "RIGHT",
      ""
    ],
    report: [
      "",
      "Usage:  REPORT",
      "",
      "Report the current position and orientation in the form of x,y,f",
      "Where x and y are numbers and f is 'NORTH', 'SOUTH', 'EAST', or 'WEST'.",
      "",
      "Example:",
      "REPORT",
      "",
      "Output:",
      "0,0,NORTH",
      ""
    ]
  };
}
