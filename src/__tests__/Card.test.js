import { render, screen} from "@testing-library/react";
import Card from "../components/Card";
import MOCK_DATA from "../mocks/CardMock.json";
import '@testing-library/jest-dom';
it('should load card data efficientely', async() => {
    render(<Card cardData={MOCK_DATA}/>);

    const restaurantName = await screen.findByText('Pizza Hut');

    expect(restaurantName).toBeInTheDocument();
});
