import { sidebarLinks } from "@/constants/general.const";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="bg-grayfc py-6 px-4">
      {sidebarLinks.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className="px-6 py-4 flex items-center gap-c10 font-bold text-base text-gray80 rounded-xl hover:bg-primary hover:text-grayfc"
        >
          <span>{link.icon}</span>
          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
