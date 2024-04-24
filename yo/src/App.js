import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'

import './App.css';
import Footer from './components/Footer';
import ExistingOwner from './pages/ExistingOwner';
import Home from './pages/Home';
import NewOwner from './pages/NewOwner';
import Results from './pages/Results';
import Navbar from './components/Navbar';




const App = () => {
  return (
    <Box width = "400px" sx = {{width: {s1: '1488px'}}} m = "auto">
        <Navbar/>
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '/ExistingOwner' element = {<ExistingOwner/>}/>
            <Route path = '/NewOwner' element = {<NewOwner/>}/>
            <Route path = '/Results' element = {<Results/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App