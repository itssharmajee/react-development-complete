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

- Link Component : mainly used to navigate to the particular url, when click over it, as it does not refresh complete page, if you see in the actual DOM it is  achor tag....so finally you can say that Link is wrapper over anchor tag.

```javascript
    <Link to='/about'>About </Link>
```


- useRouterError () hook
As it is used to handle Error when encounter any error in the route
```javascript
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();// as this hook return custom error related to path and all

    // console.log(error);
    

    return (
        <div>
            <h2>Opps!! Something went wrong</h2>
            <h4>
            <p> {error.status} {error.statusText}</p>
            {/* <p>{error.error.message}</p> */}
            </h4>
        </div>
    )
}

export default Error;


```


- useParams() hook 
As this is used to get url parameter in the code 

```javascript
    import {useParams}  from 'react-router-dom';
    // localhost:2000/user/:userId
    const {userId} = useParams();
```