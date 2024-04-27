interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Input({ onClick, children }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="block w-full p-3 border-0 rounded-lg bg-light-blue text-sky-50 font-bold tracking-wide"
    >
      {children}
    </button>
  );
}
