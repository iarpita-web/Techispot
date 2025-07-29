// src/pages/TechProjects.js
import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects";
import "../styles/techprojects.css";

const TechProjects = () => (
  <div className="techprojects-bg">
    <Navbar />
    <main className="techprojects-container">
      <h2 className="techprojects-heading">Tech Projects</h2>
      {projectsData.map(project => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </main>
  </div>
);

export default TechProjects;
