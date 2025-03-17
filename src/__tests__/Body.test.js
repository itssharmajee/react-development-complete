import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import BODY_CARD_MOCKDATA from "../mocks/BodyCardsMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";

// Mocking fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(BODY_CARD_MOCKDATA),
    })
);

// test case for all cards 

it('should load all cards', async () => {
    // Wrap the render call and async operations inside `act`
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    // Wait for cards to be rendered after the async data load
    const cards = await screen.findAllByTestId('restCard');

    // Assert the expected number of cards
    expect(cards.length).toBe(8); // Update this based on your mock data
});


// test case for filtered cards 

it("should filtered Cards", async () => {
    // Render the component inside the BrowserRouter to support react-router links
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    // Find the search button and the input field
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInputBox = screen.getByTestId("searchInputBox");

    // Simulate user typing "KFC" into the search input
    fireEvent.change(searchInputBox, { target: { value: "KFC" } });

    // Simulate the click event on the search button
    fireEvent.click(searchBtn);

    // Wait for the filtered cards to appear
    const filteredCards = await screen.findAllByTestId("restCard"); // Waits for updated list of cards

    // Check that there is exactly 1 card after the search for "KFC"
    expect(filteredCards.length).toBe(1); // Adjust the expected value based on your mock data
});



it('should be filtered according to top rated button clicked', async () => {
  // Wrap render in act() since the fetch is async and updates state
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Wait for the button to be rendered
  const topRatedBtn = await screen.findByRole('button', {
    name: /Top Rated Restaurants in New Delhi/i
  });


  // Simulate a click event on the button
  fireEvent.click(topRatedBtn);

  // Optionally, wait for the filtered results to appear (if there's any UI change after filtering)
  const filteredCards = await screen.findAllByTestId('restCard');
  
  // Assert that the filtered cards meet your expectations (e.g., check length or content)
  expect(filteredCards.length).toBeGreaterThan(3); // Or any other expected value based on your mock data
});
