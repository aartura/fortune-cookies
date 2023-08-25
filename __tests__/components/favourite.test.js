import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FavouriteFortuneCookies } from "@/app/components/favourite";

describe("FavouriteFortuneCookies component", () => {
	test("renders no cookies message when no saved fortune cookies", () => {
		const { getByText } = render(<FavouriteFortuneCookies />);

		expect(getByText("No cookies!")).toBeInTheDocument();
	});
});
