import React from "react";
import "./App.css";
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import NotFound from "./Notfound/Notfound";

let routers = createBrowserRouter
([
      {path:'', element:<Layout/>, children:
      [
        {index:true, element:<Home/>},
        {path:'about', element:<About/>},
        {path:'portfolio', element:<Portfolio/>},
        {path:'contact', element:<Contact/>},
        {path:'*', element:<NotFound/>}
      ]}
])

export default function App() 
{
  return (
    <RouterProvider  router={routers}></RouterProvider>
  );
}