import { useState, useEffect, useContext, MouseEvent } from "react";
import { RobotContext } from "./context/RobotContext";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Robot from "./components/Robot/Robot";
import Modal from "./components/Modal/Modal";
import robot_s from "./assets/robot_s.png";
import robot_n from "./assets/robot_n.png";
import robot_nw from "./assets/robot_nw.png";
import robot_se from "./assets/robot_se.png";
import { INSTRUCTIONS } from "./utils/constants";
import "./App.css";

const robotDirectionImages = {
	north: robot_n,
	south: robot_s,
	west: robot_nw,
	east: robot_se,
};

const App = () => {
	const context = useContext(RobotContext);
	if (!context) {
		throw new Error("RobotContext must be used within a RobotProvider");
	}
	const { robotLocation, handleMove, handleChangeDirections } = context;
	const [isOpen, setIsOpen] = useState(false);
	const [modalText, setModalText] = useState<string>("");
	const toggling = () => setIsOpen(!isOpen);

	useEffect(() => {
		getRobotDirectionImage();
	}, [robotLocation.direction]);

	const getRobotDirectionImage = () => {
		return robotDirectionImages[robotLocation.direction];
	};

	const handleReport = () => {
		if (robotLocation?.location) {
			const {
				location: { x, y },
				direction,
			} = robotLocation;
			toggling();
			setModalText(`Robot is located at ${x},${y} and is facing ${direction.toUpperCase()}`);
		}
	};
	const showInstructions = () => {
		toggling();
		setModalText(INSTRUCTIONS);
	};

	return (
		<>
			<div className="app-container">
				<Table />
				<div>
					<Robot image={getRobotDirectionImage()} />
					<div className="buttons-container">
						<Button onClick={showInstructions} text="Instructions" />
						<Button onClick={handleMove} text="Move" />
						<Button onClick={(e) => handleChangeDirections(e)} text="Left" />
						<Button onClick={(e) => handleChangeDirections(e)} text="Right" />
						<Button onClick={handleReport} text="Report" />
					</div>
					{isOpen && <Modal toggling={toggling} content={modalText} />}
				</div>
			</div>
		</>
	);
};

export default App;
