import React, { useEffect, useState, lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from './components/Contact'
import About from './components/About';
import Error from "./components/Error"
import Restaurant from "./components/Restaurant";
import Service from "./components/Service";
import useOnlineStatus from "./utils/custom-hook/useOnlineStatus";
import { Skeleton } from "./components/Skeleton";
import UserContext from "./utils/UserContext";
// import ClothingShop from "./components/ClothingShop";

const ClothingShop = lazy(() => import('./components/ClothingShop'));


function App() {
  const [userName, setUserName] = useState('')
  const status = useOnlineStatus();
  

  // Authentication
  useEffect(()=>{
    const newData = {
      name:"Sapna Kumari"
    }
    setUserName(newData.name)
  },[])

  return (
    <UserContext.Provider value={{loggedInUser : 'Sapna'}} > {/*Wrapping the App component inside UserContext.Provider so that UserContext will be available for everywhere and also updating the value of loggedInUser and sending a function setUserName which the help of it you can modify you userName*/}
    <div>
    <p style={{ textAlign: 'center' }}>Network status :{status ? "🟢" : "🔴"}</p>
      
      <div>
        <Header />
        {/* here render children components of Header */}
        <UserContext.Provider value={{loggedInUser : userName, setUserName}} >
        <Outlet />       {/*this Component of react-router-dom all you to render children components 
                    without this you can render */}
        </UserContext.Provider>
      </div>
    
    </div>
    </UserContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/service',
        element: <Service />,
      },
      {
        path: '/cloth',
        element: <Suspense fallback={<Skeleton />}><ClothingShop /></Suspense>,
      },
      {
        path: '/restaurant/:restId',
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />// if you encountered any error in this path and all errorElement will render Error components
  },
])

const mainRoot = document.getElementById("root");
const root = ReactDOM.createRoot(mainRoot);

// root.render(<App />);


// wrapping my all routes inside RouterProvider

root.render(<RouterProvider router={router} />)
