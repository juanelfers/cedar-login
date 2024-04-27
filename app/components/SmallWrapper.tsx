export default function SmallWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="w-[325px]">{children}</div>
    </div>
  );
}
