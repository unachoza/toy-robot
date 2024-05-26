import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("Toy Robot Simulation", () => {
	const clickSquare = (coords: string) => {
		const square = screen.getByTestId("table").querySelector(`[data-id="${coords}"]`);
		square && fireEvent.click(square);
	};

	const clickButton = (text: string) => {
		const button = screen.getByRole("button", { name: text });
		fireEvent.click(button);
	};

	const expectReportedPosition = (position: string, direction: string) => {
		const expectedText = `Robot is located at ${position} and is facing ${direction}`;
		expect(screen.getByText(expectedText)).toBeInTheDocument();
	};

	beforeEach(() => {
		render(<App />);
	});

	test("Example Input and Output Test Case (a)", () => {
		clickSquare("0,0");
		clickButton("Move");
		clickButton("Report");
		expectReportedPosition("0,1", "NORTH");
	});

	test("Example Input and Output Test Case (b)", () => {
		clickSquare("0,0");
		clickButton("Left");
		clickButton("Report");
		expectReportedPosition("0,0", "WEST");
	});

	test("Example Input and Output Test Case (c)", () => {
		clickSquare("1,2");
		clickButton("Move");
		clickButton("Move");
		clickButton("Right");
		clickButton("Move");
		clickButton("Report");
		expectReportedPosition("2,4", "EAST");
	});
});
