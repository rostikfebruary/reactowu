const Character2 = (characters2) => {
    const {id, name, status, species, gender, image} = characters2;
    return (
        <div>
            <h1>Rick and Morty Multiverse</h1>
            <h1>{id} {name}</h1>
            <ul>
                <li>{status}</li>
                <li>{species}</li>
                <li>{gender}</li>
            </ul>

            <img src={image} alt={name}/>

        </div>
    );
};

export {Character2};