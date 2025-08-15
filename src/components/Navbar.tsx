"use client";

import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import { motion } from "motion/react";

const navigationItems = [
  { name: "Home", href: "/", icon: Home, showOnMedium: true },
  { name: "About", href: "/about", icon: User, showOnMedium: true },
  { name: "Skills", href: "/skills", icon: Code, showOnMedium: true },
  {
    name: "Experience",
    href: "/experience",
    icon: GraduationCap,
    showOnMedium: false,
  },
  { name: "Projects", href: "/projects", icon: Briefcase, showOnMedium: true },
  {
    name: "Contact",
    href: "/contact",
    icon: MessageCircle,
    showOnMedium: false,
  },
];

const NavItem = ({
  item,
  isActive = false,
  size = "md",
  isMobile = false,
  onClick,
}: {
  item: (typeof navigationItems)[0];
  isActive?: boolean;
  size?: "sm" | "md" | "lg";
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const Icon = item.icon;
  const padding =
    size === "sm" ? "px-3 py-2" : size === "md" ? "px-4 py-2" : "px-4 py-2";
  const iconSize = isMobile ? 18 : 16;

  const baseClasses = `${padding} rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2`;
  const activeClasses = isActive
    ? "bg-blue-600/20 text-blue-400"
    : "text-slate-300 hover:text-white hover:bg-slate-800/50";

  if (isMobile) {
    return (
      <Link
        href={item.href}
        className={`w-full ${baseClasses} space-x-3 ${activeClasses}`}
        onClick={onClick}
      >
        <Icon size={iconSize} />
        <span>{item.name}</span>
      </Link>
    );
  }

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <Icon size={iconSize} />
      <Link href={item.href}>{item.name}</Link>
    </div>
  );
};

const HireMeButton = ({
  isMobile = false,
  onClick,
  entranceDelay = 0,
}: {
  isMobile?: boolean;
  onClick?: () => void;
  entranceDelay?: number;
}) => {
  const baseClasses =
    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl";
  const mobileClasses = "w-full mt-2 px-3 py-2 rounded-lg";
  const desktopClasses = "px-4 py-2 rounded-lg";

  return (
    <motion.button
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: entranceDelay }}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      onClick={onClick}
    >
      Hire me
    </motion.button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const desktopItems = navigationItems;
  const mediumItems = navigationItems.filter((item) => item.showOnMedium);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex-shrink-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-lg sm:text-xl lg:text-2xl font-bold px-2 sm:px-4 lg:px-8">
            <AnimatedGradientText
              speed={1}
              colorFrom="#38bdf8"
              colorTo="#e879f9"
            >
              Caner Elmas
            </AnimatedGradientText>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
          {desktopItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * index, duration: 1 }}
            >
              <NavItem item={item} isActive={index === 0} size="lg" />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex lg:hidden items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
          {mediumItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <NavItem item={item} isActive={index === 0} size="sm" />
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto z-10">
          <div className="hidden lg:block">
            <HireMeButton />
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="bg-slate-950/80 backdrop-blur-lg rounded-lg mt-2 mx-4 border border-slate-800 lg:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavItem
                  item={item}
                  isActive={index === 0}
                  isMobile={true}
                  onClick={closeMobileMenu}
                />
              </motion.div>
            ))}

            <HireMeButton isMobile={true} onClick={closeMobileMenu} />
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
