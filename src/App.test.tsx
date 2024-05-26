import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have Toy Robot Simulator Title text ", () => {
	render(<App />);
	const message = screen.queryByText(/Toy Robot Simulator/);
	expect(message).toBeVisible();
});
