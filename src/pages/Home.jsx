import Busca from "../components/Busca"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-dark text-center'>
      <div className='display-3 mb-3'>
        Recetario de comida
      </div>
      <div className='display-7 mb-3 pd-6'>
        bienvenido a este recetario, esperamos que encuentre la mejor receta para su alimento preferido
      </div>
      <div className="container">
        <Busca /> 
      </div>
    </div>
  )
}

export default Home
