import React from "react";
import { Link } from "react-router-dom";
interface IProps {content:Array<{link:string;text:string;action?:()=>void}>}
const WithLink = ({content}:IProps) => {
  return (
    <ul className="flex flex-col">
        {content.map(item=>(<li onClick={()=>item.action && item.action()} className="py-3 px-7 hover:bg-primary flex items-center border-b-[1px] border-deep">
        <Link to={item.link} className="mr-2">
          {item.text}
        </Link>
      </li>))}
    </ul>
  );
};

export default { WithLink } as const;
