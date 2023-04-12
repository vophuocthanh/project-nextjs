import React from "react";
import { Manrope } from "next/font/google";
interface ILayoutMainProps {
  children: React.ReactNode;
}
const manrope = Manrope();
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return <div>{children}</div>;
};

export default LayoutMain;
