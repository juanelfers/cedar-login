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
    <label>
      {label}
      <input
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </label>
  );
}
