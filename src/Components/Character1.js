const Character1 = ({character}) => {
    const {name, img, surname, age, info} = character
    console.log(character)
    return (
        <div>
            <h1>{name} {surname} - {age}</h1>
            <p>{info}</p>
            <img className={'photo'}
                src={img}
                alt={name}/>

        </div>

    );
};

export {Character1};