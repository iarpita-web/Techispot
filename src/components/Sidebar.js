// src/components/Sidebar.js
import React, { useState } from 'react';
import initialCommunities from '../data/initialCommunities'; // Import initial communities data

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [newCommunity, setNewCommunity] = useState('');
  const [newName, setNewName] = useState('');
  const [newMembers, setNewMembers] = useState('');
  const stored = JSON.parse(localStorage.getItem('communities'));
  const [communities, setCommunities] = useState(stored || initialCommunities);


  const handleAddCommunity = e => {
    e.preventDefault();
    setShowModal(false);
    addCommunity(newCommunity, 1);
  };

  const addCommunity = (name, members) => {
    setCommunities(prev => [...prev, { name, members }]);
    localStorage.setItem('communities', JSON.stringify(communities));
    setNewName('');
    setNewMembers('');
    setShowModal(false);
  };

  return (
    <aside className="sidebar" style={{ position: 'relative' }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: '0.5rem' }}>
        <h3 className="sidebar-title" style={{ margin: 0 }}>Community</h3>
        <button
          aria-label="Add community"
          onClick={() => setShowModal(true)}
          style={{
            background: "none",
            border: "none",
            padding: "0.1rem 0.3rem",
            fontSize: "1.5rem",
            color: "#42e3fa",
            cursor: "pointer",
            borderRadius: '8px',
            lineHeight: 1,
            outline: showModal ? "2px solid #42e3fa" : 'none'
          }}
        >
          +
        </button>
      </div>
      <div className="community-list">
        {communities.map((c, i) => (
          <div className="community-card" key={i}>
            <div className="community-icon" />
            <div>
              <div className="community-name">{c.name}</div>
              <div className="community-members">{c.members} Members</div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(20,24,30,.65)",
            zIndex: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            className="modal-content"
            style={{
              background: "#23242b",
              borderRadius: "12px",
              padding: "2rem 1.5rem 1.2rem",
              minWidth: 310,
              boxShadow: "0 8px 32px rgba(5,20,40,.27)",
              color: "#f5faff",
              textAlign: "center"
            }}
          >
            <h4 style={{ color: "#41c9f5", marginBottom: 18, fontWeight: 600 }}>Add Community</h4>
            <form onSubmit={handleAddCommunity}>
              <input
                type="text"
                placeholder="Community name"
                value={newCommunity}
                onChange={e => setNewCommunity(e.target.value)}
                style={{
                  padding: "0.7rem 1rem",
                  border: "none",
                  borderRadius: "6px",
                  background: "#181a22",
                  color: "#e6f4fc",
                  fontSize: "1rem",
                  width: "100%",
                  marginBottom: 18,
                  outline: "none"
                }}
                autoFocus
                maxLength={32}
                required
              />
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button
                  type="submit"
                  style={{
                    padding: "0.6rem 1.6rem",
                    background: "linear-gradient(90deg,#35d1fd,#7ad9fc)",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: 600,
                    color: "#23242b",
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    padding: "0.6rem 1.6rem",
                    background: "#23242b",
                    border: "1.5px solid #67ccf9",
                    borderRadius: "6px",
                    fontWeight: 500,
                    color: "#67ccf9",
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
