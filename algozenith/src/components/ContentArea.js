import React, { useState } from 'react';
import ChapterList from './ChapterList';
import PartList from './PartList';

function ContentArea() {
  const [selectedChapter, setSelectedChapter] = useState(1);

  return (
    <div className="flex-1 p-8 bg-gray-100">
      <div className="flex items-center space-x-4 mb-6">
        <button className="px-4 py-2 bg-white text-gray-600 rounded-md shadow-sm font-medium hover:bg-gray-50">Mentor Sessions</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm font-medium">Learning Material</button>
        <button className="ml-auto text-gray-500 hover:text-gray-700">How it works</button>
      </div>
      <div className="flex">
        <ChapterList selectedChapter={selectedChapter} setSelectedChapter={setSelectedChapter} />
        <PartList selectedChapter={selectedChapter} />
      </div>
    </div>
  );
}

export default ContentArea;
