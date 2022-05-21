import './Study.css'
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getStudy } from "../../studiesdb";
import logoKuepa from './Kuepa.jfif'

function Study(){
    const params=useParams();
    const theItem=getStudy(parseInt(params.id));
    return(
        <div>
            <Navbar/>
            
            <h2>Detalle académico</h2>
            <section className='DetailContent'>
                <div className='allInformation'>
                    <h3> <span>Nombre de la Institución</span> {theItem.institucion}</h3>
                    <h4> <span>Titulo académico</span> {theItem.titulo}</h4>
                    <p> <span>Nombre del programa académico</span> {theItem.nombre}</p>
                    <p> <span>Fecha de inicio</span> {theItem.fechaInicio}</p>
                    <p> <span>Fecha de finalización</span> {theItem.fechaFinalizacion}</p>
                </div>
                <div className='image'>
                    <img src={logoKuepa} className='KuepaLogo' alt='Logo de Kuepa'></img>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Study;