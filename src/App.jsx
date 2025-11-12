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
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Banner from "./components/Banner";


export default function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/categories" element={<Categories/>} />
          <Route path="/courses/:id" element={<CourseDetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
