import './Studies.css'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {getAllStudies} from '../studies';
import {Link} from "react-router-dom";

function Studies(){
    const myStudies=getAllStudies();

    return(
        <div>
            <Navbar/>
            <section className='sectionCards'>
                <div className='cardImage'>
                    {myStudies.map(item=>
                        <div className='cardStudy' key={item.id}>
                            <h3>{item.institucion}</h3>
                            <p>{item.titulo}</p>
                            <Link to={`${item.id}`} className='link'>Ver más</Link>
                        </div>
                    )}
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Studies;