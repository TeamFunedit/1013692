import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import CategoryTabs from './CategoryTabs';
import { mockVideos, mockCategories } from '../mockData';

const HomePage = ({ searchQuery, onVideoClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState(mockVideos);

  useEffect(() => {
    let filtered = mockVideos;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(video => {
        const category = activeCategory.toLowerCase();
        return video.title.toLowerCase().includes(category) ||
               video.description.toLowerCase().includes(category);
      });
    }

    setFilteredVideos(filtered);
  }, [searchQuery, activeCategory]);

  return (
    <div className="px-6 pb-6">
      {/* Category Tabs */}
      <div className="sticky top-0 bg-white z-10 py-4">
        <CategoryTabs 
          categories={mockCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={onVideoClick}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No videos found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;