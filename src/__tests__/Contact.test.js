import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact'
import '@testing-library/jest-dom';



// // --test case-1
// test("should load Contact components", () => {
//     // Rendering
//     render(<Contact />);

//     // Querying
//     const paragraph = screen.getByRole('paragraph');// finding the p tag inside

//     // Assertion
//     expect(paragraph).toBeInTheDocument();// checking whether paragraph is working or not in the Contact component
    
// });

// // --test case-2
// test("should load submit button in the Contact components", () => {

//     render(<Contact />);

//     const button = screen.getByText('Submit'); // find by Text 
//     expect(button).toBeInTheDocument();// checking whether button is working or not in the Contact component
    
// })

// // --test case-3
// test("should load input name in the Contact components", () => {

//     render(<Contact />);

//     const inputName = screen.getByPlaceholderText('Enter your name'); // find by input by placeholder name
//     expect(inputName).toBeInTheDocument();
    
// })

// // --test case-4
// test("should load all input in the Contact components", () => {

//     render(<Contact />);

//     const inputAll = screen.getAllByRole('textbox'); // find all input
//     // console.log(inputAll);
    
//     expect(inputAll.length).toBe(2);
    
// })


// you can keep all the test case inside describe (), describe can be multipe or nested 

describe('All test of Contact components', () => {
    // --test case-1
test("should load Contact components", () => {
    // Rendering
    render(<Contact />);

    // Querying
    const paragraph = screen.getByRole('paragraph');// finding the p tag inside

    // Assertion
    expect(paragraph).toBeInTheDocument();// checking whether paragraph is working or not in the Contact component
    
});

// --test case-2
test("should load submit button in the Contact components", () => {

    render(<Contact />);

    const button = screen.getByText('Submit'); // find by Text 
    expect(button).toBeInTheDocument();// checking whether button is working or not in the Contact component
    
})

describe("related to input box", () => {
  // --test case-3
test("should load input name in the Contact components", () => {

    render(<Contact />);

    const inputName = screen.getByPlaceholderText('Enter your name'); // find by input by placeholder name
    expect(inputName).toBeInTheDocument();
    
})

// --test case-4
test("should load all input in the Contact components", () => {

    render(<Contact />);

    const inputAll = screen.getAllByRole('textbox'); // find all input
    // console.log(inputAll);
    
    expect(inputAll.length).toBe(2);
    
})
});



});
