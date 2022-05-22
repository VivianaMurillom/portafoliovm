import './Footer.css';
import logoTech from './tech_power.png'

function Footer(){

    return(
        <footer>
            <div className='leftFooter'>
                <img src={logoTech} className='logoTech' alt='Logo de Tech Power'></img>
            </div>
            <div className='centerFooter'>
                <p className='thanks'>Con cariño para el mundo</p>
                <p className='version'>Versión N° 1 de 2022</p>
            </div>
            <div className='rightFooter'>
                <p className='social'>Social</p>
                <div className='links'>
                    <a href="https://www.linkedin.com/in/viviana-murillo/" target="_blank" rel='noreferrer'><i class="fa-brands fa-linkedin fa-3x"></i></a>
                    <a href="https://github.com/VivianaMurillom" target="_blank" rel='noreferrer'><i class="fa-brands fa-github-square fa-3x"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;