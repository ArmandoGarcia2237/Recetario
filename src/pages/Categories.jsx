import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageCard from '../components/ImageCard'

const Categories = () => {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        return response.json()
      }).then((results) => {
        setCharacter(results.categories)
      }).catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
    <div className='container'> 
      <div className='display-3 mb-3'>Estas en Categorias de comida</div>
      <br />
      <div className='display-7 mb-3'>seleccione una categoria para desplegar las comidas</div>
      <br />
      <br />
      <div className='row d-flex justify-content-center'> 
        {character.map((cmd) => (
          <>
          <div className='d-inline row col-sm-4'>
          <Link to={`/Comidas/${cmd?.strCategory}`}>
            <ImageCard key={cmd.idCategory} url={cmd.strCategoryThumb} title={cmd.strCategory} />
          </Link>
          </div>
          </> 
        ))}
        </div>
      </div>
    </>
  )
}

export default Categories
