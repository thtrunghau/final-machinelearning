
interface CategoryOption {
  value: string;
  label: string;
}

interface CategoryInputProps {
  label: string;
  options: CategoryOption[];
  selectedOption: string;
  onSelect: (option: string) => void;
}


const CategoryInput: React.FC<CategoryInputProps> = ({
  label,
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="fex items-center justify-center space-y-2">
      <div className="">
        <label className="whitespace-nowrap text-sm font-medium text-white">
          {label}
        </label>
      </div>
      <div className="">
        <select
          value={selectedOption}
          onChange={(e) => onSelect(e.target.value)}
          className="w-[205px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryInput;
