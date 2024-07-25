import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

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
