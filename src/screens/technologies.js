import React, {useState} from 'react';
function Technologies(props) {
    const [technologies, setTechnologies] = useState([]);
    const [technology, setTechnology] = useState('');
    const addTechnology = (e) => {
        e.preventDefault();
        setTechnologies([
            ...technologies,
            {
                id: technologies.length,
                name: technology
            }
        ]);
        setTechnology('');
        console.log(technologies);
    }
    console.log(props);
    return (
        <React.Fragment>
            <form onSubmit={addTechnology}>
                <label>Add Technology: 
                    <input name="technology" value={technology} onChange={(event) => setTechnology(event.target.value)} /></label>
            </form>
            <ul>
                {technologies.length ? technologies.map(technology => (
                    <li key={technology.id}>{technology.name}</li>
                )) : <React.Fragment></React.Fragment>}
            </ul>
        </React.Fragment>
    );
}
export default Technologies;