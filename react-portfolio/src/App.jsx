import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation, Homepage } from './Components';
import './App.css'

function Layout() {

  return (
    <>
     <Navigation />
     <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Homepage />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
