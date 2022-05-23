import './Skills.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {getAllSkills} from '../../skillsdb' 

function Skills(){

    const mySkills=getAllSkills();

    return(
        <div>
            <Navbar/>
            <section className="Skills">
                <h1>Habilidades</h1>
                <div className='spaceSkills'>
                    <div className="skillsContainer">
                        {mySkills.map(skill=>
                            <div className="skill" key={skill.id}>
                                <h4>{skill.nombreSkill}</h4>
                            </div>                        
                        )}
                    </div>
                    <div className='cardImageLeft'></div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Skills;