import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="z-10 text-xl ">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400  text-2xl">
            Home
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-accent-400 text-2xl">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400  text-2xl">
            About
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400  text-2xl">
            {/* transition-colors */}
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
