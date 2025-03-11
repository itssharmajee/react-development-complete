import React, { useEffect, useState,lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Header  from "./components/Header";
import Body from "./components/Body";
import Contact from './components/Contact'
import About from './components/About';
import Error from "./components/Error"
import Restaurant from "./components/Restaurant";
import Service from "./components/Service";
import useOnlineStatus from "./utils/custom-hook/useOnlineStatus";
import { Skeleton } from "./components/Skeleton";
// import ClothingShop from "./components/ClothingShop";

const ClothingShop = lazy(()=>import('./components/ClothingShop'));


function App() {
  const status = useOnlineStatus();
  return (
    <div>
      <p style={{textAlign:'center'}}>Online Status :{status?"🟢":"🔴"}</p>

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
        path:'/service',
        element:<Service/>,
      },
      {
        path:'/cloth',
        element:<Suspense fallback={<Skeleton/>}><ClothingShop/></Suspense>,
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
