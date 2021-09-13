import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Planets = (props) => {
    const { num } = useParams();
    const [planet, setPlanet] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setPlanet({})
        axios.get(`https://swapi.dev/api/planets/${num}`)
            .then(res => {
                console.log(res.data)
                setPlanet(res.data)

            })

            .catch(err => console.log(err))
            .finally(() => setLoading(false));


    }, [num])

    return (
        <>
            { 
                !planet.name ?
                    <>
                        
                        <h1> These are not the droids you are looking for</h1>
                        <img src="https://imgix.ranker.com/user_node_img/50096/1001916882/original/not-the-droids-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="404 error" />
                    </>
                    :
                    <div>
                        <h1>{planet.name}</h1>

                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Population: {planet.population}</p>
                        <p>Orbiatal Period: {planet.orbital_period} days</p>

                    </div>
            }

        </>


    );
}

export default Planets