import { CommandType, OutputDataType } from "../utils/sampleData";

type Direction = "north" | "east" | "south" | "west";
type Index = { x: number; y: number };

interface RobotLocation {
	direction: Direction;
	location?: Index | null;
	left: number;
	top: number;
}

// const validateOutputReport = () => {

//     //PLACE
//     const getSquareLocationOnBrowswer = () => {}

//     //Move
//     const handleMove = () => {}
//         // isValidMove

//     //LEFT
//     // const handleChangeDirection = () => {}

//     //RIGHT
//     // const handleChangeDirection = () => {}

//     //REPORT
//     const handleReport = () => {}

// };

export const validateCommands = (commands: CommandType[], expectedOutput: OutputDataType): boolean => {
	// Initial robot location
	let robotLocation: OutputDataType = {
		location: [0, 0],
		direction: "north",
	};

	// Execute each command
	for (const command of commands) {
		switch (command.command) {
			case "PLACE":
				if (command.location && command.direction) {
					robotLocation = {
						location: command.location,
						direction: command.direction,
					};
					console.log({ robotLocation }, "from place");
				}
				break;
			case "MOVE":
				switch (robotLocation.direction) {
					case "north":
						robotLocation.location[1] += 1;
						break;
					case "east":
						robotLocation.location[0] += 1;
						break;
					case "south":
						robotLocation.location[1] -= 1;
						break;
					case "west":
						robotLocation.location[0] -= 1;
						break;
				}
				console.log({ robotLocation }, "from Move");
				break;
			case "LEFT":
				switch (robotLocation.direction) {
					case "north":
						robotLocation.direction = "west";
						break;
					case "east":
						robotLocation.direction = "north";
						break;
					case "south":
						robotLocation.direction = "east";
						break;
					case "west":
						robotLocation.direction = "south";
						break;
				}
				break;
			case "RIGHT":
				switch (robotLocation.direction) {
					case "north":
						robotLocation.direction = "east";
						break;
					case "east":
						robotLocation.direction = "south";
						break;
					case "south":
						robotLocation.direction = "west";
						break;
					case "west":
						robotLocation.direction = "north";
						break;
				}
				break;
			case "REPORT":
				// Compare final location and direction with expected output
				console.log({ robotLocation }, "from Report");
				console.log(
					robotLocation.location[0],
					expectedOutput.location[0],
					robotLocation.location[1],
					expectedOutput.location[1],
					robotLocation.direction,
					expectedOutput.direction
				);
				if (
					robotLocation.location[0] === expectedOutput.location[0] &&
					robotLocation.location[1] === expectedOutput.location[1] &&
					robotLocation.direction === expectedOutput.direction
				) {
					return true;
				} else {
					return false;
				}
		}
	}

	return false; // If no REPORT command is found
};

// Usage example
//   testData.forEach(({ input:any, output: }) => {
//     const isValid = validateCommands(input, output);
//     console.log(isValid ? "Test Passed" : "Test Failed");
//   });
