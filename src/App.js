// src/App.js
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import TechNews from "./pages/TechNews";
import TechMemes from "./pages/TechMemes";
import TechProjects from "./pages/TechProjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/tech-news" element={<TechNews />} />
        <Route path="/tech-memes" element={<TechMemes />} />
        <Route path="/projects" element={<TechProjects />} />

    </Routes>
  );
}
export default App;
