import React from "react";
import { Manrope } from "next/font/google";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
interface ILayoutMainProps {
  children: React.ReactNode;
}
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <div className={`${manrope.className}`}>
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default LayoutMain;
