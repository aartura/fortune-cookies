import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Article } from "@/app/components/article";

describe("Article component", () => {
  const mockCookie = {
    id: 123456789,
    date: 123456789,
    fortune: "This is a test fortune.",
  };

  const handleIsCookieFavouriteMock = jest.fn();

  test("renders article content", () => {
    render(
      <Article
        cookie={mockCookie}
        isFavouriteCookie={false}
        handleIsCookieFavourite={handleIsCookieFavouriteMock}
      />
    );

    const fortuneCookie = screen.getByText("This is a test fortune.");

    expect(fortuneCookie).toBeInTheDocument();
  });

  test("toggles favourite icon on click", () => {
    const handleIsCookieFavouriteMock = jest.fn();
    const { getByTestId } = render(
      <Article
        cookie={mockCookie}
        isFavouriteCookie={false}
        handleIsCookieFavourite={handleIsCookieFavouriteMock}
      />
    );

    const thumbsUpIcon = getByTestId("thumbs-down-icon");

    fireEvent.click(thumbsUpIcon);

    expect(handleIsCookieFavouriteMock).toHaveBeenCalledWith(mockCookie, true);
  });
});
