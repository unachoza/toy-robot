import { useState } from "react";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Robot from "./components/Robot/Robot";
import robot from "./assets/robot_s.png";
import "./App.css";

type Direction = "north" | "east" | "south" | "west";
type Index = number[] | number;

export interface RobotLocation {
	direction: Direction | null;
	location: Index | null;
	left?: number;
	top?: number;
}

const INITIAL_ROBOTLOCATION = {
	direction: null,
	location: null,
};

const App = () => {
	const [robotLocation, setRobotLocation] = useState<RobotLocation | null>({ ...INITIAL_ROBOTLOCATION, left: 800, top: 800 });
	console.log({ robotLocation });
	return (
		<>
			<div className="app-container">
				<Table />
				<div>
					<img src={robot} className="logo react" alt="React logo" />
					<Robot image={robot} x={robotLocation?.left} y={robotLocation?.top} />
					<div className="buttons-container">
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Move" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Left" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Right" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Place" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Report" />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
