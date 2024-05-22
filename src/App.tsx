import { useState, useEffect, MouseEvent } from "react";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Robot from "./components/Robot/Robot";
import Modal from "./components/Modal/Modal";
import robot_s from "./assets/robot_s.png";
import robot_n from "./assets/robot_n.png";
import robot_nw from "./assets/robot_nw.png";
import robot_se from "./assets/robot_se.png";
import { INSTRUCTIONS } from "./utils/constants";
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
	const [isOpen, setIsOpen] = useState(false);
	const [modalText, setModalText] = useState<string>("");
	const toggling = () => setIsOpen(!isOpen);
	const directions = ["north", "east", "south", "west"];
	const tableSize = 5;
	const squarePxSize = 120;

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
					top && (top -= squarePxSize);
					break;
				case "south":
					y -= 1;
					top && (top += squarePxSize);
					break;
				case "east":
					x += 1;
					left && (left += squarePxSize);
					break;
				case "west":
					x -= 1;
					left && (left -= squarePxSize);
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

	const handleReport = () => {
		if (robotLocation?.location) {
			const {
				location: { x, y },
				direction,
			} = robotLocation;
			toggling();
			setModalText(`Robot is located at ${x},${y} and is facing ${direction?.toUpperCase()}`);
		}
	};
	const showInstructions = () => {
		toggling();
		setModalText(INSTRUCTIONS);
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
						<Button onClick={showInstructions} text="Instructions" />
					</div>
					{isOpen && <Modal toggling={toggling} content={modalText} />}
				</div>
			</div>
		</>
	);
};

export default App;
