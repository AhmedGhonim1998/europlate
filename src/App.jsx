import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav&Footer/Nav'
import { Route,Routes } from 'react-router-dom'
import HomeLayout from './Home/HomeLayout'
import Footer from './Nav&Footer/Footer'
import Hheu19 from './ٍsingleCard/Hheu19'
import Europlatz from './ٍsingleCard/Europlatz'
import Slk55 from './ٍsingleCard/Slk55'
import Kao4hh from './ٍsingleCard/Kao4hh'
import Bdo9325 from './ٍsingleCard/Bdo9325'
import Gutentag from './ٍsingleCard/Gutentag'
import History from './History/History'
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='/hheu19' element={<Hheu19/>}/>
        <Route path='/europlatz' element={<Europlatz/>}/>
        <Route path='/slk55' element={<Slk55/>}/>
        <Route path='/kao4hh' element={<Kao4hh/>}/>
        <Route path='/bdo9325' element={<Bdo9325/>}/>
        <Route path='/gutentag' element={<Gutentag/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
