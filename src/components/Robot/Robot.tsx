import { useContext } from "react";
import { RobotContext } from "../../context/RobotContext";
import "./Robot.css";
import { Index } from "../../utils/types";

interface RobotProps {
	image: string;
}

const Robot = ({ image }: RobotProps) => {
	const context = useContext(RobotContext);
	if (!context) {
		throw new Error("RobotContext must be used within a RobotProvider");
	}
	const { robotLocation } = context;
	return (
		<img
			src={image}
			className="robot"
			alt="toy robot"
			title={!location ? "I'm a toy robot! Click a table square to place me on the table" : undefined}
			style={{
				position: robotLocation.location ? "absolute" : "relative",
				left: `${robotLocation.left}px`,
				top: `${robotLocation.top}px`,
			}}
		/>
	);
};

export default Robot;

// if robotoLocation.location is null add title?
