import React from 'react'
import Home from './component/Home'
import NavBar from './component/NavBar'
import {Routes, Route} from 'react-router-dom'
import Products from './component/Products'
function App() {
  return (
    <>
    <Routes>
    <NavBar/>
    <Route path = "/" element={<Home/>}/>
    <Route path= '/' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App