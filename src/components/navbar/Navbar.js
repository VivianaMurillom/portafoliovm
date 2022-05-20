import  {Link}  from 'react-router-dom';
import './NavBar.css';
import logo from './LogoSencillo.png'

function Navbar(){
    return(
        <nav>
            <Link to='/' className='item'>
                <img src={logo} className='my-logo' alt='Logo Viviana'></img>
            </Link>
            <Link to='/about-me' className='item'><i class="fa-solid fa-cat"></i>Sobre Mí</Link>
            <Link to='/studies' className='item'><i class="fa-solid fa-graduation-cap"></i>Estudios</Link>
            <Link to='/skills' className='item'><i class="fa-solid fa-code"></i>Habilidades</Link>
            <Link to='/projects' className='item'><i class="fa-solid fa-terminal"></i>Proyectos</Link>
        </nav>
    );
}

export default Navbar;