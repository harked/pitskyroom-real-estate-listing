
import React from 'react';

const BedIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 4v16" />
    <path d="M2 12h18a2 2 0 0 1 2 2v6" />
    <path d="M2 8h18" />
    <path d="M12 8V4" />
    <path d="M6 8V4" />
    <path d="M18 8V4" />
  </svg>
);

export default BedIcon;