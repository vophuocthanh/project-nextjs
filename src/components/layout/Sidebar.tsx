import Link from 'next/link';
import React, { useState } from 'react';
import { sidebarLinks } from '@/constants/general.const';
import { useRouter } from 'next/router';
import { TSidebarLinks } from '@/types/general.types';

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className='bg-grayfc py-6 px-4'>
      {sidebarLinks.map((link) => (
        <SidebarLink
          isActive={pathname === link.path}
          key={link.title}
          link={link}
        ></SidebarLink>
      ))}
    </div>
  );
};
interface ISidebarLinkProps {
  link: TSidebarLinks;
  isActive: boolean;
}
function SidebarLink({ link, isActive }: ISidebarLinkProps) {
  return (
    <Link
      href={link.path}
      className={`px-6 py-4 flex items-center gap-c10 font-bold text-base text-gray80 rounded-xl  ${
        isActive ? 'bg-primary text-grayfc' : 'hover:text-primary'
      }`}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}

export default Sidebar;
