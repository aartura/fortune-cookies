import { render, screen } from "@testing-library/react";
import { useMousePosition } from "@/util/mouse";
import Particles from "@/app/components/particles";
import "@testing-library/jest-dom";

jest.mock("../../util/mouse.ts", () => ({
	useMousePosition: jest.fn(),
}));

describe("Particles component", () => {
	test("renders without errors", () => {
		useMousePosition.mockReturnValue({ x: 0, y: 0 });
		render(<Particles />);

		const canvas = screen.getByTestId("canvas", { hidden: true });
		expect(canvas).toBeInTheDocument();
	});
});
