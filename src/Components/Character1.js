const Character1 = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    console.log(character)
    return (
        <div>
            <h1>{id} {name}</h1>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img className={'photo'}
                 src={image} alt={name}/>
        </div>

    );
};

export {Character1};