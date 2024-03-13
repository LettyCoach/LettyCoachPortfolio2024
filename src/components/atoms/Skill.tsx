import React from 'react';
import { Icon } from '@iconify/react';
import { TTechnology } from '../../types';

export const Skill: React.FC<{ skill: TTechnology }> = ({ skill }) => {
  const theme = 'dark';
  return (
    <>
      <div
        className={`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl p-4 border-solid border-[0.15rem] text-center max-lg:items-center max-md:px-4 ${
          theme === 'dark' ? 'bg-[--darkblue]' : 'bg-[--icewhite]'
        }`}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={skill.title}
        style={{
          borderColor: skill.color,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.animation = 'pulse 2s infinite';
          e.currentTarget.style.transform = 'scale(1)';
          document.documentElement.style.setProperty('--box-shadow-color', `${skill.color}b3`);
        }}
        onMouseLeave={e => {
          e.currentTarget.style.animation = '';
          e.currentTarget.style.transform = '';
          document.documentElement.style.setProperty('--box-shadow-color', 'inherit');
        }}
      >
        <Icon icon={skill.icon} className="w-full h-[6.9rem]" />
        <h3 className="max-lg:text-[1.25rem] min-[1024px]:hidden">{skill.title}</h3>
      </div>
    </>
  );
};
