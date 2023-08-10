import React from 'react'
import './App.css'
import Layouts from './layouts/Layouts'
import Home from './pages/Home'
import Cities from './pages/Cities'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router= createBrowserRouter([{
  path:"/",element:<Layouts />,children:[
    {
   path: "/",element: <Home />},

    {
    path: "/cities",element: <Cities />} 
  ]
}]




)


function App() {
 

  return (
    <>
     <RouterProvider router={router} />
     
    </>
  )
}

export default App
