import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>  
        <h1>SCHOOL</h1>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default App
