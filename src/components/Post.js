// src/components/Post.js
import React, { useState } from 'react';
import { FaHeart, FaRegComment, FaShareAlt, FaRegBookmark } from 'react-icons/fa';
import UserProfile from './UserProfile';
import Comment from './Comment';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [likedHover, setLikedHover] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const styles = {
    // Removed card styles since parent div is already a card

    description: {
      fontSize: '1.05rem',
      lineHeight: 1.6,
      marginTop: 16,
      marginBottom: 20,
      color: '#e1e8f7',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    postImage: {
      width: '100%',
      maxHeight: 320,
      borderRadius: 16,
      objectFit: 'cover',
      boxShadow: '0 4px 25px rgba(32, 52, 102, 0.45)',
    },
    actionsRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '2.1rem',
      marginBottom: 12,
      fontSize: '1.15rem',
      color: '#7a8ca3',
      userSelect: 'none',
      marginTop: '1.1rem',
    },
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      color: '#7a8ca3',
      background: 'none',
      border: 'none',
      fontSize: '1.12rem',
      padding: '.28rem .75rem',
      borderRadius: 8,
      transition: 'background 0.19s, color 0.19s, box-shadow 0.14s',
    },
    iconBtnActive: {
      color: '#33b9fc',
      background: 'rgba(23, 184, 251, .12)',
      boxShadow: '0 0 4px #0297e3',
    },
    tagsContainer: {
      marginTop: 12,
      marginBottom: 6,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
    },
    tag: {
      background: '#2b3449',
      color: '#54a8ff',
      padding: '4px 12px',
      borderRadius: 18,
      fontWeight: '600',
      fontSize: '0.85rem',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'background-color 0.25s',
    },
    metaInfo: {
      fontSize: '0.82rem',
      color: '#7a8ca3',
      marginBottom: 14,
      marginTop: 10,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    commentsTitle: {
      marginTop: 24,
      marginBottom: 12,
      fontWeight: '700',
      fontSize: '1.2rem',
      color: '#8abaf7',
      borderBottom: '2px solid #2e407e',
      paddingBottom: 6,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    commentsContainer: {
      marginTop: 12,
    },
  };

  return (
    <div>
      {/* Profile Section */}
      <UserProfile user={post.userProfile} showFollow={post.userProfile.followBtn} />

      {/* Description */}
      <p style={styles.description}>{post.userPost.discription}</p>

      {/* Post Image */}
      {post.userPost.postImage && (
        <img
          src={post.userPost.postImage}
          alt={post.userPost.alt}
          style={styles.postImage}
        />
      )}

      {/* Action Bar */}
      <div style={styles.actionsRow}>
        <button
          style={{
            ...styles.iconBtn,
            ...(likedHover ? styles.iconBtnActive : {}),
          }}
          onClick={() => setLikes(likes + 1)}
          onMouseEnter={() => setLikedHover(true)}
          onMouseLeave={() => setLikedHover(false)}
          aria-label="Like"
        >
          <FaHeart size={20} />
          <span>{likes}</span>
        </button>

        <button
          style={{
            ...styles.iconBtn,
            ...(showComments ? styles.iconBtnActive : {}),
          }}
          onClick={() => setShowComments(s => !s)}
          aria-label="Show comments"
        >
          <FaRegComment size={20} />
          <span>{post.comments.length}</span>
        </button>

        <button style={styles.iconBtn} aria-label="Share">
          <FaShareAlt size={18} />
        </button>

        <button style={styles.iconBtn} aria-label="Bookmark">
          <FaRegBookmark size={18} />
        </button>
      </div>

      {/* Tags */}
      <div style={styles.tagsContainer}>
        {post.tags.map(tag => (
          <span
            key={tag}
            style={styles.tag}
            title={`Tag: ${tag}`}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Meta Info */}
      <div style={styles.metaInfo}>
        Posted: {new Date(post.timestamp).toLocaleString()}
        {post.location && ` | Location: ${post.location}`}
      </div>

      {/* Comments Section */}
      {showComments && (
        <div style={{ marginTop: 20 }}>
          <hr
            style={{
              border: 'none',
              borderTop: '1px solid #374963',
              marginBottom: 12,
              maxWidth: 800,
            }}
          />
          <h4 style={styles.commentsTitle}>Comments</h4>
          {post.comments.map((comment, idx) => (
            <Comment comment={comment} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
