import classNames from "classnames";

interface InputProps {
  type?: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  error: string | null;
  placeholder?: string;
}

export default function Input({
  type = "text",
  value,
  label,
  onChange,
  error,
  placeholder,
}: InputProps): JSX.Element {
  const inputClasses = classNames(
    "block w-full p-3 mt-2 border rounded-lg outline-none",
    !error ? "border-gray" : "border-red"
  );
  
  return (
    <label className="block text-grayish-blue text-sm">
      {label}
      <input
        className={inputClasses}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={({ target: { value } }) => onChange(value)}
      />
      {error && <span className="block text-red mt-2">{error}</span>}
    </label>
  );
}
