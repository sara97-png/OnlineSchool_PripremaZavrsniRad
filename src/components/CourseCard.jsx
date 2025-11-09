import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css"

export default function CourseCard({ course }) {
  const {
    id,
    image,
    title,
    category,
    level,
    durationHours,
    shortDescription,
    price,
  } = course; //prosljeđujemo sve iz courses.jsx šta želimo da nam je na kartici

  return(
    <div className="card">
        <img src={image} alt={title} />
        <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">
            <span className="pill">{category}</span>
            <span className="pill">{level}</span>
            <span className="pill">{durationHours}h</span>
        </p>
        <p>{shortDescription}</p>
        <div className="card-bottom">
        <span className="price">{price}EUR</span>
        <Link to={`/courses/${id}`} className="btn">Detalji</Link>
        </div>
        </div>
    </div>
  )
}
