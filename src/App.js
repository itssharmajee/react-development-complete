import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header  from "./components/Header";
import Body from "./components/Body";
import Contact from './components/Contact'
import About from './components/About';
import NotFound from "./components/NotFound";
import Error from "./components/Error"
function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>,
  },
])

const mainRoot = document.getElementById("root");
const root = ReactDOM.createRoot(mainRoot);

// root.render(<App />);


// wrapping my all routes inside RouterProvider

root.render(<RouterProvider router={router}/>)
