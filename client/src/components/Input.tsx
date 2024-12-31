interface InputProps {
  label: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  type?: "text" | "number";
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="fex items-center justify-center space-y-2">
      <div className="">
        <label className="whitespace-nowrap text-sm font-medium text-gray-700">
          {label}
        </label>
      </div>
      <div className="">
        <input
          type={type}
          placeholder={placeholder || `Enter ${label}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 w-[205px] rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Input;
