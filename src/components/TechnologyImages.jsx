function TechnologyImages({name, category, hours, image}){
    return (
        <section className="border">
            <img className="technologies" src={image} alt={name} />
            <h3>{name}</h3>
            <img src={`${category.replace(" ", "_").toLowerCase()}.webp`} alt={category} />
            <p>Liczba godzin: {hours}</p>
        </section>
    )
}

export default TechnologyImages;