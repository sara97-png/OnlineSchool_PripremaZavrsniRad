import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import "./Courses.css"

const sorts = [
  { value: "price-asc", label: "Cijena ⬆️" },
  { value: "price-desc", label: "Cijena ⬇️" },
  { value: "title-asc", label: "Naziv A-Z" },
  { value: "title-desc", label: "Naziv Z-A" },
];

export default function Courses() {
  const categories = [...new Set(courses.map((c) => c.category))]; //ovaj category se dohvaća iz courses.jsx
  const levels = [...new Set(courses.map((c) => c.level))]; //ovaj level se dohvaća iz courses.jsx

  const [query, setQuery] = useState(""); {/*ovo su sve defaultovi, kako izgledaju filteri*/}
  const [category, setCategory] = useState("Svi");
  const [level, setLevel] = useState("Svi");
  const [sort, setSort] = useState("price-asc");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    //Dohvat query string parametara preko useSearchParams hooka
    const urlCat = decodeURIComponent(searchParams.get("category"));
    const urlQuery = decodeURIComponent(searchParams.get("query"));
    const urlLevel = decodeURIComponent(searchParams.get("level"));
    const urlSort = decodeURIComponent(searchParams.get("sort"));

    if(urlCat && urlCat != "null") setCategory(urlCat);
    if(urlQuery && urlQuery != "null") setQuery(urlQuery); //da ne vraća null, stavljamo ovaj && i provjeravamo
    if(urlLevel && urlLevel != "null") setLevel(urlLevel);
    if(urlSort && urlSort != "null") setSort(urlSort);
  }, [])
  

  useEffect(() => {
    let params = {};
    if(category) params.category = category;
    if(query) params.query = query;
    if(level) params.level = level;
    if(sort) params.sort = sort;
    //Postavljanje query parametara preko useSearchParams hooka
    setSearchParams(params, {replace: true});
  
  }, [query, category, level, sort])

  //Filtriranje i sortiranje kada se koristi - koristi useMemo radi performansi, useMemo će izračunati filtered (filtriranu listu), ali samo ako se promijeni query, category, level ili sort
  const filtered = useMemo(() => {
    let result = courses.filter((c) => 
        (query ? c.title.toLowerCase().includes(query.toLowerCase()) : true) &&
    (category === "Svi" ? true : c.category === category) &&
    (level === "Svi" ? true : c.level === level)
    ); //dobro će nam doć kaže on (prvo provjera je li postoji ako postoji onda upali te filtere, ako ga u JS ne želimo ubacit stavimo samo true)

    if(sort === "price-asc") result.sort((a, b) => a.price - b.price) //ako je ascending
    if(sort === "price-desc") result.sort((a, b) => b.price - a.price) //ako je descending
    if(sort === "title-asc") result.sort((a, b) => a.title.localeCompare(b.title));
    if(sort === "title-desc") result.sort((a, b) => b.title.localeCompare(a.title));
    return result;
  }, [query, category, level, sort]);


  return (
    <section className="courses container">
      <h1>Tečajevi</h1>
      <div className="filters">
        <input
          type="text"
          className="search"
          placeholder="Pretraži po naslovu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} //e.target.value uzima tekst koji korisnik trenutno upisuje.
        />
        <div className="subfilters">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)} //isto ka gori napravili
          >
            <option value="Svi">Svi</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>{/* tu smo prosljedili varijablu level u select */}
            <option value="Svi">Svi</option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}{" "}
                {/*tu dodajemo ove .value i .label jer je u pitanju objekt pa se zato po tome razlikuje od prošlog*/}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filtered.length > 0 ?  
      <div className="grid"> {/*ovde nam triba profiltrirana lista tečajeva*/}
        {filtered.map((c) => (
            <CourseCard key={c.id} course={c} /> //povezali kartice
        ))}
      </div> : <p className="muted">Nema rezultata za zadane filtere</p>} {/*U slučaju da tražiš nešto čega nema*/}
     </section>
  );
}
