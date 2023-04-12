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
            className=" outline-none bg-transparent text-xs font-normal text-primary w-full placeholder:text-gray80"
            placeholder="Search Property, Customer etc"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 flex-shrink-0">
        <span className="flex-shrink-0">
          <IconNotification></IconNotification>
        </span>
        <div className="flex items-center gap-[10px] flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="avatar"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
