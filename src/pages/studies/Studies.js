import './Studies.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {getAllStudies} from '../../studiesdb';
import {Link} from "react-router-dom";

function Studies(){
    const myStudies=getAllStudies();

    return(
        <div>
            <Navbar/>
            <section className='content'>
                <h1>Estudios</h1>
                    <div className='container'>
                        <div className='cardsInformation'>
                        {myStudies.map(item=>
                            <div className='cardStudy' key={item.id}>
                                <h3>{item.institucion}</h3>
                                <p>{item.titulo}</p>
                                <Link to={`${item.id}`} className='link'>Ver más</Link>
                            </div>
                        )}
                        </div>
                        <div className='text'>
                            <p>Soy estudiante de programación FrontEnd del programa Creando tu Futuro - Tech Power de Kuepa Edutech, tambien fui estudiante de Misión TIC segundo cohorte en la Universidad de Antiquia, en donde aprendí fundamentos de programación con Python y Java, bases relacionales y no relacionales como MySQL y MongoDB.</p>
                            <p>Soy tecnóloga en gestión logística del SENA egresada en el año 2016 y tengo experiencia en el área de servicio al cliente.</p>
                        </div>
                    </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Studies;