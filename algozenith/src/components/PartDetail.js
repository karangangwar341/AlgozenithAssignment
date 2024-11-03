import React, { useState } from 'react';
import { AiOutlineClockCircle, AiOutlineFileText, AiOutlineQuestionCircle, AiOutlineCode, AiOutlineFolder } from 'react-icons/ai';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const PartDetail = ({ partTitle, time, difficulty, completed }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      {/* Part Header */}
      <div className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer" onClick={toggleExpand}>
        <div className="text-lg font-semibold">{partTitle}</div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-gray-600">
            <AiOutlineClockCircle /> {time}
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <AiOutlineFileText /> {difficulty}
          </span>
          <span className="text-gray-600">{completed}% Completed</span>
          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
        </div>
      </div>

      {/* Part Details - Conditionally Rendered */}
      {isExpanded && (
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <AiOutlineClockCircle /> Video 1
            </span>
            <span>10:00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <AiOutlineFileText /> Article 1
            </span>
            <span>10:00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <AiOutlineQuestionCircle /> Quiz 1
            </span>
            <span>10:00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <AiOutlineCode /> Coding Exercise 1
            </span>
            <span>10:00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <AiOutlineFolder /> Combined Resource 1
            </span>
            <span>10:00</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartDetail;
