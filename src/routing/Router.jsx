import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import EventDashboard from '../pages/EventDashboard';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/dashboard', // Event Dashboard route
        element: <EventDashboard />,
      },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;