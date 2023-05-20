import React from "react";

const DropDown = ({
  show,
  hide,
  isShowing,
  DropItem,
  parent,
}: {
  show: Function;
  hide: Function;
  isShowing: boolean;
  DropItem: React.ElementType;
  parent: React.ReactNode;
}) => {
  return (
    <div className="flex" onMouseEnter={() => show()} onMouseLeave={() => hide()}>
      {parent}
      {isShowing && <DropItem className="absolute bg-white" />}
    </div>
  );
};

// const WithLink = () => {
//   return (
//     <div>
//         WithLink
//     </div>
//   )
// }

export default DropDown;
