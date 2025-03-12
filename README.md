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

# Higher order Component :

# Lifting UP :

# Conterolled & Uncontrolled Components :

# Lifting the State up :

# IU and Data Layer part in React :

# Props Drilling

Prop drilling is a term commonly used in React (and other component-based frameworks) to describe the process of passing data from a parent component to a deeply nested child component through intermediate components. Essentially, it means that if a child component needs to access data from a parent component, the parent passes that data down as props through every intermediary component along the way, even if those intermediate components don't directly use the data.

This can make the code harder to maintain and less readable, especially if the data is passed through many layers of components, resulting in "prop drilling."

### Example:

Let's say we have a `Grandparent` component, a `Parent` component, and a `Child` component.

```jsx
function Grandparent() {
  const data = "Hello from Grandparent!";

  return <Parent data={data} />;
}

function Parent({ data }) {
  return <Child data={data} />;
}

function Child({ data }) {
  return <div>{data}</div>;
}
```

Here, the `Grandparent` component has some data, and it passes that data to the `Child` component. However, the `Parent` component doesn't really need the data but still has to pass it along. This is an example of prop drilling.

### Issues with Prop Drilling:

1. **Maintainability:** If the component tree becomes large and complex, managing data flow can get cumbersome.
2. **Unnecessary Re-renders:** Intermediate components might re-render unnecessarily if the props they receive change, even though they don’t actually need the data.
3. **Readability:** It becomes difficult to understand the flow of data, as it might not be obvious why certain props are being passed through components that don't use them.

### Solutions to Avoid Prop Drilling:

1. **Context API :** React's Context API allows you to share data across components without having to explicitly pass props through each level. It's a way to avoid unnecessary prop drilling when certain data needs to be accessed by multiple components at different levels of the component tree.

2. **State Management Libraries:** Tools like Redux, MobX, or Recoil allow you to manage the state globally, so you don’t have to pass props manually through each layer of components.

# Context API : Descriptive Way

### **React Context API: Descriptive Notes**

The **Context API** is a feature in React that allows you to share values between components without having to pass data manually through every level of the component tree (this is commonly referred to as **prop drilling**). The Context API is useful for managing global data that needs to be accessed by multiple components at different nesting levels, such as user authentication status, themes, language preferences, or other shared state.

---

### **Key Concepts of the Context API**

1. **`createContext()`**

   - **Purpose**: It is used to create a Context object that holds the shared data, which can be accessed by any component that consumes the context.
   - **Usage**: When creating a context, you can also provide a default value, which will be used if there is no matching `Provider` in the component tree.
   - **Syntax**:
     ```jsx
     const MyContext = createContext(defaultValue);
     ```
     - `defaultValue`: This is the initial value the context will have. It’s optional and only used if no `Provider` exists above the component trying to consume the context.

2. **`Provider`**

   - **Purpose**: The `Provider` component is used to make the context value available to all components that are descendants of the `Provider`.
   - **Usage**: You wrap a component tree with the `Provider` and pass the context value (data) through the `value` prop.
   - **Syntax**:
     ```jsx
     <MyContext.Provider value={someValue}>
       {/* Child components */}
     </MyContext.Provider>
     ```
     - `value`: The data you want to share with child components.

3. **`useContext()`**
   - **Purpose**: This hook allows functional components to **consume** the context by accessing the value provided by the closest matching `Provider`.
   - **Usage**: Inside a functional component, you call `useContext` with the context object created by `createContext` to retrieve the shared value.
   - **Syntax**:
     ```jsx
     const value = useContext(MyContext);
     ```
     - This hook will return the current value of the context, which will re-render the component if the context value changes.

---

### **How to Use the Context API: A Step-by-Step Guide**

#### 1. **Create a Context**

First, create a new context using `createContext()`. This context will hold the data you want to share across your app or component tree.

```jsx
import { createContext } from "react";

// Create a context with a default value
const ThemeContext = createContext("light"); // 'light' is the default theme

export default ThemeContext;
```

#### 2. **Create a Context Provider**

Next, you'll need to set up a **Provider** that will wrap your application or part of it, providing the context value to all descendant components.

Here’s an example of a `ThemeProvider` component, which provides the theme data:

```jsx
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme is light

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* All child components will have access to this context */}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
```

- Here, the `ThemeProvider` component manages the state for the theme (`light` or `dark`) and provides both the current `theme` and the `toggleTheme` function to any child components.
- The `ThemeContext.Provider` wraps the children, passing the `theme` and `toggleTheme` down through the context.

#### 3. **Consume the Context in Child Components**

Any component that needs access to the context data can use the `useContext` hook to consume the context.

Here’s an example of a `ThemedComponent` that consumes the context value:

```jsx
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume context

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;
```

- `useContext(ThemeContext)` allows this component to access the `theme` and `toggleTheme` from the context, and the theme is applied dynamically to the component’s style.

#### 4. **Wrap Your App with the Provider**

Finally, to make the context available throughout your app, wrap the root component (or part of the app) with the `ThemeProvider`.

```jsx
import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemedComponent from "./ThemedComponent";

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

- The `ThemeProvider` ensures that any component inside it can access the theme context.

---

### **Context Provide can be Nested As well**

1. Context Providers can be nested in React, allowing you to provide different context values to different parts of your component tree. When you nest providers, the inner components will receive the closest provider's context value in the tree. This allows you to scope different pieces of state or functionality to specific parts of your application.

```jsx
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme is light

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* All child components will have access to this context */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children} {/* All child components will have access to this context */}
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
// you can change the value as per needs
export default ThemeProvider;
```

### **How Nested Context Providers Work**

1. Nested Context Providers: The inner ThemeProvider only affects the components inside it (like ThemedComponent and UserProfile), and the outer AuthProvider only provides authentication data to those components wrapped in it. So, nested providers let you organize and control how context is shared in different parts of your application.
2. Context Propagation: The context values are propagated from top to bottom in the component tree. The closest Provider will pass its value down to the components that consume the context.

### **Key Points About Nested Context Providers**

1. Isolation of State: By nesting context providers, you can isolate different pieces of state in different sections of your app, making it easier to manage.
2. Overriding Context: If you have multiple providers of the same context in a component tree, the innermost provider will override the outer ones for the components inside it.

### **Benefits of Using the Context API**

1. **Avoid Prop Drilling**: Without the Context API, you might need to pass data through many layers of components, even if intermediate components don’t need the data. Context lets you bypass this issue.
2. **Centralized Data Management**: It’s easy to manage shared state, such as themes, language preferences, or authentication status, in one place and provide it to multiple components.

3. **Simpler Code**: It reduces the need to pass down props manually, leading to cleaner and more maintainable code.

4. **Reactivity**: Components that consume context will re-render automatically when the context value changes.
5. **Accessibility** : you access it even you are using lazy loading concept regardless all.

---

### **When to Use the Context API**

- **Global state management**: When data needs to be shared across many components (e.g., theme, language, authentication).
- **Avoid prop drilling**: For deeply nested components where data needs to be shared across many levels.
- **Small to medium-scale applications**: For larger or more complex state management, tools like Redux or Recoil are typically better.

---

### **Limitations of the Context API**

- **Performance**: When a context value changes, all components that consume that context will re-render. If many components are consuming a context, it can lead to unnecessary re-renders.
- **Too much context**: Overusing context for everything can make your app harder to maintain, especially for large-scale applications with complex state.

---
