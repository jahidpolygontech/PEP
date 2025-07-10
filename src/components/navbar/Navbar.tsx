import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Ship" },
  { href: "/", label: "Track" },
  { href: "/", label: "Services" },
];

const Navbar = () => (
  <header className="w-full h-20 flex items-center justify-between bg-primary text-white px-72">
    <Link href="/" aria-label="PEP Home">
    <Image src="/Images/logo.svg" alt="PEP Logo" width={320} height={80} className="object-cover"/>

    </Link>
    
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-10 text-sm font-medium">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>

    <div className="flex items-center gap-6">
      <Link href="/" className="text-sm font-medium leading-4 block" aria-label="Sign up or Login">
        Signup/Login
      </Link>
      <Image src="/Images/profile-circle.svg" alt="Profile" width={24} height={24} />
      <Image src="/Images/search-normal.svg" alt="Search" width={24} height={24} />
    </div>
  </header>
);

export default Navbar;