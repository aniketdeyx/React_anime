import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './contexts/UserContext';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Tour from './components/Tour';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Logout from './components/Logout';
import store from './reduxStore/store'
import { Provider} from 'react-redux';
import AnimeDetails from './components/AnimeDetails';
import Home from './components/Home'; 


export default function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='tour' element={<Tour />} />
        <Route path="/anime/:animeId" element={<AnimeDetails />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    )
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  );
}
