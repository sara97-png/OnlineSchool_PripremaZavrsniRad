import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    consent: false,
  });

  const [errors, setErrors] = useState({}); //za greške

  const handleChange = (e) => {
    //handle metoda za hendlanje svih podataka u kojoj ćemo destrukturirati sve šta imamo
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    })); // ako je checkbox, spremi checked (true/false), inače spremi value (tekst, broj itd)
    validate()
};

  const validate = () => {
    //validatori za greške!
    const e = {};
    if (!data.name || data.name.trim().length < 3) {
      e.name = "Unesite ime i prezime (min. 3 znaka)"; //required i min length (ima li dovoljno slova i jel napisano)
    } else {
        delete e.name
    }
    if (!data.email) {
        e.email = "Unesite email";
    } else {
        delete e.email
    }
    if (data.email && !data.email.includes("@") && !data.includes("."))
    {
      e.email = "Email format nije ispravan";
    } else {
        delete e.email
    }
    if(!data.topic) {
        e.topic = "Unesite temu"
    } else {
        delete e.topic
    }
    if(!data.message && data.message.trim().length < 10) {
        e.message = "Poruka mora imati najmanje 10 znakova"
    } else {
        delete e.message
    }
    if(!data.consent) {
        e.consent = "Potvrdite privolu"
    } else {
        delete e.consent
    }
    setErrors(e); // apliciramo u errors state objekt

    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //da ukinemo deafultno ponašanje koje bi poslalo na URL i ukinulo refresh na stranicii
    console.log("data: ", data);
    if(validate()) {
        alert("Poruka je poslana");
        setData ({
    name: "",
    email: "",
    phone: "",
    topic: "",
    consent: false,
  });

  setErrors({})
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Ime i prezime</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. Ana Anić"
          id="name"
          className={errors.name ? "field-error" : ""} //provjera greški
        />
        {errors.name && <small className="error">{errors.name}</small>}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="npr. ana@mail.com"
          id="email"
          className={errors.name ? "field-error" : ""} //provjera greški
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </div>
      <div className="field">
        <label htmlFor="phone">Telefon (opcionalno)</label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="npr. +385 99 123456"
          id="phone"
          className={errors.name ? "field-error" : ""} //provjera greški
        />
        {errors.phone && <small className="error">{errors.phone}</small>}
      </div>
      <div className="field">
        <label htmlFor="topic">Tema</label>
        <select
          name="topic"
          value={data.topic}
          onChange={handleChange}
          onBlur={handleChange}
          id="topic"
          className={errors.topic ? "field-error" : ""}
        >
          <option value="">-- Odaberite opciju --</option>
          <option value="enrollment">Upis</option>
          <option value="pricing">Cijena</option>
          <option value="schedule">Raspored</option>
          <option value="other">Ostalo</option>
        </select>
        {errors.topic && <small className="error">{errors.topic}</small>}
      </div>
      <div className="field">
        <label htmlFor="message">Poruka</label>
        <textarea
          name="message"
          id="message"
          value={data.message}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="Upišite poruku..."
          className={errors.message ? "field-error" : ""}
        ></textarea>
        {errors.message && <small className="error">{errors.message}</small>}
      </div>
      <div className="field">
        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            checked={data.consent}
            onChange={handleChange}
            onBlur={handleChange}
            className={errors.consent ? "field-error" : ""}
          />
          <span>Prihvaćam uvjete</span>
        </label>
        {errors.consent && <small className="error">{errors.consent}</small>}
      </div>
      <button type="submit" className="btn">
        Pošalji ✉︎
      </button>
    </form>
  );
}
