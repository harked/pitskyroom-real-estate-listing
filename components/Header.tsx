
import React from 'react';
import PlusIcon from './icons/PlusIcon';

interface HeaderProps {
  onAddPropertyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddPropertyClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
            <span className="text-teal-500">PitskyRoom</span> Real Estate
          </h1>
          <button
            onClick={onAddPropertyClick}
            className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-200"
          >
            <PlusIcon className="h-5 w-5" />
            <span className="hidden sm:inline">List Property</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;