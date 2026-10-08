function InfoBox({name, index}){
    return (
        <button onClick={() => technologyName(name, index)}>{name}</button>
    )
}

function technologyName(name, index){
    console.log(`Kliknięto technologię o indeksie ${index}: ${name}`);
}

export default InfoBox;