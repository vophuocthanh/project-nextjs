import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5">
      <Link href="/">
        <img src="/logo.svg" alt="yariga" />
      </Link>
    </div>
  );
};

export default Topbar;
