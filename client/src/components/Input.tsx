import React from "react";

interface IProps {
  placeholder: string;
  Icon?: React.ElementType;
  name: string;
  onChange: (name: string, value: any) => void;
  value: any;
  type?: string;
  required?: boolean;
}
const Text = ({
  placeholder,
  onChange,
  value,
  name,
  type,
  required,
}: IProps) => {
  return (
    <div className="block relative">
      {required !== false && value.length<1 && <span className="inline-block absolute z-20 top-[-5px] right-[-3px] text-red-500">*</span>}
      <input
        value={value}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        className="w-full inline-block z-10 border mb-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        required={required === false ? false : true}
      />
    </div>
  );
};

export default { Text } as const;
