import React, {useState} from "react";

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
  const [focused, setFocused] = useState(false)
  return (
    <div className="block relative">
      {required !== false && value.length < 1 && (
        <span className="inline-block absolute z-20 top-[-5px] right-[-3px] text-red-500">
          *
        </span>
      )}
      {value.length>0 &&
        <span className="rounded-md inline-block absolute z-20 top-[-0.35rem] px-2 bg-white left-[3px] text-[0.7rem] text-gray-400">
          {placeholder}
        </span>
      }
      <input
        value={value}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        className="w-full inline-block z-10 border mb-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        required={required === false ? false : true}
        // onFocus={() => setFocused(true)}
        // onBlur={() => setFocused(false)}
      />
    </div>
  );
};

const Radio = ({
  label,
  value,
  name,
  handleSelect,
  extraStyle,
}: {
  label: string;
  value: string;
  name: string;
  handleSelect: Function;
  extraStyle?: string;
}) => {
  return (
    <span className={" inline-flex items-center" + extraStyle}>
      <label htmlFor={name + value} className="mr-2">
        {label}
      </label>
      <input
        type="radio"
        name={name}
        value={value}
        id={name + value}
        onSelect={() => handleSelect()}
      />
    </span>
  );
};

const List = ({list,handleChange,label,name,defaultValue,extraStyle}:{list:Array<string>; handleChange:Function;label:string;name:string;defaultValue?:string;extraStyle?:string}) => {
  return (
    <>
      <label htmlFor={name+label}>{label}: </label>
      <input
        list={name}
        name={name}
        className={"bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"+extraStyle}
        defaultValue={defaultValue}
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
        

      />
      <datalist id={name}>
        {list.map((data, index) => (
          <option key={index} value={data} />
        ))}
      </datalist>
    </>
  );
};
export default { Text, Radio, List } as const;
