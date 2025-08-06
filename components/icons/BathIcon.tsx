
import React from 'react';

const BathIcon = ({ className }: { className?: string }) => (
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
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0L3 5" />
    <path d="m2 2 1.5 1.5" />
    <path d="M21 12H3" />
    <path d="M21 6H8" />
    <path d="M21 18H3" />
    <path d="M7 6V3" />
    <path d="M7 12V6" />
    <path d="M7 18V12" />
    <path d="M11 3v18" />
  </svg>
);

export default BathIcon;