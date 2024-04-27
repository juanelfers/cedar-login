interface ButtonProps {
  onClick: () => void;
  children: JSX.Element[] | JSX.Element | string;
}

export default function Input({ onClick, children }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>;
}
