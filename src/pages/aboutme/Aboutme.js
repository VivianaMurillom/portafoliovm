import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Aboutme.css'

function About(){
    return(
        <div>
            <Navbar/>
            <section>
                <h1 className="title">Sobre Mí</h1>
                <div className="subContainer">
                    <div className="textContainer">
                        <p>Soy una persona enfocada al aprendizaje continuo, por lo cual mis habilidades van enfocadas a la mejora continua, busco mejorar en los diferentes aspectos de mi vida tambien impactando de manera benéfica con mi entorno.</p>
                    </div>
                    <div className="cardImageLeft"></div>
                </div>
            </section>
            
            <Footer/>
        </div>
    );
}

export default About;