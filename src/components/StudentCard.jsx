function StudentCard(props){
    return (
        <article className="student-card">
            <h2>{props.student.firstName} {props.student.lastName}</h2>
            <p>Klasa: {props.student.className}</p>
            <p>Specjalizacja: {props.student.specialization}</p>
            <p>Średnia: {props.student.gradesAverage}</p>
        </article>
    )
}

export default StudentCard;aaa