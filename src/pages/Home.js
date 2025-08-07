import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TeamBar from '../components/Teambar';
import Feed from '../components/Feed';
import CreatePost from '../components/CreatePost';
import '../styles/homepage.css';

const Home = () => (
  <div className="home-bg">
    <Navbar />
    <div className="home-main">
      <Sidebar />
      <main className="main-feed">
        <CreatePost />
        <Feed />
      </main>
      <TeamBar />
    </div>
  </div>
);

export default Home;
