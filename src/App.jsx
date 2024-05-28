import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Navbar from './components/Navbar'
import ImageCard from './components/ImageCard'
import Busca from './components/Busca'

function App () {

  return (
    <div className='center text-center'>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
