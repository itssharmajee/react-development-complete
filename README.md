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
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// configuration of router

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // if you encountered any error in this path and all errorElement will render
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

// setting Provider to root
root.render(<RouterProvider router={router} />);
```

- Link Component : mainly used to navigate to the particular url, when click over it, as it does not refresh complete page, if you see in the actual DOM it is achor tag....so finally you can say that Link is wrapper over anchor tag.

```javascript
<Link to="/about">About </Link>
```

- useRouterError () hook
  As it is used to handle Error when encounter any error in the route

```javascript
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError(); // as this hook return custom error related to path and all

  // console.log(error);

  return (
    <div>
      <h2>Opps!! Something went wrong</h2>
      <h4>
        <p>
          {" "}
          {error.status} {error.statusText}
        </p>
        {/* <p>{error.error.message}</p> */}
      </h4>
    </div>
  );
};

export default Error;
```

- useParams() hook
  As this is used to get url parameter in the code

```javascript
import { useParams } from "react-router-dom";
// localhost:2000/user/:userId
const { userId } = useParams();
```

In React, there are two primary types of components: **Functional Components** and **Class Components**. The main differences between them are in their structure, syntax, lifecycle methods, and how they manage state and props. Let's break down these differences with examples:

### 1. **Syntax and Structure**

- **Functional Components**:
  - These are simply JavaScript functions that return JSX (JavaScript XML).
  - They are more concise and easier to write.
  - Before React 16.8, functional components were stateless and could not handle lifecycle methods.
  - After React 16.8, functional components can use **Hooks** (like `useState`, `useEffect`, etc.), which makes them more powerful.

Example of a Functional Component:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // using useState hook

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

- **Class Components**:
  - Class components are ES6 classes that extend `React.Component`.
  - They require more boilerplate and are more verbose.
  - Class components have **state** and **lifecycle methods** by default.
  - Before React 16.8, class components were used for stateful components and had lifecycle methods such as `componentDidMount`, `componentDidUpdate`, etc.

Example of a Class Component:

```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // state initialization
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

### 2. **State Management**

- **Functional Components**:

  - With React Hooks (like `useState`), functional components can now have state.

- **Class Components**:
  - Class components have state by default, which is stored in the `this.state` object.

### 3. **Lifecycle Methods**

- **Functional Components**:

  - Before hooks, functional components couldn't use lifecycle methods.
  - With the introduction of React Hooks (e.g., `useEffect`), functional components can mimic lifecycle behavior.
  - `useEffect` can handle component mounting, updating, and unmounting.

- **Class Components**:
  - Class components have built-in lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

### 4. **Performance**

- **Functional Components**:

  - Functional components are generally more lightweight and can be more performant due to their simpler nature.

- **Class Components**:
  - Class components are slightly more heavyweight due to the extra setup (class syntax, `this` context, and lifecycle methods).

### 5. **Hooks vs Lifecycle Methods**

- **Functional Components**:

  - Use hooks like `useState`, `useEffect`, `useContext`, etc.

- **Class Components**:
  - Use lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

### 6. **When to Use Which?**

- **Functional Components**:

  - Functional components are now the recommended way to write React components due to their simplicity and the power of hooks.
  - Use functional components whenever possible.

- **Class Components**:
  - Class components are still valid, but they are considered legacy. You might encounter them in older codebases.

### Conclusion:

Functional components are now more commonly used in React development, especially with the introduction of hooks, which allows them to handle state and lifecycle events. Class components are still in use but are generally less preferred for new React development.

# Custom Hook

created by User

- **Why?**:

  - Custom hooks allow code reuse between components.
  - They are functions that start with the `use` prefix and can call other hooks.

- **Example**:
  - `useFetch`, `useRestaurantMenu`, `useOnlineStatus` etc.. hook:

Eg:

```javascript
// creating
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });

    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });
  }, []);

  return networkStatus;
};

export default useOnlineStatus;

// using anywhere in the code

const status = useOnlineStatus();
<p style={{ textAlign: "center" }}>Online Status :{status ? "🟢" : "🔴"}</p>;
```

# Chunking, Code Splitting, Dynamic Bundling, LazyLoading, On Demand Loading, Dynamic import

There all words have a single meaning that is code spilitting, take only as much required.

Lazy loading in React is a technique where components are loaded only when they are needed (i.e., when they are about to be rendered), which helps to improve the performance of an application by reducing the initial loading time and splitting the code into smaller, manageable chunks.

To implement lazy loading in React, you can use the `React.lazy()` function along with `Suspense` Component from React.

Here's a simple example to illustrate how it works:

### Step 1: Using `React.lazy()`

`React.lazy()` allows you to dynamically import a component, which can be done with `import()`. This method returns a promise, and React will automatically load the component when it is needed.

### Example:

```jsx
import React, { Suspense } from "react";

// Lazy loading the `ClothingShop` component
const ClothingShop = lazy(() => import("./components/ClothingShop"));

function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Suspense fallback={<Skeleton />}>
        <ClothingShop />
      </Suspense>
    </div>
  );
}

export default App;
```

### Key points:

1. **`React.lazy()`**: This is used to load a component dynamically. It takes a function that must return a promise, typically created using `import()`.
2. **`Suspense`**: This is a component used to wrap your lazy-loaded components. It lets you specify a fallback (such as a loading spinner or a loading message) that will be displayed while the lazy-loaded component is being fetched.

### Step 2: Handling multiple lazy-loaded components

You can lazy load multiple components in your app to improve performance:

```jsx
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
```

### Step 3: Code Splitting in Production

React will automatically create separate JavaScript files for each lazy-loaded component, so they are only loaded when required. This helps in reducing the initial load time.

### Notes:

- The fallback UI (like `<div>Loading...</div>`) is displayed while the lazy-loaded component is being fetched.
- You can also use **React Router** in combination with lazy loading for route-based code splitting.

### Example with React Router:

```jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
```

This way, the components will only be loaded when the user navigates to their respective routes, improving performance further.
