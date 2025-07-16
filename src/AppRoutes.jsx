import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Resume from './pages/Resume/Resume'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
    </Routes>
  )
}

export default AppRoutes
