import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

import "../components/CourseCard.css";

export default function Categories() {
    const categories = [...new Set(courses.map((c) => c.category))];
    return (
        <section className="categories container">
            <h1>Kategorije</h1>
            <div className="grid">
                {categories.map((c) => (
                    <div key={c} className="card">
                    <img src={`https:placehold.co/600x300?text=${encodeURIComponent(c)}`} />
                    <div className="card-body">
                        <h3>{c}</h3>
                        <p className="muted">Pregledaj tečajeve iz kategorije: {c}</p>
                        <Link to={`/courses?category=${encodeURIComponent(c)}`} className="btn">{c}</Link>
                        </div>    
                    </div>
                ))}
            </div>
        </section>
    )

}