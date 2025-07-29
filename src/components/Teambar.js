// src/components/TeamBar.js
import React from 'react';

const team = [
  {
    name: 'Gaurav Pandey',
    role: 'ADMIN (Creator)',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    social: [
      { type: 'linkedin', url: '#' },
      { type: 'github', url: '#' },
    ],
  },
  {
    name: 'PMA Student',
    role: 'Front End Developer',
    img: '',
    social: [
      { type: 'linkedin', url: '#' },
      { type: 'github', url: '#' },
    ],
  },
  // ...more teammates
];

const TeamBar = () => (
  <aside className="team-bar">
    <h3 className="sidebar-title">Our Team</h3>
    <div className="team-list">
      {team.map((member, i) => (
        <div className="team-card" key={i}>
          <img
            className="team-avatar"
            src={member.img || '/default-avatar.png'}
            alt={member.name}
          />
          <div>
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div>
            <div className="team-social">
              {member.social.map((link, j) =>
                <a key={j} href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${link.type}`} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

export default TeamBar;
