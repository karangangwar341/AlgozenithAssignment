import React from 'react';
import PartDetail from './PartDetail';

const PartsList = () => {
  const partsData = [
    {partId: "1", partTitle: 'Lorem Ipsum Dolor Sit Amet', time: '02:00:00', sheets: '5', difficulty: 'Medium', completed: 45 },
    { partId: "2", partTitle: 'Lorem Ipsum Dolor Sit Amet', time: '02:00:00', sheets: '1', difficulty: 'Medium', completed: 20 },
    { partId: "3", partTitle: 'Lorem Ipsum Dolor Sit Amet', time: '02:00:00', sheets: '8', difficulty: 'Medium', completed: 0 },
  ];

  return (
    <div className="w-full h-auto border [background:#FFF] rounded-2xl border-solid border-[rgba(164,230,255,0.00)]">
      {partsData.map((part, index) => (
        <PartDetail key={index} {...part} />
      ))}
    </div>
  );
};

export default PartsList;
