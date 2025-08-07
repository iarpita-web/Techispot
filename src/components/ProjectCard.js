import React from "react";
import "../styles/projectcard.css";

function ProjectCard({ project }) {
  const updatedDate = new Date(project.updatedAt).toLocaleDateString();

  return (
    <div className="project-card">
      <div className="project-img-box">
        <img src={project.image} alt={project.title} className="project-img" />
      </div>
      <div className="project-info">
        <div className="project-title">{project.title}</div>
        <div className="project-desc">{project.description}</div>
        <div className="project-meta">
          <span className="project-owner">By: {project.owner}</span>
          <span className="project-date">Updated: {updatedDate}</span>
        </div>
        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span className="project-tag" key={idx}>#{tag}</span>
          ))}
        </div>
        <a
          href={project.link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
