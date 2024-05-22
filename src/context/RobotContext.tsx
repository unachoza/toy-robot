import { createContext, useState, useEffect, useMemo, ReactNode, MouseEvent } from "react";
import { Direction, RobotLocationType } from "../utils/types";

interface RobotContextProps {
	handleMove: () => void;
	handleChangeDirections: (e: MouseEvent<HTMLElement>) => void;
	getSquareLocationOnBrowswer: (e: MouseEvent, xPosition: number, yPosition: number) => void;
	robotLocation: RobotLocationType;
}

const RobotContext = createContext<RobotContextProps | null>(null);
const INITIAL_ROBOTLOCATION = {
	direction: "north" as Direction,
	location: null,
	left: 40,
	top: 10,
};

const RobotProvider = ({ children }: { children: ReactNode }) => {
	const [robotLocation, setRobotLocation] = useState<RobotLocationType>({ ...INITIAL_ROBOTLOCATION });

	const tableSize = 5;
	const squarePxSize = 120;
	const directions = ["north", "east", "south", "west"];

	const isValidMove = (x: number, y: number): boolean => {
		return x >= 0 && x < tableSize && y >= 0 && y < tableSize;
	};

	const handleMove = () => {
		if (robotLocation?.location) {
			let {
				location: { x, y },
				direction,
				top,
				left,
			} = robotLocation;
			switch (direction) {
				case "north":
					y += 1;
					top -= squarePxSize;
					break;
				case "south":
					y -= 1;
					top += squarePxSize;
					break;
				case "east":
					x += 1;
					left += squarePxSize;
					break;
				case "west":
					x -= 1;
					left -= squarePxSize;
					break;
			}
			if (isValidMove(x, y)) {
				setRobotLocation({
					...robotLocation,
					location: { x, y },
					left,
					top,
				});
			}
		}
	};

	const handleChangeDirections = (e: MouseEvent<HTMLElement>) => {
		if (robotLocation.location) {
			let directionIndex: number = directions.indexOf(robotLocation.direction as string);
			let directionChange = e.currentTarget.innerHTML.toLowerCase();
			if (directionChange === "left") {
				directionIndex = (directionIndex + 3) % 4;
			} else if (directionChange === "right") {
				directionIndex = (directionIndex + 1) % 4;
			}
			setRobotLocation((prevRobotLocation) => ({
				...prevRobotLocation,
				direction: directions[directionIndex] as Direction,
			}));
		}
	};

	const getSquareLocationOnBrowswer = (e: MouseEvent, xPosition: number, yPosition: number) => {
		const { x, y } = e.currentTarget.getBoundingClientRect();
		/// QUESTION FOR ROHIRIUM : does every place command set the robot direct to north or just the initial?
		setRobotLocation({ ...robotLocation, direction: "north", location: { x: xPosition, y: yPosition }, left: x, top: y });
	};

	const value: RobotContextProps = {
		robotLocation,
		handleMove,
		handleChangeDirections,
		getSquareLocationOnBrowswer,
	};

	return <RobotContext.Provider value={value}>{children}</RobotContext.Provider>;
};

export { RobotProvider, RobotContext };
