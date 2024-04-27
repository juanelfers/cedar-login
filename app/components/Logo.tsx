import Image from "next/image";

export default function Logo(): JSX.Element {
  return (
    <Image
      src="/logo/cedar-logo.svg"
      width={126}
      height={32}
      alt="Cedar Logo"
      className="inline"
    />
  );
}
