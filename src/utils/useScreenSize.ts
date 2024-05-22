import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { INITIAL_ROBOTLOCATION } from "../App";
import { RobotLocation } from "./types";

const useScreenSize = (setRobotlocation: Dispatch<SetStateAction<RobotLocation>>) => {
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
		setRobotlocation(INITIAL_ROBOTLOCATION);
	};

	return { screenSize, handleResize };
};

export default useScreenSize;
