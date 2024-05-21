//@ts-nocheck
import { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Robot from "./components/Robot/Robot";
import robot from "./assets/robot_s.png";
import "./App.css";

type Direction = "north" | "east" | "south" | "west";
type Index = number[] | number;

export interface RobotLocation {
	direction: Direction;
	location: Index;
	left?: number;
	top?: number;
}

const App = () => {
	const [robotLocation, setRobotLocation] = useState<RobotLocation | null>({ ...null, left: 800 });
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const [canClick, setCanClick] = useState(false);

	useEffect(() => {
		console.log("change");
		let location = window.localStorage.getItem("location");
		location = JSON.parse(location);
		setRobotLocation({ ...robotLocation, left: location?.x, top: location?.y });
	}, [robotLocation?.location]);

	const handlePlace = (location: Index, direction: Direction) => {
		setCanClick(true);
		setPosition((prevPosition) => {
			return { ...prevPosition, top: prevPosition.top - 10 };
		});
	};

	const handleMove = () => {
		console.log(`robot was moved to ${robotLocation.location} and is facing ${robotLocation.direction}`);
	};

	const handleLeft = () => {
		console.log(`robot was moved to ${robotLocation.location} and is facing ${direction}`);
	};

	const handleRight = () => {
		console.log(`robot was moved to ${robotLocation.location} and is facing ${direction}`);
	};

	const handleReport = () => {
		console.log(`robot was moved to ${location} and is facing ${direction}`);
	};

	const handleShowInstructions = () => {};

	const moveRobot = () => {};

	return (
		<>
			<div className="app-container">
				<Table
					robotLocation={robotLocation}
					setRobotLocation={setRobotLocation}
					canClick={canClick}
					setCanClick={setCanClick}
					setLocation={handlePlace}
				/>
				<div>
					<Robot image={robot} left={robotLocation?.left} top={robotLocation?.top} />
					<div className="buttons-container">
						<Button onClick={handleMove} text="Move" />
						<Button onClick={handleLeft} text="Left" />
						<Button onClick={handleRight} text="Right" />
						<Button onClick={handlePlace} text="Place" />
						<Button onClick={handleReport} text="Report" />
						<Button onClick={handleShowInstructions} text="Show Instructions" />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
