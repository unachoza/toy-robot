import { renderHook, act } from "@testing-library/react";
import useScreenSize from "../utils/useScreenSize";

const setRobotLocation = () => console.log("test");

test("does something", () => {
	const result = renderHook(() => useScreenSize(setRobotLocation));
});
