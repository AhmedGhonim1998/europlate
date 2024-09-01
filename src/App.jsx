import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav&Footer/Nav'
import { Route,Routes } from 'react-router-dom'
import HomeLayout from './Home/HomeLayout'
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomeLayout/>}/>
      </Routes>
    </>
  )
}

export default App
