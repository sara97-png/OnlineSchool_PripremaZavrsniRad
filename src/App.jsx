import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Categories from "./pages/Categories";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import FAQ from "./pages/FAQ";


export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/categories" element={<Categories/>} />
          <Route path="/courses/:id" element={<CourseDetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
