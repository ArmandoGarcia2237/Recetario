import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageCard from '../components/ImageCard'

const Comidas = () => {
    const { name } = useParams();
    const [character, setCharacter] = useState([])
    const [buscar, setBuscar] = useState('')
  
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        .then((response) => {
          return response.json()
        }).then((data) => {
          setCharacter(data.meals)
        }).catch((error) => {
          console.log(error)
        })
    }, [name])   
  
    return (
      <div className='container'>
        <div className='shadow row'>
            <div className='display-3 mb-4'>
                Categoria: 
                {name}
            </div>  
          {character?.map((cmd) => (
          <>
          <div className='d-inline row col-sm-4'>
          <Link to={`/Comida/${cmd?.idMeal}`}>
            <ImageCard key={cmd.idMeal} url={cmd.strMealThumb} title={cmd.strMeal} />
          </Link>
          </div>
          </>  
          ))}
        </div> 
      </div>
    )
}

export default Comidas