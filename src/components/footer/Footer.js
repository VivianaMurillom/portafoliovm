import './Footer.css';
import logoTech from './tech_power.png'

function Footer(){

    return(
        <footer>
            <div className='leftFooter'>
                <img src={logoTech} className='logoTech' alt='Logo de Tech Power'></img>
            </div>
            <div className='centerFooter'>
                <p className='thanks'>Con <span>cariño</span> para el mundo</p>
                <p className='version'>Versión N° <span>1</span> de <span>2022</span></p>
            </div>
            <div className='rightFooter'>
                <div className='links'>
                    <a href="https://www.linkedin.com/in/viviana-murillo/" target="_blank" rel='noreferrer'><i class="fa-brands fa-linkedin fa-4x"></i></a>
                    <a href="https://github.com/VivianaMurillom" target="_blank" rel='noreferrer'><i class="fa-brands fa-github-square fa-4x"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;