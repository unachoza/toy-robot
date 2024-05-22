import { useState, useEffect, MouseEvent } from "react";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Robot from "./components/Robot/Robot";
import Modal from "./components/Modal/Modal";
import robot_s from "./assets/robot_s.png";
import robot_n from "./assets/robot_n.png";
import robot_nw from "./assets/robot_nw.png";
import robot_se from "./assets/robot_se.png";

import { Direction, Index, RobotLocation } from "./utils/types";
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
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);
	const directions = ["north", "east", "south", "west"];

	useEffect(() => {
		getRobotDirectionImage();
	}, [robotLocation?.direction]);

	const getRobotDirectionImage = () => {
		return robotDirectionImages[robotLocation?.direction as Direction];
	};

	//TODO
	const handleEndsOfDirectionArray = () => {};

	//TODO
	const isOnEdge = () => {};

	const handleMove = () => {
		console.log(robotLocation?.direction);
		if (robotLocation?.direction === "north") {
			setRobotLocation((prevRobotLocation) => ({
				...robotLocation,
				top: (prevRobotLocation?.top || 0) - 120,
			}));
		}
		if (robotLocation?.direction === "east") {
			setRobotLocation((prevRobotLocation) => ({
				...robotLocation,
				left: (prevRobotLocation?.left || 0) + 120,
			}));
		}
		if (robotLocation?.direction === "south") {
			setRobotLocation((prevRobotLocation) => ({
				...robotLocation,
				top: (prevRobotLocation?.top || 0) + 120,
			}));
		}
		if (robotLocation?.direction === "west") {
			setRobotLocation((prevRobotLocation) => ({
				...robotLocation,
				left: (prevRobotLocation?.left || 0) - 120,
			}));
		}
	};

	const handleChangeDirections = (e: MouseEvent<HTMLElement>) => {
		let currentDirectionIndex: number;
		let updatedDirection: string = "";
		let directionChange = e.currentTarget.innerHTML.toLowerCase();
		if (robotLocation?.direction) {
			if (directionChange === "left") {
				let currentDirection: string = robotLocation?.direction;
				currentDirectionIndex = directions.indexOf(currentDirection);
				updatedDirection = directions[currentDirectionIndex - 1];
			} else if (directionChange === "right") {
				let currentDirection: string = robotLocation?.direction;
				currentDirectionIndex = directions.indexOf(currentDirection);
				updatedDirection = directions[currentDirectionIndex + 1];
			}
			setRobotLocation((prevRobotLocation) => ({
				...prevRobotLocation,
				direction: updatedDirection as Direction,
			}));
		}
	};

	const handleReport = () => {
		toggling();
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
						<Button onClick={handleReport} text="Report" />
					</div>
					{isOpen && <Modal toggling={toggling} />}
				</div>
			</div>
		</>
	);
};

export default App;
