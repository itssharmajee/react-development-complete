# react with Parcel 

## important topics to create a notes...
- Normal JS utility function like const name = 'sapna';
- React Local state variable useState() 
eg: const [name, setName] = useState('sapna');

- useEffect() 

### Normally types of Routing 
- client-side routing : it just replace previous component with current about page. So it does not make a server request and making a SPA efficient and faster 
- server-side routing : in this as we chick on achor tag it makes a sever request for particular page like about and returen back to client as rendered 

### React Router 
React Router is a JavaScript framework that helps developers manage navigation in React applications. It's used to create dynamic routes and connect URL paths to specific components. 
- What does React Router do?

Allows developers to define routes and map them to components 
Manages transitions between different views or sections of an app without requiring full page reloads 
Enables the creation of single-page web or mobile apps 
Allows the use of browser history features while preserving the right application view 

```javascript

import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
// configuration of router

    const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,// if you encountered any error in this path and all errorElement will render
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
    ],
    errorElement:<Error/>
  },
])

// setting Provider to root 
root.render(<RouterProvider router={router}/>)

```

- Link Component : mainly used to navigate to the particular url, when click over it 

```javascript
    <Link to='/about'>About </Link>
```