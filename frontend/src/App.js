import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import VideoPlayer from './components/VideoPlayer';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentVideo(null); // Go back to home when searching
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  const handleBackToHome = () => {
    setCurrentVideo(null);
  };

  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-white">
        <Header onMenuToggle={handleMenuToggle} onSearch={handleSearch} />
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-16'}`}>
          {currentVideo ? (
            <VideoPlayer 
              video={currentVideo} 
              onBack={handleBackToHome}
            />
          ) : (
            <HomePage 
              searchQuery={searchQuery}
              onVideoClick={handleVideoClick}
            />
          )}
        </main>
        
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;