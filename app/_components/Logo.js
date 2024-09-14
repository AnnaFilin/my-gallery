import Image from "next/image";
import Link from "next/link";
import logo from "@/public/LogoFilin.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <div className="relative w-[250px] h-[100px]">
        {" "}
        <Image
          src={logo}
          alt="Filin Art logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
        />
      </div>
    </Link>
  );
}

export default Logo;
