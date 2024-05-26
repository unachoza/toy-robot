import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import robot_s from "./assets/robot_images/robot_s.png";
import robot_nw from "./assets/robot_images/robot_nw.png";
import robot_se from "./assets/robot_images/robot_se.png";

describe("App Component", () => {
	test("renders the heading correctly", () => {
		render(<App />);
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

	test("renders the Table component", () => {
		render(<App />);
		expect(screen.getByTestId("table")).toBeInTheDocument();
	});

	test("renders the Robot component", () => {
		render(<App />);
		expect(screen.getByAltText("toy robot")).toBeInTheDocument();
	});

	test("opens modal when Instructions button is clicked", () => {
		render(<App />);
		fireEvent.click(screen.getByRole("button", { name: /Instructions/i }));
		expect(screen.getByTestId("modal")).toBeInTheDocument();
	});
});
