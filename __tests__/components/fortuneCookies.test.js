import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FortuneCookies } from "@/app/components/fortuneCookies";

describe("FortuneCookies component", () => {
	test("renders start button when not connected", () => {
		const { getByText } = render(<FortuneCookies />);
		expect(getByText("START")).toBeInTheDocument();
	});

	test("renders stop button when connected", () => {
		const { getByText } = render(<FortuneCookies />);
		fireEvent.click(getByText("START"));
		expect(getByText("STOP")).toBeInTheDocument();
	});

	test("toggles connection on button click", () => {
		const { getByText } = render(<FortuneCookies />);
		const button = getByText("START");
		fireEvent.click(button);
		fireEvent.click(button);
		expect(getByText("START")).toBeInTheDocument();
	});
});
