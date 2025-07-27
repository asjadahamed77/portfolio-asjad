import React from 'react';
import { tools } from '../assets/assets';

const ScrollingTools = () => {
  return (
    <div className="relative overflow-hidden my-32 py-8 bg-white/5">
      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap space-x-8 ">
        {/* Duplicate tools to loop */}
        {[...tools, ...tools].map((tool, index) => (
          <div key={index} className="flex items-center gap-2 px-4">
            <img src={tool.imgFile} alt={tool.name} className="h-20 w-auto object-contain rounded-lg" />
            <p className="font-semibold text-white text-xl">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTools;