import React, { ReactElement } from 'react';

interface SocialCardProps {
  service: string;
  href: string;
  icon: ReactElement;
}

const SocialCard: React.FC<SocialCardProps> = ({ service, href, icon }) => {
  return (
      <a target="_blank" className="p-4 relative flex flex-col items-center gap-1 duration-700 group" href={href} relgroup-hover:text-white="noreferrer" rel="noreferrer">
        <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200  group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
          {icon}
        </span>
      </a>
  );
};

export default SocialCard;