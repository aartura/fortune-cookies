import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "@/app/components/card";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
	test("renders children", () => {
		const { getByText } = render(<Card>Hello!</Card>);
		expect(getByText("Hello!")).toBeInTheDocument();
	});

	test("updates mouseX and mouseY on mouseMove", () => {
		const { container } = render(<Card />);
		const card = container.firstChild;

		fireEvent.mouseMove(card, { clientX: 100, clientY: 150 });
	});

	test("applies maskImage and style on mouseMove", () => {
		const { container } = render(<Card />);
		const card = container.firstChild;

		fireEvent.mouseMove(card, { clientX: 100, clientY: 150 });
	});

	test("applies hover styles on mouseEnter", () => {
		const { container } = render(<Card />);
		const card = container.firstChild;

		userEvent.hover(card);
	});

	test("removes hover styles on mouseLeave", () => {
		const { container } = render(<Card />);
		const card = container.firstChild;

		userEvent.unhover(card);
	});
});
