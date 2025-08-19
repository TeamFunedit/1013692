import React from 'react';

const VideoCard = ({ video, onClick }) => {
  return (
    <div 
      className="cursor-pointer group"
      onClick={() => onClick(video)}
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg group-hover:rounded-none transition-all duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="flex mt-3 space-x-3">
        <img 
          src={video.channelAvatar} 
          alt={video.channel}
          className="w-9 h-9 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
          <div className="text-sm text-gray-600 flex items-center space-x-2">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.uploadTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;