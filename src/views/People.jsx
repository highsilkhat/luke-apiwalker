import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";

const People = (props) => {
    const { num } = useParams();
    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setPerson({});
        axios.get(`https://swapi.dev/api/people/${num}`)
            .then(res => {
                console.log(res)
                setPerson(res.data)

            })

            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [num])

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    if (!person.name) {
        return (
            <Error />
        )
    }
    return (

        <div>

            <h1> {person.name} </h1>

            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    );
}

export default People