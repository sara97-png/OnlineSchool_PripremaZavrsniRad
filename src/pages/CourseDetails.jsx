import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetails() {
    const { id } = useParams();
    const course = courses.filter(c => c.id === Number(id))[0];

    if(!course) { return (
        <div className="container">
            <p>Tečaj nije pronađen</p>
            <Link to="/courses">Natrag na tečajeve</Link> {/*Ako nije kurs vrati na stranicu kurseva*/}
        </div>
    );
}
   {/*Informacije o kursevima, u koje će se preusmjerit*/}

    return(
    <section className="course-details container">
        <Link to="/courses" className="btn" style={{marginTop: 30}}>
        {"↩️ Back"}
        </Link>
        <h1>{course.title}</h1>
        <img src={course.image} alt={course.title} style={{borderRadius: 10, boxShadow: "var(--shadow)", margin: "12px 0",}} />
        <p className="muted">
            <span className="pill">{course.category}</span>
            <span className="pill">{course.level}</span>
            <span className="pill">{course.durationHours}</span>
        </p>
        <p>
        <strong>Cijena: {course.price} EUR</strong>
        </p>
        <p>
            {course.longDescription}
        </p>
        <h2>Što dobivat</h2>
        <ul>
            <li>Praktične vježbe i mini-projekte</li>
            <li>Materijale i snimke predavanje</li>
            <li>Podršku i Q&A</li>
        </ul>

        <h2>Termini</h2>
        <table>
            <thead>
                <tr>
                    <th>Datum početka</th>
                    <th>Cijena</th>
                </tr>
            </thead>
            <tbody>
                {course.startDates.map((d) => (
                    <tr key={d}>
                        <td>{d}</td>
                        <td>{course.price}EUR</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div style={{marginTop: 14}}>
            <button type="button" className="btn" onClick={() => alert("Hvala! Uskoro ćemo Vam se javiti.")}>
                Prijavi se
            </button>
        </div>
    </section>
    );
}