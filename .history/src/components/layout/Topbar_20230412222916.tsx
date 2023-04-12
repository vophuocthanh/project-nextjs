import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-[82px] flex-1">
        <Link href="/" className="flex items-center gap-3">
          <Image width={173} height={35} src="/logo-full.png" alt="Yariga" />
        </Link>
        <div className=" px-[10px] rounded-lg bg-grayf4 flex items-center gap-2 flex-[0_1_405px] h-[38px]">
          <IconSearch></IconSearch>
          <input
            type="text"
            className=" outline-none bg-transparent text-xs font-normal text-gray80"
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
