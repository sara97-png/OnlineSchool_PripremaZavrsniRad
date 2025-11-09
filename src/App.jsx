import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";



export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
