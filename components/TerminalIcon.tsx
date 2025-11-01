import React from 'react';

export const TerminalIcon: React.FC<{className?: string}> = ({className}) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9.5l3 2.5-3 2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 14.5h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);