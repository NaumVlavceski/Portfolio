import {useState} from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const Official = () => {
    const [activeSection, setActiveSection] = useState('home')
    return (
        <div>

            <div className='font-mono bg-slate-950'>
                <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
                <Hero setActiveSection={setActiveSection}/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    )
}
export default Official