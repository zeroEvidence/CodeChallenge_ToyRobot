import { IApplicationStrings } from "./interfaces/ApplicationStrings.interface";

export const RobotApplicationStrings: IApplicationStrings = {
  delimiter: "toy-robot$",

  welcomeMessage: "Toy robot is awaiting your commands.",

  mainHelp:
    "  Commands:\n\n" +
    "    help [command...]  Provides help for a given command.\n" +
    "    exit               Exits application.\n" +
    "    PLACE <x,y,f>      Place the robot at x,y,f.\n" +
    "    MOVE               Move the robot one unit in the direction it is facing.\n" +
    "    LEFT               Rotates the robot 90 degrees left.\n" +
    "    RIGHT              Rotates the robot 90 degrees right.\n" +
    "    REPORT             Report the current position and orientation in the form of x,y,f.\n",

  commandHelp: {
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
    ]
  },

  invalidCommand: (args: Array<string | number>) => {
    return (
      (args as string[]).join(" ") +
      " is not a valid command.\n" +
      "Run 'help' for more information on commands."
    );
  },

  invalidArgument: (args: string) => {
    return (
      args +
      " are not valid arguments.\n" +
      "Run 'help' for more information on commands."
    );
  }
};
