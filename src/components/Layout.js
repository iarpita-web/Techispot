// src/pages/Layout.js
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        {/* Style (sidebar/topbar) */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tech-news">Tech News</Link></li>
          <li><Link to="/tech-memes">Tech Memes</Link></li>
          <li><Link to="/projects">Tech Projects</Link></li>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Layout;
