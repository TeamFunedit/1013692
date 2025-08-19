import React, { useState } from 'react';
import { ArrowLeft, ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Bell } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { mockVideos, mockComments } from '../mockData';

const VideoPlayer = ({ video, onBack }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Get related videos (excluding current video)
  const relatedVideos = mockVideos.filter(v => v.id !== video.id).slice(0, 10);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      // In a real app, this would add the comment to the backend
      console.log('Adding comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-6 pb-6">
      {/* Main Video Section */}
      <div className="flex-1">
        {/* Back Button (Mobile) */}
        <Button 
          variant="ghost" 
          className="lg:hidden mb-4 p-2"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        {/* Video Player */}
        <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-4">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
              <span className="text-white text-xl ml-1">▶</span>
            </div>
          </div>
        </div>

        {/* Video Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-3">
          {video.title}
        </h1>

        {/* Video Stats and Actions */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.uploadTime}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-100 rounded-full">
              <Button variant="ghost" className="rounded-l-full px-4 py-2 hover:bg-gray-200">
                <ThumbsUp className="w-5 h-5 mr-2" />
                {video.likes}
              </Button>
              <div className="w-px h-6 bg-gray-300"></div>
              <Button variant="ghost" className="rounded-r-full px-4 py-2 hover:bg-gray-200">
                <ThumbsDown className="w-5 h-5 mr-2" />
                {video.dislikes}
              </Button>
            </div>
            
            <Button variant="ghost" className="rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
              <Share className="w-5 h-5 mr-2" />
              Share
            </Button>
            
            <Button variant="ghost" className="rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
            
            <Button variant="ghost" className="rounded-full p-2 bg-gray-100 hover:bg-gray-200">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Channel Info */}
        <div className="flex items-start justify-between bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <img 
              src={video.channelAvatar} 
              alt={video.channel}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{video.channel}</h3>
              <p className="text-sm text-gray-600">{video.subscribers} subscribers</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <Bell className="w-5 h-5" />
            </Button>
            <Button 
              className={`rounded-full px-4 py-2 ${isSubscribed ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-black text-white hover:bg-gray-800'}`}
              onClick={handleSubscribe}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-700">
            <p className={showDescription ? '' : 'line-clamp-2'}>
              {video.description}
            </p>
            <Button 
              variant="ghost" 
              className="mt-2 p-0 h-auto font-semibold text-gray-900"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? 'Show less' : 'Show more'}
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {mockComments.length} Comments
          </h3>
          
          {/* Add Comment */}
          <div className="flex space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">U</span>
            </div>
            <div className="flex-1">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="resize-none min-h-[40px] border-0 border-b border-gray-300 rounded-none focus:border-blue-500 px-0"
              />
              {newComment && (
                <div className="flex justify-end space-x-2 mt-2">
                  <Button variant="ghost" onClick={() => setNewComment('')}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddComment}>
                    Comment
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img 
                  src={comment.avatar} 
                  alt={comment.user}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-sm">{comment.user}</span>
                    <span className="text-xs text-gray-600">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-900 mb-2">{comment.comment}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <Button variant="ghost" className="p-0 h-auto">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button variant="ghost" className="p-0 h-auto">
                      <ThumbsDown className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" className="p-0 h-auto">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar - Related Videos */}
      <div className="w-full lg:w-80 xl:w-96">
        <div className="lg:hidden mb-4">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to videos
          </Button>
        </div>
        
        <h3 className="font-semibold mb-4">Up next</h3>
        <div className="space-y-3">
          {relatedVideos.map((relatedVideo) => (
            <div 
              key={relatedVideo.id}
              className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative flex-shrink-0">
                <img 
                  src={relatedVideo.thumbnail} 
                  alt={relatedVideo.title}
                  className="w-40 h-24 object-cover rounded"
                />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  {relatedVideo.duration}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-2 mb-1">{relatedVideo.title}</h4>
                <p className="text-xs text-gray-600">{relatedVideo.channel}</p>
                <div className="text-xs text-gray-600 mt-1">
                  <span>{relatedVideo.views} views</span>
                  <span className="mx-1">•</span>
                  <span>{relatedVideo.uploadTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;