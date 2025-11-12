import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <section className="contact container">
            <h1>Kontakt</h1>
            <p className="muted">Imate pitanja? Pošaljite nam poruku putem forme</p>
            <ContactForm />
        </section>
    )
}