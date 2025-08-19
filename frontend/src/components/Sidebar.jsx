import React from 'react';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Download, User, Settings, HelpCircle, Flag } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Download,
  User,
  Settings,
  HelpCircle,
  Flag
};

const Sidebar = ({ isOpen }) => {
  const mainItems = [
    { icon: 'Home', label: 'Home', active: true },
    { icon: 'Compass', label: 'Explore' },
    { icon: 'PlaySquare', label: 'Subscriptions' }
  ];

  const libraryItems = [
    { icon: 'Clock', label: 'History' },
    { icon: 'PlaySquare', label: 'Your videos' },
    { icon: 'Clock', label: 'Watch later' },
    { icon: 'ThumbsUp', label: 'Liked videos' },
    { icon: 'Download', label: 'Downloads' }
  ];

  const subscriptions = [
    { name: 'TechMaster Pro', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
    { name: 'GameZone', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
    { name: 'BeatDrops', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' }
  ];

  const bottomItems = [
    { icon: 'Settings', label: 'Settings' },
    { icon: 'Flag', label: 'Report history' },
    { icon: 'HelpCircle', label: 'Help' }
  ];

  return (
    <aside className={`fixed left-0 top-14 bottom-0 bg-white border-r border-gray-200 z-40 transition-all duration-300 ${isOpen ? 'w-60' : 'w-16'}`}>
      <div className="flex flex-col h-full overflow-y-auto py-2">
        {/* Main Navigation */}
        <div className="px-3">
          {mainItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Button
                key={item.label}
                variant="ghost"
                className={`w-full justify-start px-3 py-2 mb-1 ${item.active ? 'bg-gray-100' : ''} ${!isOpen ? 'justify-center' : ''}`}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                {isOpen && <span className="ml-6 text-sm">{item.label}</span>}
              </Button>
            );
          })}
        </div>

        {isOpen && (
          <>
            {/* Divider */}
            <hr className="my-3 border-gray-200" />

            {/* Library Section */}
            <div className="px-3">
              <h3 className="text-sm font-medium text-gray-700 mb-2 px-3">Library</h3>
              {libraryItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start px-3 py-2 mb-1"
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <span className="ml-6 text-sm">{item.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Divider */}
            <hr className="my-3 border-gray-200" />

            {/* Subscriptions */}
            <div className="px-3">
              <h3 className="text-sm font-medium text-gray-700 mb-2 px-3">Subscriptions</h3>
              {subscriptions.map((sub) => (
                <Button
                  key={sub.name}
                  variant="ghost"
                  className="w-full justify-start px-3 py-2 mb-1"
                >
                  <img 
                    src={sub.avatar} 
                    alt={sub.name}
                    className="w-6 h-6 rounded-full flex-shrink-0"
                  />
                  <span className="ml-6 text-sm truncate">{sub.name}</span>
                </Button>
              ))}
            </div>

            {/* Divider */}
            <hr className="my-3 border-gray-200" />

            {/* Bottom Items */}
            <div className="px-3 mt-auto">
              {bottomItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start px-3 py-2 mb-1"
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <span className="ml-6 text-sm">{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;