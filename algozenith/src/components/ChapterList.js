import React from 'react';

function ChapterList({ selectedChapter, setSelectedChapter }) {
  const chapters = [
    { id: 1, title: 'Chapter 1', duration: '05:00:00' },
    { id: 2, title: 'Chapter 2', duration: '03:30:00' },
    // Additional chapters
  ];

  return (
    <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          className={`p-3 rounded-md flex items-center justify-between cursor-pointer mb-2 ${
            selectedChapter === chapter.id ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600'
          }`}
          onClick={() => setSelectedChapter(chapter.id)}
        >
          <span>{chapter.title}</span>
          <span className="text-sm">{chapter.duration}</span>
        </div>
      ))}
    </div>
  );
}

export default ChapterList;
