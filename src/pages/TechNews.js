// src/pages/TechNews.js
import React from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/News";
import newsData from "../data/news";
import "../styles/technews.css";

const TechNews = () => (
  <div className="technews-bg">
    <Navbar />
    <div className="technews-container">
      {/* You can add a left sidebar or trending sidebar if needed */}
      <main className="technews-main">
        <h2 className="technews-heading">Latest Tech News</h2>
        {newsData.map(news => (
          <NewsCard news={news} key={news.id} />
        ))}
      </main>
      {/* <aside className="technews-rightbar"> ... </aside> */}
    </div>
  </div>
);

export default TechNews;
