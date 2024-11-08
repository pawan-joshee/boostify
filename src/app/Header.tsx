"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle manual route changes and set loading state
  const handleNavigation = (href: string) => {
    setIsLoading(true);
    try {
      router.push(href);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="bg-gray-800 text-white py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          <Link href="/">Boostify Media</Link>
        </h1>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {/* SVG for Hamburger Menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li className="text-base md:text-lg">
              <button onClick={() => handleNavigation("/")}>Home</button>
            </li>
            <li className="text-base md:text-lg">
              <button onClick={() => handleNavigation("/contact-us")}>Contact Us</button>
            </li>
            <li className="text-base md:text-lg">
              <button onClick={() => handleNavigation("/privacy-policy")}>
                Privacy Policy
              </button>
            </li>
            <li className="text-base md:text-lg">
              <button onClick={() => handleNavigation("/terms-conditions")}>
                Terms & Conditions
              </button>
            </li>
            <li className="text-base md:text-lg">
              <button onClick={() => handleNavigation("/refund-cancellation")}>
                Refund & Cancellation
              </button>
            </li>
            <li className="text-base md:text-lg">
              <button onClick={() => handleNavigation("/about-us")}>About Us</button>
            </li>
            <li className="text-base md:text-lg">
              <button onClick={() => handleNavigation("/checkout")}>Checkout</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="loading-bar animate-pulse"></div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-700">
          <ul className="flex flex-col space-y-4 p-4 text-base sm:text-lg">
            <li>
              <button
                onClick={() => {
                  handleNavigation("/");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNavigation("/contact-us");
                  setIsMenuOpen(false);
                }}
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNavigation("/privacy-policy");
                  setIsMenuOpen(false);
                }}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNavigation("/terms-conditions");
                  setIsMenuOpen(false);
                }}
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNavigation("/refund-cancellation");
                  setIsMenuOpen(false);
                }}
              >
                Refund & Cancellation
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNavigation("/about-us");
                  setIsMenuOpen(false);
                }}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNavigation("/checkout");
                  setIsMenuOpen(false);
                }}
              >
                Checkout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
