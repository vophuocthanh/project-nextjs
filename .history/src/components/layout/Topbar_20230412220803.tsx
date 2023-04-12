import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image width={173} height={35} src="/logo-full.png" alt="Yariga" />
        </Link>
        <div className="py-[10px] px-[10px] rounded-lg bg-grayf4 flex items-center gap-2">
          <IconSearch></IconSearch>
          <input
            type="text"
            className=" outline-none"
            placeholder="Search Property, Customer etc"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span>
          <IconNotification></IconNotification>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
