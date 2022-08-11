import  {Link}  from 'react-router-dom';
import './NavBar.css';
import logo from './LogoSencillo.png'

function Navbar(){
    return(
        <nav>

            <Link to='/portafoliovm/' className='item'>
                <img src={logo} className='my-logo' alt='Logo Viviana'></img>
            </Link>

            <input type='checkbox' id='check'></input>
            <label for='check' className='checkClass'>
                <i class="fa-solid fa-bars fa-2x"></i>
            </label>

            <ul>
                <li><Link to='/portafoliovm/about-me' className='item'><i class="fa-solid fa-cat"></i>Sobre Mí</Link></li>
                <li> <Link to='/portafoliovm/studies' className='item'><i class="fa-solid fa-graduation-cap"></i>Estudios</Link></li>
                <li><Link to='/portafoliovm/skills' className='item'><i class="fa-solid fa-code"></i>Habilidades</Link></li>
                <li><Link to='/portafoliovm/projects' className='item'><i class="fa-solid fa-terminal"></i>Proyectos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;