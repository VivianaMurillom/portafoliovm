import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import imagen from './undraw_working_late_re_0c3y.svg';
import './Projects.css';
import {getAllProjects} from '../../projectsDB';

function Projects(){

    const myProjects=getAllProjects();
    // const myPath='../.';

    return(
        <div>
            <Navbar/>
            <div className="contentProjects">
                <h1>Proyectos</h1>
                <div className="projects">
                    {myProjects.map(singleP=>
                        <div className="cardProject" key={singleP.id}>
                            <div className="textProjects">
                                <h3>{singleP.nombreProyecto}</h3>
                                <p>{singleP.descripcion}</p>
                                <div className="linksProjects">
                                    <a href={`${singleP.enlaceRepositorio}`} aria-hidden="true" target="_blank" rel="noopener noreferrer">Enlace al repositorio</a>
                                    <a href={`${singleP.enlaceVista}`} aria-hidden="true" target="_blank" rel="noopener noreferrer">Enlace al sitio</a>
                                </div>
                            </div>
                            {/* <div className="imgProjects">
                                <img src={singleP.imagenProyecto}alt='Imagen de proyecto'/>
                            </div> */}
                        </div>
                        )}
                </div>
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