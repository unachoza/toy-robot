import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { INITIAL_ROBOT_STATE } from "../App";
import { RobotState } from "./types";

const useScreenSize = (setRobotState: Dispatch<SetStateAction<RobotState>>) => {
	const [screenSize, setScreenSize] = useState("L");

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleResize = () => {
		if (window.innerWidth > 867) {
			setScreenSize("L");
		} else if (window.innerWidth < 867 && window.innerWidth > 667) {
			setScreenSize("M");
		} else if (window.innerWidth < 667) {
			setScreenSize("S");
		}
		setRobotState(INITIAL_ROBOT_STATE);
	};

	return { screenSize, handleResize };
};

export default useScreenSize;
