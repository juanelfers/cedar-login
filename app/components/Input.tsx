interface InputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
}

export default function Input({
  label,
  value,
  onChange,
}: InputProps): JSX.Element {
  return (
    <label className="block text-grayish-blue text-sm tracking-wide">
      {label}
      <input
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        className="block w-full p-3 mt-2 border border-grayish-blue rounded-lg"
      />
    </label>
  );
}
