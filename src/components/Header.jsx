import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const [resource, setResource] = useState("people")
    const [num, setNum] = useState("")
    const history = useHistory();


    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        setNum("")

        history.push(`/${resource}/${num}`)
    }

    return (
        
        <form onSubmit={onSubmitHandler}>
            <label>Search for:</label>
            <select type="select" onChange={(event) => setResource(event.target.value)} value={resource}>
                <option value="people">people</option>
                <option value= "planets">planets</option>
            </select>

            <label>ID:</label>
            <input type="number" onChange={(event) => setNum(event.target.value)} value={num} />

            <button type="submit">Search</button>
        </form>
    );
}

export default Header