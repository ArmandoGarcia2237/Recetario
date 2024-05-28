import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageCard from './ImageCard'

const Busca = () => {
    const [character, setCharacter] = useState([])
    const [buscar, setBuscar] = useState('')
    const [pref,setPref] = useState('search.php?s=')
  
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/${pref}${buscar}`)
        .then((response) => {
          return response.json()
        }).then((data) => {
          setCharacter(data.meals)
        }).catch((error) => {
          console.log(error)
        })
    }, [buscar,pref])
  
    return (
      <div className='container'>
        <div className='input-group'>
          <div className='input-group-prepend'>
                <span className="input-group-text" id="basic-addon1">buscador</span>
          </div>          
            <input
              className='form-control'
              aria-label="Nombre y/o letra"
              type='text'
              value={buscar}
              onChange={() => setBuscar(event.target.value)}
            />  
        </div>
        <div className='row d-flex justify-content-center'>  
                {character?.map((cmd) => (
                    <>
                      <div className='d-inline row col-sm-4'>
                        <Link to={`/Comida/${cmd?.idMeal}`} className='center'>
                          <ImageCard key= {cmd?.idMeal} url={cmd?.strMealThumb} title={cmd?.strMeal} />
                        </Link>
                      </div>
                    </> 
                ))}
            </div> 
      </div>
      
    )
}

export default Busca