import React from 'react';
import Post from './Post';
import samplePost from '../data/samplePost';
import '../styles/feed.css';

function Feed() {
  const localPosts = JSON.parse(localStorage.getItem('feedPosts'));
  const posts = Array.isArray(localPosts) && localPosts.length > 0
    ? localPosts
    : [samplePost, samplePost, samplePost];
  const [updatedPosts, setUpdatedPosts] = React.useState(posts);

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
