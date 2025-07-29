// src/pages/Layout.js
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        {/* Style or replace below with your own nav (sidebar/topbar) */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tech-news">Tech News</Link></li>
          <li><Link to="/tech-memes">Tech Memes</Link></li>
          <li><Link to="/projects">Tech Projects</Link></li>
          {/* Add more links as necessary */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Layout;
