import { render, screen } from "@testing-library/react";
import Home from "../app/page.tsx";
import "@testing-library/jest-dom";

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByText("fortune cookie");

		expect(heading).toBeInTheDocument();
	});

	test("renders navigation links", () => {
		render(<Home />);

		expect(screen.getByText("Fortune cookies")).toBeInTheDocument();
		expect(screen.getByText("Favourite")).toBeInTheDocument();
	});

	test("renders title text", () => {
		render(<Home />);
		expect(screen.getByText("fortune cookie")).toBeInTheDocument();
	});

	test("renders description text", () => {
		render(<Home />);
		expect(
			screen.getByText(/Hello! This app can generate/i),
		).toBeInTheDocument();
	});
});
