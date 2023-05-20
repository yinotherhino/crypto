import React, { ComponentType } from "react";

const DropDown = ({
  show,
  hide,
  isShowing,
  DropItems,
  parent,
}: {
  show: Function;
  hide: Function;
  isShowing: boolean;
  DropItems: ComponentType<{className:string}>;
  parent: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center relative" onMouseEnter={() => show()} onMouseLeave={() => hide()}>
      {parent}
      {isShowing && <DropItems className="absolute bg-white top-[100%] w-min p-5" />}
    </div>
  );
};

export default DropDown;
