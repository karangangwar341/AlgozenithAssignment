import React from 'react';
import { AiFillDashboard, AiOutlineBook, AiFillStar } from 'react-icons/ai';
import { MdForum, MdLeaderboard } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-6 flex flex-col space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">AlgoZenith</h2>
      <ul className="flex flex-col space-y-4">
        <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
          <AiFillDashboard className="mr-3" /> Dashboard
        </li>
        <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
          <AiOutlineBook className="mr-3" /> Learn
        </li>
        <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
          <MdForum className="mr-3" /> Forums
        </li>
        <li className="flex items-center text-blue-500 font-medium cursor-pointer">
          <FaChalkboardTeacher className="mr-3" /> Upskill
        </li>
        <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
          <AiFillStar className="mr-3" /> Contest
        </li>
        <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
          <MdLeaderboard className="mr-3" /> Leaderboard
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
