import React from 'react';
import UserProfile from './UserProfile';

function Comment({ comment }) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      background: '#252d42',
      borderRadius: 10,
      padding: '6px 10px',
      marginBottom: '6px',
      boxShadow: '0 2px 6px rgba(13,32,71,0.10)',
      color: '#cfd8f7',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '490px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      marginBottom: 2,
    },
    commentText: {
      fontSize: '0.72rem',
      lineHeight: 1.3,
      marginBottom: 4,
      color: '#dde6fb',
      whiteSpace: 'pre-wrap',
    },
    footer: {
      fontSize: '0.50rem',
      color: '#7288a2',
      borderTop: '1px solid #2b3550',
      paddingTop: 2,
      display: 'flex',
      justifyContent: 'space-between',
      userSelect: 'none',
    },
  };

  // Pass compact to UserProfile for a smaller avatar and name
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <UserProfile user={comment.user} showFollow={false} compact />
      </div>
      <p style={styles.commentText}>{comment.commentText}</p>
      <div style={styles.footer}>
        <span>{new Date(comment.timestamp).toLocaleString()}</span>
        <span>Likes: {comment.likes}</span>
      </div>
    </div>
  );
}

export default Comment;
