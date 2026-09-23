function CourseCard(){
    const course = {
        "name": "Jakub Osuch",
        "teacher": "Rafał Taraszka",
        "hours": 4,
        "completed": true
    };

    return (
        <section>
            <h2 className="red">Imię: {course.name}</h2>
            <p className="red">Nauczyciel: {course.teacher}</p>
            <p>Minuty: {course.hours * 60}</p>
            <p>Ukończono: {course.completed ? "Tak" : "Nie"}</p>
        </section>
    )
}

export default CourseCard;