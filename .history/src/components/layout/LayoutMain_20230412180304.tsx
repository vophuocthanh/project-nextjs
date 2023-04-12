import React from "react";
interface ILayoutMainProps {
  children: React.ReactNode;
}
import {} from "next/font";
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return <div>{children}</div>;
};

export default LayoutMain;
