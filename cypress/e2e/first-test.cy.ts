describe("template spec", () => {
	it("visits page", () => {
		cy.visit("http://localhost:5173/");

		cy.get('[data-testid="cypress-title"]').should("exist").should("have.text", "Toy Robot Simulator");
	});
});

describe("toy Robot Simulation", () => {
	it("visits page with buttons, robot, and board", () => {
		cy.visit("http://localhost:5173/");

		cy.get('[data-testid="robot-test"]').should("exist");
		cy.get('[data-testid="buttons-container"]').should("exist");
		cy.get('[data-testid="table"]').should("exist");
	});
});
