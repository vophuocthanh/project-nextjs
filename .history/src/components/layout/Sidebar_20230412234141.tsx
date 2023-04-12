import { sidebarLinks } from "@/constants/general.const";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-grayfc py-6 px-4">
      {sidebarLinks.map((link) => (
        <Link key={link.title} href="/"></Link>
      ))}
    </div>
  );
};

export default Sidebar;
