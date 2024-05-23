import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
	const mockSetRobotLocation = vi.fn();

	test("renders the table component with correct number of squares", () => {
		render(<Table robotLocation={{ direction: "north", location: null, left: 0, top: 0 }} setRobotLocation={mockSetRobotLocation} />);
		const tableElement = screen.getByTestId("table");
		expect(tableElement).toBeInTheDocument();

		// Check the number of rows and columns
		const rows = tableElement.querySelectorAll(".table-row");
		expect(rows.length).toBe(5); // Assuming 5 rows
		rows.forEach((row) => {
			const squares = row.querySelectorAll(".square");
			expect(squares.length).toBe(5); // Assuming 5 columns
		});
	});

	test("triggers getSquareLocationOnBrowswer function when square is clicked", () => {
		render(<Table robotLocation={{ direction: "north", location: null, left: 0, top: 0 }} setRobotLocation={mockSetRobotLocation} />);
		const squareElement = screen.getByText(/0,0/); // Assuming the first square has the text (0,0)
		fireEvent.click(squareElement);
		expect(mockSetRobotLocation).toHaveBeenCalledWith({
			direction: "north",
			location: { x: 0, y: 0 },
			left: expect.any(Number),
			top: expect.any(Number),
		});
	});
});
