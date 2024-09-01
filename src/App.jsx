import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav&Footer/Nav'
import { Route,Routes } from 'react-router-dom'
import HomeLayout from './Home/HomeLayout'
import Footer from './Nav&Footer/Footer'
import Hheu19 from './ٍsingleCard/Hheu19'
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='/hheu19' element={<Hheu19/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
