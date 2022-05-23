import './Study.css'
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getStudy } from "../../studiesdb";

function Study(){
    const params=useParams();
    const theItem=getStudy(parseInt(params.id));
    return(
        <div>
            <Navbar/>
            <section className='DetailContent'>
                <h2>Detalle académico</h2>

                <div className='allInformation'>
                    <p className='firstTittle'> {theItem.institucion}</p>
                    <p className='SecondTittle'> {theItem.titulo}</p>
                    <div className='space'>
                        <div className='contentDivisor'>
                            <span>Nombre del programa académico:</span>
                            <p>{theItem.nombre}</p>
                            <span>Fecha de inicio:</span>
                            <p>{theItem.fechaInicio}</p>
                            <span>Fecha de finalización:</span>
                            <p>{theItem.fechaFinalizacion}</p>
                        </div>
                        <div className='cardImageLeft'></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Study;