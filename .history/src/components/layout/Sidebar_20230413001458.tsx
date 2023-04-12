import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants/general.const";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="bg-grayfc py-6 px-4">
      {sidebarLinks.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className={`px-6 py-4 flex items-center gap-c10 font-bold text-base text-gray80 rounded-xl  ${
            pathname === link.path ? "bg-primary text-grayfc" : ""
          }`}
        >
          <span>{link.icon}</span>
          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
