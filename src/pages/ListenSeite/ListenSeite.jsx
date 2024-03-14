import "./ListenSeite.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const ListenSeite = () => {
const [ListenSeite, setListenSeite] = useState();

useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then((res) => res.json())
    .then((data) => setListenSeite(data))
    .catch((err) => ("Fehler beim laden...", err));
}, []);



    return (
        <>

        <section className="liste"> 
        {ListenSeite ? (ListenSeite.map((item, index) => (
            <div key={index}>
                <div className="left"><img src={item.image_url}  /></div>
                <div className="right">
                <h1 className="title-list">{item.name}</h1>
                <h3 className="tagline">{item.tagline}</h3>
                <h4 className="created">{item.contributed_by}</h4>
                <Link className="button" to={`/ProduktSeite/${item._id}`}>Details</Link>
                </div>
            </div>)) 
            
            ) : (
            <p>Seite Lädt...</p>
            )}
    </section> 

    <section className="navbar">
            <nav >
                <Link to="/"><img src="src/assets/Bilder/Logo.svg" alt="" /></Link>
            </nav>
        </section>
    </>
    );
};

export default ListenSeite;