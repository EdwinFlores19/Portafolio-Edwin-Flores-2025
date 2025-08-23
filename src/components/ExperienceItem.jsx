import React from 'react';

export default function ExperienceItem({ date, title, company, description }) {
  return (
    <div className="mb-10 ml-6 pl-6 border-l-2 border-card relative group transition-all duration-300 hover:!border-primary">
      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-card border-2 border-background group-hover:bg-primary transition-colors duration-300"></div>
      <p className="text-sm text-text-secondary mb-1">{date}</p>
      <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      <p className="text-md font-semibold text-primary mb-3">{company}</p>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}