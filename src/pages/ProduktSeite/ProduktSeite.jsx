import "./ProduktSeite.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProduktSeite = () => {
const [data, setData] = useState([]);
const [filterData, setfilterData] = useState([]);

useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/")
    .then((res) => res.json())
    .then((fetchData) => setData(fetchData))
    .catch((err) => ("Fehler beim Laden", err));
}, [])

const { _id } = useParams();


useEffect(() => {
    const find = data.find((item) => (item._id) === (_id));
    setfilterData(find);
}, [data]);

    return ( 
        <> 
        <section className="produkt-seite">
        {filterData ? (
            <div>
            <img src={filterData.image_url} alt="" />
            <h1>{filterData.name}</h1>
            <p>{filterData.tagline}</p>
            <h3>{filterData.contributed_by}</h3>
            <p>{filterData.description}</p>
        </div>
        ) : (  
            <p>Laden...</p>
        )}
        <div className="back">
            <Link to="/ListenSeite"><p>Zurück</p></Link>
        </div>
        </section>
        

        <section className="navbar">
            <nav >
                <Link to="/"><img src="src/assets/Bilder/Logo.svg" alt="" /></Link>
            </nav>
        </section>
        </>
);
};

export default ProduktSeite;