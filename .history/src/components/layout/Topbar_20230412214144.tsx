import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification } from "../icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image width={35} height={40} src="/logo.svg" alt="Yariga" />
          <h1 className="text-primary text-[25px] font-bold">Yariga</h1>
        </Link>
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
