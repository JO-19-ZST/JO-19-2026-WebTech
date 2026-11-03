import { useState } from "react";

function TechnologyImages({name, category, hours, image}){
    const [likes, setLikes] = useState(0);
    const [isLearning, setIsLearning] = useState(false);
    const [visible, setVisible] = useState(false);

    function toggleDetails(){
        setVisible(!visible);
    }
    return (
        <section className="border">
            <img className="technologies" src={image} alt={name} />
            <h3>{name}</h3>
            {visible && <div>
                <img src={`${category.replace(" ", "_").toLowerCase()}.webp`} alt={category} />
                <p>Liczba godzin: {hours}</p>
            </div>}
            <p>Polubienia: {likes}</p>
            <p>{isLearning ? "Uczę się" : "Jeszcze się nie uczę"}</p>
            <button onClick={() => setLikes(likes + 1)}>Lubię</button>
            <button onClick={() => setLikes(0)}>Reset</button>
            <button onClick={() => setIsLearning(!isLearning)}>Zmień status nauki</button>
            <button onClick={toggleDetails}>{visible ? "Ukryj szczegóły" : "Pokaż szczegóły"}</button>
        </section>
    )
}

export default TechnologyImages;