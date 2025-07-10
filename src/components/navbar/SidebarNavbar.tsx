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

const sampleNotifications = [
  { id: 1, message: "Your order has been shipped." },
  { id: 2, message: "New promo available now!" },
  { id: 3, message: "Your profile was updated." },
];

const SidebarNavbar = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node))
        setIsNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target as Node))
        setIsProfileOpen(false);
      if (searchRef.current && !searchRef.current.contains(event.target as Node))
        setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Autofocus search input
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchInputRef.current?.value}`);
    setIsSearchOpen(false);
  };

  const handleProfile = () => {
    alert("Profile clicked");
  };

  const handleLogout = () => {
    alert("Logout clicked");
  };

  return (
    <header className="w-full h-20 bg-primary text-white font-semibold relative z-50">
      <div className="mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-10 2xl:ml-[280px]">
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
                  <Link href={href} className="hover:text-gray-300">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Middle Section: Profile, Name, Search, Notification */}
        <div className="flex items-center gap-6 relative">
          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button onClick={() => setIsProfileOpen((prev) => !prev)}>
              <Image
                src="/Images/profile-circle.svg"
                alt="Profile"
                width={24}
                height={24}
              />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800">
                <button
                  onClick={handleProfile}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  View Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <p className="hover:text-gray-300">John Doe</p>

          {/* Search Dropdown */}
          <div className="relative" ref={searchRef}>
            <button onClick={() => setIsSearchOpen((prev) => !prev)}>
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

          {/* Notification Dropdown */}
          <div className="relative" ref={notifRef}>
            <button onClick={() => setIsNotifOpen((prev) => !prev)}>
              <Image
                src="/Images/dashboard/notification.svg"
                alt="Notification"
                width={24}
                height={24}
              />
            </button>

            {isNotifOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg text-gray-800 overflow-hidden">
                <div className="p-4 border-b font-semibold text-sm">Notifications</div>
                <ul className="max-h-60 overflow-y-auto text-sm">
                  {sampleNotifications.map((notif) => (
                    <li
                      key={notif.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {notif.message}
                    </li>
                  ))}
                </ul>
                <div className="p-2 text-center border-t">
                  <Link
                    href="/"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View All
                  </Link>
                </div>
              </div>
            )}
          </div>
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

export default SidebarNavbar;
