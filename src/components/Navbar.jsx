import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='display-7 position-relative text-center'>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>Recetario</NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse text-center' id='navbarNav'>
            <ul className='navbar-nav text-center'>

              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Inicio
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/Categorias'>
                  Categorias
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
