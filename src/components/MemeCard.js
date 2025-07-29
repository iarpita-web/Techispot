import React from "react";
import "../styles/memecard.css"; 

function MemeCard({ meme }) {
  const date = new Date(meme.postedAt).toLocaleDateString();

  return (
    <div className="meme-card">
      <h3 className="meme-title">{meme.title}</h3>
      {meme.caption && <div className="meme-caption">{meme.caption}</div>}
      <div className="meme-footer">
        <span className="meme-date">{date}</span>
        <span className="meme-poster">Posted by: {meme.postedBy}</span>
      </div>
    </div>
  );
}

export default MemeCard;
