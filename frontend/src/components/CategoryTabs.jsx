import React from 'react';
import { Button } from './ui/button';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex space-x-3 pb-4 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "secondary"}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 ${
            activeCategory === category 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;