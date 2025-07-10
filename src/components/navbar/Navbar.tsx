"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Ship" },
  { href: "/", label: "Track" },
  { href: "/", label: "Services" },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchInputRef.current?.value}`);
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="w-full h-20 flex items-center justify-between bg-primary text-white px-72 relative z-50">
      {/* Logo */}
      <Link href="/" aria-label="PEP Home">
        <Image
          src="/Images/logo.svg"
          alt="PEP Logo"
          width={320}
          height={80}
          className="object-cover"
        />
      </Link>

      {/* Navigation Links */}
      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-10 text-sm font-medium ">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="hover:text-gray-300">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Signup/Login + Profile + Search */}
      <div className="flex items-center gap-6 relative">
        <Link
          href="/"
          className="text-sm font-medium leading-4 block hover:text-gray-300"
          aria-label="Sign up or Login "
        >
          Signup/Login
        </Link>

        {/* Profile icon (no dropdown in this version) */}
        <Image
          src="/Images/profile-circle.svg"
          alt="Profile"
          width={24}
          height={24}
        />

        {/* Search Icon + Dropdown */}
        <div className="relative" ref={searchRef}>
          <button onClick={toggleSearch} aria-label="Search">
            <Image
              src="/Images/search-normal.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </button>
          {isSearchOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg p-2 text-gray-800">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full px-2 py-1 border rounded text-black"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-3 py-1 rounded"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
