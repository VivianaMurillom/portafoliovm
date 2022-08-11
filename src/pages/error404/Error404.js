import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Error404.css'
import {Link} from "react-router-dom";

function Error404(){
    return(
        <div>
            <Navbar/>
            <div className="firstPart">
                <h1>Oops!</h1>
                <h1 className="number">404</h1>
                <h1>Página no encontrada</h1>
            </div>
            <div className="SecondPart">
                <p>Te invitamos a volver al inicio...</p>
                <Link to='/portafoliovm/home' className='buttonHome'>A inicio<i class="fa-solid fa-house"></i></Link>
            </div>
            <Footer/>
        </div>
    );
}

export default Error404;