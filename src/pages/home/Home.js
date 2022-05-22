import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Home.css'
import flower from './flower_container.svg'

function Home(){
    return(
        <div>
            <Navbar/>
            <section className="content">
                <div className="text">
                    <p>Hola a todos, soy</p>
                    <h1>Viviana Murillo</h1>
                    <p>Y soy programadora FrontEnd...</p>
                </div>
                <div className="flower">
                    <img src={flower} className='myflower' alt="flower"></img>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;