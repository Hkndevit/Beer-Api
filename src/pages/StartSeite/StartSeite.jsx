import Navbar from "../../Components/Navbar/Navbar";
import "./StartSeite.css"
import { Link } from "react-router-dom";


const StartSeite = () => {
    return ( 
    <section> 
        <div className="container1">
            <div><img src="src\assets\Bilder\Group 1.png" alt="" /></div>
            <div><Link Link to="/ListenSeite"><h2>All Beers</h2></Link></div>
        </div>
        <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae odite.</p></div>

        <div className="container2">
            <div><img src="src\assets\Bilder\Group 2.jpg" alt="" /></div>
            <div><Link Link to="/ProduktSeite"><h2>Random Beers</h2></Link></div>
        </div> 
        <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae odite.</p></div>
        </section>     );
}

export default StartSeite;