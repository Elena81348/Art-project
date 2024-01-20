
import Adults from "./Adults";
import Kids from "./Kids";
import { HashLink as Link} from 'react-router-hash-link';
import { animateScroll as scroll } from "react-scroll";
import { VscTriangleUp } from "react-icons/vsc";


function Classes(){
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(<div>
        <div className="container">
            <h1 className="classes"> MASTER CLASSES</h1>
        </div>
        <div className="master-container">
            <div className="master">
                <Link className="sections" to="#adults_section" >Adults</Link>
                <img src={`./Adults.jpg` }width='450px' height='300px' alt='adults' className="master-adults"/>
            </div>
            <div className="master">
                <Link className="sections" to="#kids_section" >Kids</Link>
                <img src={`./Kids.jpg` }width='450px' height='300px' alt='kids' className="master-adults"/>
            </div>
        </div>
        <section id="adults_section">
                <Adults/>
        </section>
        <section id="kids_section">
            <Kids/>
        </section>
        <div className="scroll-container">
            <VscTriangleUp className="scrolling" onClick={scrollToTop}/>
        </div>
    </div>)
}
export default Classes;