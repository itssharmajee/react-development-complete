import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Header  from "./components/Header";
import Body from "./components/Body";
import Contact from './components/Contact'
import About from './components/About';
import NotFound from "./components/NotFound";
import Error from "./components/Error"
import Restaurant from "./components/Restaurant";
function App() {
  return (
    <div>
      <Header />
          {/* here render children components of App */}
        <Outlet/>       {/*this Component of react-router-dom all you to render children components 
                    without this you can render */}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/restaurant/:restId',
        element:<Restaurant/>,
      },
    ],
    errorElement:<Error/>// if you encountered any error in this path and all errorElement will render Error components
  },
])

const mainRoot = document.getElementById("root");
const root = ReactDOM.createRoot(mainRoot);

// root.render(<App />);


// wrapping my all routes inside RouterProvider

root.render(<RouterProvider router={router}/>)
