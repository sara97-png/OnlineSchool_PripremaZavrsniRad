import React from "react";
import {Link} from 'react-router-dom';
import CourseCard from "../components/CourseCard";
import {courses} from "../data/courses";


export default function Home() {
    const featured = [...courses].slice(0, 3) 

    return (
        <section className="home">
            <div className="hero container">
                <h1>Dobrodošli u Online Školu</h1>
                <p>Učite moderne tehnologije kroz praktične tečajeve.</p>
            </div>
        <div className="container" style={{display: "flex", gap: 10, marginTop: 12}}>
            <Link to="/courses" className="btn">Pregledaj tečajeve</Link>
            <Link to="/contact" className="btn" style={{background: "#087f5b"}}>Kontaktirajte nas</Link>
        </div>
        <div className="container">
        <h2>Izdvojeni tečajevi</h2>
        <div className="grid">
            {featured.map(c => (
                <CourseCard key={c.id} course={c}/>
            ))}
        </div>
        </div>
        </section>
    )
}