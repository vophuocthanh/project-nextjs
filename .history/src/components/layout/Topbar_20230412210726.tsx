import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5">
      <Link href="/">
        <img src="/logo.svg" alt="Yariga" />
        <h1 className="text-primary text-2xl">Yariga</h1>
      </Link>
    </div>
  );
};

export default Topbar;
