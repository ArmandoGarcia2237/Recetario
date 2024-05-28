import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Comida from '../pages/Comida'
import Categories from '../pages/Categories'
import Error404 from '../pages/Error404'
import Comidas from '../pages/Comidas'

const RoutesIndex = () => {
  return (
    <div className='bg-dark text-white text-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Comida/:id' element={<Comida />} />
        <Route path='/Comidas/:name' element={<Comidas />} />
        <Route path='/Categorias' element={<Categories />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default RoutesIndex
