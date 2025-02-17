import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import Nav from './Navigation/Nav'
import About from './Components/Pages/About'
import Project from './Components/Pages/Project'
import Contact from './Components/Pages/Contact'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <div style={{ paddingTop: '60px' }}>
      <Routes>
    
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
      </Routes>
      </div>
      </BrowserRouter> 
    </div>
  )
}

export default App


