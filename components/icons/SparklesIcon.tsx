
import React from 'react';

const SparklesIcon = ({ className }: { className?: string }) => (
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
    <path d="m12 3-1.5 3-3 1.5 3 1.5 1.5 3 1.5-3 3-1.5-3-1.5Z" />
    <path d="m3 12-1.5 3-3 1.5 3 1.5 1.5 3 1.5-3 3-1.5-3-1.5Z" />
    <path d="m21 12-1.5 3-3 1.5 3 1.5 1.5 3 1.5-3 3-1.5-3-1.5Z" />
  </svg>
);

export default SparklesIcon;