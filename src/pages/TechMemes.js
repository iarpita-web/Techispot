// src/pages/TechMemes.js
import React from "react";
import Navbar from "../components/Navbar";
import MemeCard from "../components/MemeCard";
import memesData from "../data/memesData";
import "../styles/tech-meme.css";


const TechMemes = () => (
  <div className="techmemes-bg">
    <Navbar />
    <main className="techmemes-container">
      <h2 className="techmemes-heading">Tech Memes</h2>
      {memesData.map(meme => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </main>
  </div>
);

export default TechMemes;
