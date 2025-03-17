import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MOCK_REST_MENU_DATA from '../mocks/MenuListMockData.json';
import { Provider } from 'react-redux';
import cartStore from '../store/store';
import Restaurant from '../components/Restaurant';
import { act } from 'react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/Cart';

// Mock fetch response
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_REST_MENU_DATA) }));

it('should work "add to cart" perfectly', async () => {
    // Render the component inside the Redux Provider
   await act(async()=>{
    render(
       <BrowserRouter>
        <Provider store={cartStore}>
            <Header/>
            <Restaurant />
            <Cart/>
        </Provider>
       </BrowserRouter>
    );
   })

    // Wait for the menu item to appear after fetching
    const header = await screen.findByText('Rolls(15)'); // Assuming "Double Down Burger(5)" is part of the mocked data

    // Fire a click event on the header (this could be an "add to cart" action)
    fireEvent.click(header);

    const foodItemList =  screen.getAllByTestId('foodItem');

    // expect(foodItemList.length).toBe(15);

    const addBtn = screen.getAllByRole('button',{name:'Add'});
   // before click 
    expect(screen.getByText('Cart-0')).toBeInTheDocument()

    //After click
    fireEvent.click(addBtn[0]);
    expect(screen.getByText('Cart-1')).toBeInTheDocument()
    
    //click another add to cart
    fireEvent.click(addBtn[1]);
    expect(screen.getByText('Cart-2')).toBeInTheDocument()

    const cartItem = screen.getAllByTestId("cartItem");

    expect(cartItem.length).toBe(2)



    
});
