function Book(props){
    return (
        <>
            <h2>{props.title}</h2>
            <p>Autor: {props.author}</p>
        </>
    )
}

export default Book;