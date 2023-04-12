import React from "react";
interface ILayoutMainProps {
  children: React.ReactNode;
}
import { Manrope } from "next/font/google";
const Manrope = Manrope();
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return <div>{children}</div>;
};

export default LayoutMain;
