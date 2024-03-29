import React from 'react';
import Home from './pages/Home';


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home> ),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage> ),
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage> ),
  },
  {//testing
    path: "/cart",
    element: (<CartPage></CartPage> ),
  },
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
