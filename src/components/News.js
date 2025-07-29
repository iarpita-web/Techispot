import React from 'react';
import '../styles/news.css'; 


function NewsCard({ news }) {
  const date = new Date(news.publishedAt).toLocaleDateString();

  return (
    <div className="news-card">
      <div className="news-img-box">
        <img src={news.image} alt={news.title} className="news-img" />
        <span className="news-source">{news.source}</span>
      </div>
      <div className="news-info">
        <div className="news-date">{date}</div>
        <div className="news-title">{news.title}</div>
        <div className="news-summary">{news.summary}</div>
        <a className="news-link" href={news.url} target="_blank" rel="noopener noreferrer">
          Read more &rarr;
        </a>
      </div>
    </div>
  );
}
export default NewsCard;
