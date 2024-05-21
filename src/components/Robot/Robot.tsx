import "./Robot.css";

interface RobotProps {
	image: string;
	x?: number;
	y?: number;
}

const Robot = ({ image, x, y }: RobotProps) => {
	return (
		<img
			src={image}
			className="robot"
			alt="toy robot"
			style={{
				position: "absolute",
				left: `${x}px`,
				top: `${y}px`,
			}}
		/>
	);
};

export default Robot;
