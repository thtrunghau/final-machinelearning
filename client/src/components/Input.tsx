interface InputProps {
  label: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  type?: "text" | "number";
  defaultValue: string | number;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  defaultValue,
}) => {
  return (
    <div className="flex flex-col items-start justify-center space-y-2" 
    style={{ width: "250px" }} 
    >
      <div className="">
        <label className="whitespace-nowrap text-sm font-medium text-white">
          {label}
        </label>
      </div>
      <div className="">
        <input
          type={type}
          placeholder={placeholder || `Nhập ${label}`}
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
          className="w-[205px] flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Input;
