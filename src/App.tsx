import { useState } from "react";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Robot from "./components/Robot/Robot";
import robot from "./assets/robot_s.png";
import { Direction, Index, RobotLocation } from "./utils/types";
import "./App.css";

const INITIAL_ROBOTLOCATION = {
	direction: null,
	location: null,
};

const App = () => {
	const [robotLocation, setRobotLocation] = useState<RobotLocation | null>({ ...INITIAL_ROBOTLOCATION, left: 800, top: 200 });
	console.log({ robotLocation });
	const [canClick, setCanClick] = useState(false);

	const handlePlace = () => {
		setCanClick(true);
	};

	const handleLeft = () => {
		setRobotLocation((prevRobotLocation) => ({
			...robotLocation,
			left: (prevRobotLocation?.left || 0) + 120,
		}));
	};

	return (
		<>
			<div className="app-container">
				<Table canClick={canClick} robotLocation={robotLocation} setRobotLocation={setRobotLocation} />
				<div>
					<Robot image={robot} x={robotLocation?.left} y={robotLocation?.top} />
					<div className="buttons-container">
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Move" />
						<Button onClick={handleLeft} text="Left" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Right" />
						<Button onClick={handlePlace} text="Place" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Report" />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
