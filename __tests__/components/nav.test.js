import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navigation } from "@/app/components/nav";

jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

describe("Navigation component", () => {
	beforeEach(() => {
		const mockIntersectionObserver = jest.fn();
		mockIntersectionObserver.mockReturnValue({
			observe: () => null,
			unobserve: () => null,
			disconnect: () => null,
		});
		window.IntersectionObserver = mockIntersectionObserver;
	});

	test("renders navigation links", () => {
		const { getByText } = render(<Navigation />);
		expect(getByText("Fortune cookies")).toBeInTheDocument();
		expect(getByText("Favourite")).toBeInTheDocument();
	});
});
