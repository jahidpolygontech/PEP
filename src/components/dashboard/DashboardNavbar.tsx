import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Ship" },
  { href: "/", label: "Track" },
  { href: "/", label: "Services" },
];

const DashboardNavbar = () => {
  return (
    <header className="w-full h-20 bg-primary text-white font-semibold">
      <div className="mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-10 lg:ml-80">
          <Link href="/" aria-label="PEP Home">
            <Image
              src="/Images/logo.svg"
              alt="PEP Logo"
              width={320}
              height={40}
              className="object-contain"
            />
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
        </div>

        {/* Middle Section: Profile, Name, Search, Notification */}
        <div className="flex items-center gap-6">
          <Image
            src="/Images/profile-circle.svg"
            alt="Profile"
            width={24}
            height={24}
          />
          <p>John Doe</p>
          <Image
            src="/Images/search-normal.svg"
            alt="Search"
            width={24}
            height={24}
          />
          <Image
            src="/Images/dashboard/notification.svg"
            alt="Notification"
            width={24}
            height={24}
          />
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex flex-col items-end text-sm font-semibold">
          <div className="flex items-center gap-2 text-yellow-200">
            <Image
              src="/Images/dashboard/call.svg"
              alt="Call Icon"
              width={15}
              height={15}
            />
            <p>(24/7)</p>
          </div>
          <p>0825252223</p>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
