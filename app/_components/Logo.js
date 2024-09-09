import Image from "next/image";
import Link from "next/link";
import logo from "@/public/LogoFilin.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} alt="Filin Art logo" width={300} priority />
    </Link>
  );
}

export default Logo;
