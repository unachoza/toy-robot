import { useState, useEffect, MouseEvent } from "react";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Robot from "./components/Robot/Robot";
import robot_s from "./assets/robot_s.png";
import robot_n from "./assets/robot_n.png";
import robot_nw from "./assets/robot_nw.png";
import robot_se from "./assets/robot_se.png";

import { Direction, RobotLocation } from "./utils/types";
import "./App.css";

const INITIAL_ROBOTLOCATION = {
	direction: null,
	location: null,
};

const robotDirectionImages = {
	north: robot_n,
	south: robot_s,
	west: robot_nw,
	east: robot_se,
};

const App = () => {
	const [robotLocation, setRobotLocation] = useState<RobotLocation | null>({ ...INITIAL_ROBOTLOCATION, left: 800, top: 200 });
	const directions = ["north", "east", "south", "west"];
	const tableSize = 5;

	useEffect(() => {
		getRobotDirectionImage();
	}, [robotLocation?.direction]);

	const getRobotDirectionImage = () => {
		return robotDirectionImages[robotLocation?.direction as Direction];
	};

	const isValidMove = (x: number, y: number): boolean => {
		return x >= 0 && x < tableSize && y >= 0 && y < tableSize;
	};

	const handleMove = () => {
		console.log(robotLocation?.direction);
		//
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
					top ? (top -= 120) : 0;
					break;
				case "south":
					y -= 1;
					top ? (top += 120) : 0;
					break;
				case "east":
					x += 1;
					left ? (left += 120) : 0;
					break;
				case "west":
					x -= 1;
					left ? (left -= 120) : 0;
					break;
			}
			if (isValidMove(x, y)) {
				setRobotLocation((prevRobotLocation) => ({
					...prevRobotLocation,
					location: { x, y },
					left,
					top,
				}));
			}
		}
	};

	const handleChangeDirections = (e: MouseEvent<HTMLElement>) => {
		let directionIndex: number = directions.indexOf(robotLocation?.direction as string);
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
	};

	return (
		<>
			<div className="app-container">
				<Table robotLocation={robotLocation} setRobotLocation={setRobotLocation} />
				<div>
					<Robot image={getRobotDirectionImage() || robot_s} x={robotLocation?.left} y={robotLocation?.top} />
					<div className="buttons-container">
						<Button onClick={handleMove} text="Move" />
						<Button onClick={(e) => handleChangeDirections(e)} text="Left" />
						<Button onClick={(e) => handleChangeDirections(e)} text="Right" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Report" />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
