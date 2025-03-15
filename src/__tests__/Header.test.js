import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Header from '../components/Header';
import cartStore from '../store/store';
import '@testing-library/jest-dom'

// test case -1 
test("should work header component with Login Button", () => {
    // render
    render(
        <BrowserRouter>
            <Provider store={cartStore}>

                <Header />

            </Provider>
        </BrowserRouter>
    )

    // querying
    const loginBtn = screen.getByRole('button');
    expect(loginBtn).toBeInTheDocument();
});

// test case -2
test("should work header component with add to cart with 0 Button", () => {
    // render
    render(
        <BrowserRouter>
            <Provider store={cartStore}>

                <Header />

            </Provider>
        </BrowserRouter>
    )

    // querying
    const cart = screen.getByText('Cart-0');
    expect(cart).toBeInTheDocument();
});

// test case -3
test("should work header component with add to cart Button", () => {
    // render
    render(
        <BrowserRouter>
            <Provider store={cartStore}>

                <Header />

            </Provider>
        </BrowserRouter>
    )

    // querying
    const cart = screen.getByText(/Cart/);// regX
    expect(cart).toBeInTheDocument();
});

// test case -4
test("should work header component with click event to logout", () => {
    // render
    render(
        <BrowserRouter>
            <Provider store={cartStore}>

                <Header />

            </Provider>
        </BrowserRouter>
    )

    // querying
    const login = screen.getByRole('button',{name:'Login In'}); // finding button with display name Login In

    fireEvent.click(login);// to trigger events

    const logOutButton = screen.getByRole('button',{name:'Log Out'});
    expect(logOutButton).toBeInTheDocument();
});

