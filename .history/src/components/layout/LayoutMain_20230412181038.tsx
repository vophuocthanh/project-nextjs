import React from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  weights: "400" | "500" | "600" | "700",
});
interface ILayoutMainProps {
  children: React.ReactNode;
}
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return <div>{children}</div>;
};

export default LayoutMain;
