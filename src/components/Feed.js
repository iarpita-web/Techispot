import React from 'react';
import Post from './Post';
import samplePost from '../data/samplePost';
import '../styles/feed.css';

function Feed() {
  const posts = [samplePost, samplePost, samplePost]; // Show multiple cards for demo

  return (
    <div className="feed-outer">
      <div className="feed-cards">
        {posts.map((post, idx) => (
          <div className="feed-card" key={idx}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
