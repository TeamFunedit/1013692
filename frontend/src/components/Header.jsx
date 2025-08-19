import React, { useState } from 'react';
import { Search, Bell, User, Menu, Mic } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = ({ onMenuToggle, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-14">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onMenuToggle}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Menu className="w-6 h-6" />
          </Button>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">▶</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">YouTube</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="flex flex-1 max-w-xl">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-l-full border-gray-300 border-r-0 focus:border-blue-500 px-4 py-2 h-10"
              />
              <Button 
                type="submit"
                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 border-l-0 rounded-r-full px-6 h-10"
                variant="ghost"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-full h-10 w-10"
            >
              <Mic className="w-5 h-5 text-gray-600" />
            </Button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-100 rounded-full">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;