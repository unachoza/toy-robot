import { useState, useEffect } from "react";

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState("L");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 867 && window.innerWidth > 667) {
				setScreenSize("M");
			} else if (window.innerWidth < 667) {
				setScreenSize("S");
			}
		};

		window.addEventListener("resize", handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return screenSize;
};

export default useScreenSize;
