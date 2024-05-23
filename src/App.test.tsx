import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("renders buttons correctly", () => {
		render(<App />);
		const instructionsButton = screen.getByText("Instructions");
		const moveButton = screen.getByText("Move");
		const leftButton = screen.getByText("Left");
		const rightButton = screen.getByText("Right");
		const reportButton = screen.getByText("Report");

		expect(instructionsButton).toBeInTheDocument();
		expect(moveButton).toBeInTheDocument();
		expect(leftButton).toBeInTheDocument();
		expect(rightButton).toBeInTheDocument();
		expect(reportButton).toBeInTheDocument();
	});

	it("changes robot direction on Left button click", () => {
		render(<App />);
		const leftButton = screen.getByText("Left");
		fireEvent.click(leftButton);

		const robotImage = screen.getByRole("img");
		expect(robotImage).toHaveAttribute("src", "/src/assets/robot_s.png");
	});

	test("moves robot on Move button click", () => {
		render(<App />);
		const robotImage = screen.getByRole("img");
		const moveButton = screen.getByText("Move");
		console.log(robotImage.style);
		fireEvent.click(moveButton);

		console.log(robotImage.style);
		// Assuming the initial position is (50, 10), it should change based on the move logic
		expect(robotImage).toHaveStyle({ top: "10px", left: "50px" });
	});
});
