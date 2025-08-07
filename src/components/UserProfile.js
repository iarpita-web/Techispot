// src/components/UserProfile.js
import React from 'react';

function UserProfile({ user, showFollow = false }) {
  const avatarSize = 40;
  const defaultAvatar = '/default-avatar.png';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img
        src={user.userImage ? user.userImage : defaultAvatar}
        alt="User avatar"
        width={avatarSize}
        height={avatarSize}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
        onError={e => {
          // fallback in case userImage URL is broken
          e.target.onerror = null;
          e.target.src = defaultAvatar;
        }}
      />
      <span style={{ color: 'white' }}><strong>{user.userName}</strong></span>
      {showFollow && <button>Follow</button>}
    </div>
  );
}

export default UserProfile;
