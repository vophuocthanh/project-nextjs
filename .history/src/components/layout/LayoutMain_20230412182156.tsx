import React from "react";
import { Manrope } from "next/font/google";
import TopBar from "./TopBar";
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
interface ILayoutMainProps {
  children: React.ReactNode;
}
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <div className={manrope.className}>
      <TopBar></TopBar>
    </div>
  );
};

export default LayoutMain;