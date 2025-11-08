export const courses = [ //ovo je array sa objektima unutar
  {
    id: 1,
    title: "React 101",
    category: "Frontend",
    level: "Beginner",
    durationHours: 12,
    shortDescription: "Uvod u React i komponentni pristup.",
    longDescription:
      "Detaljan uvod u JSX, komponente, props, state, evente i osnovni lifecycle. Praktični mini-projekti.",
    price: 129,
    image: "https://placehold.co/600x400?text=React+101",
    startDates: ["2025-11-01", "2025-12-05"]
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    category: "Frontend",
    level: "Advanced",
    durationHours: 16,
    shortDescription: "Napredni patterni, context, hooks, performance.",
    longDescription:
      "Context API, custom hooks, memoizacija, useReducer, code splitting, performance i arhitektura.",
    price: 199,
    image: "https://placehold.co/600x400?text=React+Patterns",
    startDates: ["2025-11-15", "2026-01-10"]
  },
  {
    id: 3,
    title: "Node.js API Fundamentals",
    category: "Backend",
    level: "Beginner",
    durationHours: 14,
    shortDescription: "REST API osnove u Node.js.",
    longDescription:
      "Express, routing, middleware, validacija, autorizacija, rad s bazom (mock).",
    price: 149,
    image: "https://placehold.co/600x400?text=Node+API",
    startDates: ["2025-11-08", "2025-12-20"]
  },
  {
    id: 4,
    title: "TypeScript for React Devs",
    category: "Frontend",
    level: "Intermediate",
    durationHours: 10,
    shortDescription: "TypeScript osnove u React projektima.",
    longDescription:
      "Tipovi, generici, tipiziranje propsa i custom hookova, integracija u build.",
    price: 159,
    image: "https://placehold.co/600x400?text=TS+for+React",
    startDates: ["2025-11-22", "2026-01-24"]
  },
  {
    id: 5,
    title: "DevOps Basics",
    category: "DevOps",
    level: "Beginner",
    durationHours: 8,
    shortDescription: "CI/CD osnove i deployment koncepti.",
    longDescription:
      "Pipelines, build, test, deploy pojmovi, env varijable i tajne (teorijski pregled).",
    price: 99,
    image: "https://placehold.co/600x400?text=DevOps+Basics",
    startDates: ["2025-11-29"]
  },
  {
    id: 6,
    title: "UI/UX for Developers",
    category: "Design",
    level: "Beginner",
    durationHours: 6,
    shortDescription: "Principi dizajna za developere.",
    longDescription:
      "Tipografija, boje, kontrast, layout, heuristike, dizajn komponenata.",
    price: 89,
    image: "https://placehold.co/600x400?text=UI%2FUX",
    startDates: ["2025-12-10"]
  },
  {
    id: 7,
    title: "Data for Web Devs",
    category: "Data",
    level: "Intermediate",
    durationHours: 12,
    shortDescription: "Rad s API-jem, grafovi i vizualizacija.",
    longDescription:
      "Fetch, paginacija, grafovi (osnove), cache strategije (teorijski).",
    price: 139,
    image: "https://placehold.co/600x400?text=Data+Basics",
    startDates: ["2025-12-03"]
  },
  {
    id: 8,
    title: "Fullstack Project Day",
    category: "Fullstack",
    level: "Advanced",
    durationHours: 20,
    shortDescription: "Cjelodnevni hands-on fullstack projekt.",
    longDescription:
      "Planiranje, taskovi, podjela rada, integracija front+back (mock).",
    price: 249,
    image: "https://placehold.co/600x400?text=Fullstack+Day",
    startDates: ["2026-01-17"]
  }
];
