import React from "react";
import Accordion from "../components/Accordion";


const faqs = [
    { question: "Kako se upisati?", answer: "Odaberite tečaj i ispunite kontakt formu - javit ćemo se povratno."},
    { question: "Način plaćanje?", answer: "Kartice i bankovne uplate su podržane."},
    { question: "Jesu li materijali dostupni?", answer: "Da, dobivate pristup materijalima i snimkama."},
    { question: "Mogu li dobiti račun?", answer: "Naravno, izdajemo R1 po potrebi."},
    { question: "Trebam li imati predznanja?", answer: "Ovisi o tečaju - provjerite razinu (Begginer/Intermediate/Advanced)."},
];

export default function FAQ() {
    return (
        <section className="faq container">
            <h1>Često postavljena pitanja</h1>
            <div style={{marginTop: 12}}> {/*ispod iteriramo kroz faq-ove i redamo accordion iteme*/}
                {faqs.map((f, i) => (
                    <Accordion key={i}question={f.question} answer={f.answer}/>
                ))}
            </div>
        </section>
    )
}