import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import imagen from './undraw_working_late_re_0c3y.svg';
import './Projects.css';

function Projects(){
    return(
        <div>
            <Navbar/>
            <div className="content">
                <h1>Proyectos</h1>
                <div className="stillWorking">
                    <img src={imagen} alt='Imagen de continuo trabajando...'></img>
                    <p>Aún estoy trabajando para presentar nuevo contenido próximamente.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;