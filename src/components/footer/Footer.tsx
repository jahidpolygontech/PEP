"use client";
import Image from "next/image";
import Link from "next/link";
import { FooterColumn } from "./FooterColumn";

const socialLinks = [
  { href: "#", src: "/Images/footer/facebook.png", alt: "Facebook" },
  { href: "#", src: "/Images/footer/x.png", alt: "X (Twitter)" },
  { href: "#", src: "/Images/footer/linkedin.png", alt: "LinkedIn" },
  { href: "#", src: "/Images/footer/linkedin.png", alt: "YouTube" },
];

const serviceLinks = [ "Point to Point Taxi Trucks", "Corporate Courier", "Regional Freight", "Air Freight", "EMI Franchise", "Express Delivery", "Parcel Distribution", "Point to Point Couriers", "Regional Freight","Warehousing & Distribution (3PL)"];

const quickLinks = [ "PEP2Click",
    "Partner Us","Get Receivery","Contact PEP","Branches","Pay Invoice","Get Prepaid Coupons","Get Trackers","Open an account with PEP",
];

const companyLinks = ["About", "Careers"];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-16 md:py-24 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16 gap-8 md:gap-12 lg:gap-16">
          {/* Logo & Description */}
          <div className="md:max-w-md lg:h-[304px] lg:w-[426px]">
            <div className="mb-6">
              <Image
                src="/Images/logo.svg"
                alt="PEP Express Transport System"
                width={320}
                height={80}
                className="mb-4 object-cover"
              />
            </div>
            <p className="text-sm leading-relaxed mb-8">
              We are a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ href, src, alt }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="w-8 h-8 flex items-center justify-center hover:bg-opacity-30 transition-all"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterColumn title="OUR SERVICES" links={serviceLinks} />

          {/* Quick Links */}
          <FooterColumn title="QUICK LINK" links={quickLinks} />

          {/* Company Info */}
          <FooterColumn title="OUR COMPANY" links={companyLinks} />
        </div>

        {/* Bottom Section */}
        <div className="border-t  pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-xs sm:text-sm text-center md:text-left">
              <p>© 2024 PEP Express Transport Systems. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              {["Terms of Service", "Privacy Policy", "Cookies"].map(
                (label, i) => (
                  <Link
                    key={i}
                    href="/"
                    className="hover:text-white transition-colors underline"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Floating Buttons */}
      <div className="mt-4 flex justify-end px-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Chat Button */}
          <button
            className="bg-white text-primary px-3 sm:px-4 py-2 sm:py-3 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 group"
            style={{
              minWidth: "200px",
              maxWidth: "299px",
              height: "40px",
              boxShadow:
                "0 16px 48px rgba(24, 39, 75, 0.08), 0 8px 16px rgba(24, 39, 75, 0.12)",
            }}
          >
            <Image
              src="/Images/footer/headphoneicon.png"
              alt="Headphone"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
            <span className="text-xs sm:text-sm font-medium flex-1 text-left whitespace-nowrap overflow-hidden cursor-pointer">
              Need Help? Chat with Us
            </span>
          </button>

          {/* Scroll to Top */}
          <button
            className="flex items-center justify-center transition-all duration-300 hover:shadow-xl"
            style={{ width: "40px", height: "40px" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/Images/footer/arrow-up.png"
              alt="Scroll to top"
              width={48}
              height={48}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


