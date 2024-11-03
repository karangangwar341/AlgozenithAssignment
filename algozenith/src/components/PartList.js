import React from 'react';
import PartDetail from './PartDetail';

const PartsList = () => {
  const partsData = [
    { partTitle: 'PART 1 - Lorem Ipsum Dolor Sit Amet', time: '02:00:00', difficulty: 'Medium', completed: 45 },
    { partTitle: 'PART 2 - Lorem Ipsum Dolor Sit Amet', time: '02:00:00', difficulty: 'Medium', completed: 20 },
    { partTitle: 'PART 3 - Lorem Ipsum Dolor Sit Amet', time: '02:00:00', difficulty: 'Medium', completed: 0 },
  ];

  return (
    <div className="p-4">
      {partsData.map((part, index) => (
        <PartDetail key={index} {...part} />
      ))}
    </div>
  );
};

export default PartsList;
