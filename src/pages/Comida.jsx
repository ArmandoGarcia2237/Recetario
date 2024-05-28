import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const Comida = ({food}) => {

  const { id } = useParams();
  const [character, setCharacter] = useState([])
  const [ingred, setIngred] = useState('1')

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        return response.json()
      }).then((data) => {
        setCharacter(data.meals)
      }).catch((error) => {
        console.log(error)
      })
  }, [id])   

  return (
    <>
      <div className='container'>  
        {character?.map((cmd) => (
          <>
            <div className='row d-flex justify-content-center'>
              <div className=' shadow text-dark rounded bg-light display-2 m-4 p-4'>
              {cmd?.strMeal}
              </div>
              <div className='mb-3 pb-3'>
                <img src={cmd.strMealThumb} className='rounded img-fluid' />
              </div>
              <div className="accordion col-9" id="accordionExample">
                <div className="accordion-item justify-content-center">
                  <h2 className="accordion-header justify-content-center text-center" id="headingOne">
                    <button className="accordion-button justify-content-center tetx-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      ingredientes/proporciones
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-dark text-white">
                      <div className='justify-content-center text-center display-7'>
                      {cmd.strIngredient1} : {cmd.strMeasure1}
                      <br />
                      {cmd.strIngredient2} : {cmd.strMeasure2}
                      <br />
                      {cmd?.strIngredient3} : {cmd.strMeasure3}
                      <br />
                      {cmd.strIngredient4} : {cmd.strMeasure4}
                      <br />
                      {cmd.strIngredient5} : {cmd.strMeasure5}
                      <br />
                      {cmd.strIngredient6} : {cmd.strMeasure6}
                      <br />
                      {cmd.strIngredient7} : {cmd.strMeasure7}
                      <br />
                      {cmd.strIngredient8} : {cmd.strMeasure8}
                      <br />
                      {cmd.strIngredient9} : {cmd.strMeasure9}
                      <br />
                      {cmd.strIngredient10} : {cmd.strMeasure10}
                      <br />
                      {cmd.strIngredient11} : {cmd.strMeasure11}
                      <br />
                      {cmd.strIngredient12} : {cmd.strMeasure12}
                      <br />
                      {cmd.strIngredient13} : {cmd.strMeasure13}
                      <br />
                      {cmd.strIngredient14} : {cmd.strMeasure14}
                      <br />
                      {cmd.strIngredient15} : {cmd.strMeasure15}
                      <br />
                      {cmd.strIngredient16} : {cmd.strMeasure16}
                      <br />
                      {cmd.strIngredient17} : {cmd.strMeasure17}
                      <br />
                      {cmd.strIngredient18} : {cmd.strMeasure18}
                      <br />
                      {cmd.strIngredient19} : {cmd.strMeasure19}
                      <br />
                      {cmd?.strIngredient20} : {cmd?.strMeasure20}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Video-tutorial
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body bg-dark justify-content-center">
                      <ReactPlayer url={cmd.strYoutube} className='justify-content-center' width='auto' height='100%'/>
                      </div>
                      <p>doble clic para pantalla completa</p>
                  </div>
                </div>             
              </div>
              <div className='display-6 text-center mt-6 pt-6'>
                instrucciones:
              </div>
              <br />
              <br />
              <br />
              <div className='col-8 text-justify display-7'>
                {cmd.strInstructions}
              </div>
            </div>
          </> 
        ))}
        <br />
        <br />
        <br />
      </div> 
    </>
  )
}

export default Comida
