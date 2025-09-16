"use client";
  import { UserPlus } from "lucide-react";
  import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Menu, X, Linkedin, Twitter, ChevronRight, Palette, Download} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./components/ui/buttontop";

type NavItem = {
  name: string;
  submenu?: string[];
};

const navItems: NavItem[] = [
  { name: "Home" },
  { name: "Docs" },
  { name: "Components" },
  { name: "About" },
  { name: "Colors" }, // This array is correct
];

export const SquigglyUnderline = () => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setSelectedLink("Home");
    } else if (pathname.startsWith("/Feature")) {
      setSelectedLink("Feature");
    } else if (pathname.startsWith("/DashBoard")) {
      setSelectedLink("DashBoard");
    } else if (pathname.startsWith("/About")) {
      setSelectedLink("About");
    } else if (pathname.startsWith("/ChatBot")) {
      setSelectedLink("ChatBot");
    }
  }, [pathname]);

  return (
    <>
    <header className={`fixed w-full z-50 top-0 border-b border-gray-200 bg-white px-6 py-4 font-mono font-bold transition-all duration-300`}
     style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3 text-xl">
          <div className="w-8 logo h-7 rounded-full" />
          {/* <Link href="/" onClick={() => setSelectedLink("Home")} className="w-auto h-auto cursor-pointer">
            <div className="w-30 h-8 text-svg mt-1"></div>
          </Link> */}

          <Link
  href="/"
  onClick={() => setSelectedLink("Home")}
  className="cursor-pointer flex items-center gap-3"
>

  <span className="text-lg sm:text-l font-JB font-extrabold text-gray-900">
    Circularity Cockpit
  </span>
</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:flex bg-transparent items-center gap-8">
          {/* Home - Updated Link usage */}
          <Link
            href="/"
            onClick={() => setSelectedLink("Home")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Home" ? "text-black" : "text-gray-500"
            }`}>
            Home
            {selectedLink === "Home" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}>
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* Docs - Updated Link usage */}
          <Link
            href="/docs"
            onClick={() => setSelectedLink("Docs")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Docs" ? "text-black" : "text-gray-500"
            }`}>
            Feature
            {selectedLink === "Docs" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* Components */}
          <Link
            href="/component"
            onClick={() => setSelectedLink("Components")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Components" ? "text-black" : "text-gray-500"
            }`}
          >
            LCA
            {selectedLink === "Components" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* About */}
          <Link // Changed from button to Link for consistency and proper navigation
            href="/about"
            onClick={() => setSelectedLink("About")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "About" ? "text-black" : "text-gray-500"
            }`}
          >
            About
            {selectedLink === "About" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* Colors (formerly "Contact" and incorrectly labeled "Components") */}
          <Link
            href="/colors"
            onClick={() => setSelectedLink("Colors")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Colors" ? "text-black" : "text-gray-500"
            }`}
          >
            ChatBot {/* Changed text from "Components" to "Colors" */}
            {selectedLink === "Colors" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.2,
                      strokeDashoffset: 84.2,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>
        </nav>

        {/* Right: CTA & Socials (Desktop only) */}
        <div className="hidden lg:flex font-GS items-center space-x-8">
          <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg cursor-pointer last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Download className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true"/>
        <a href="#">Download</a>
      </Button>
   

{/* <Button
  className="rounded-none shadow-none first:rounded-s-lg cursor-pointer last:rounded-e-lg focus-visible:z-10"
  variant="outline"
>
  <UserPlus className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
  <a href="/signup"></a>
</Button> */}

      {/* <Button
        className="rounded-none cursor-pointer shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      ><Link
        href="#"
        className="inline-flex items-center justify-center px-3 py-2 hover:bg-gray-100 text-gray-800"
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
      </Button> */}
      <Button
  className="rounded-none cursor-pointer shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
  variant="outline"
  aria-label="Query"
>
  <Link
    href="/query"
    className="inline-flex items-center justify-center px-1 py-2 hover:bg-gray-100 text-gray-800 gap-2"
  >
    <HelpCircle className="h-4 w-4" />
  </Link>
</Button>
    </div>

        </div>
      </div>

    </header>
  </>
  );
};
