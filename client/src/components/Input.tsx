import React from "react";

interface IProps {
  placeholder: string;
  Icon?: React.ElementType;
  name: string;
  onChange: (name: string, value: any) => void;
  value: any;
  type?:string
}
const Text = ({ placeholder, onChange, value, name,type }: IProps) => {
  return (
      <input
        value={value}
        name={name}
        type = {type||"text"}
        placeholder={placeholder}
        className="w-full border mb-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        required
      />
  );
};

export default { Text } as const;
