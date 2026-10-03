"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/brand/Logo";
import Button from "@/components/common/Button";
import { ArrowRight, Menu, X } from "lucide-react";

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/#services", targetId: "services" },
    { label: "Capabilities", href: "/#features", targetId: "features" },
    { label: "Our Process", href: "/#workflow", targetId: "workflow" },
    { label: "Social Systems", href: "/#automation", targetId: "automation" },
  ];

  const handleScrollToSection = (e, targetId) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", `#${targetId}`);
      }
    } else {
      e.preventDefault();
      router.push(`/#${targetId}`);
    }
  };

  const handleMobileNavClick = (e, targetId) => {
    setMobileMenu(false);
    handleScrollToSection(e, targetId);
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-5 lg:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* Floating Rounded Navbar Capsule (visible on scroll, transparent initially) */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#070A12]/60 border-white/10 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_16px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.15)]"
              : "bg-transparent border-transparent shadow-none backdrop-blur-none"
          }`}
        >
          {/* Brand Logo with gentle hover transition */}
          <div className="transition-transform duration-300 hover:scale-105">
            <Logo size="default" href="/" variant="light" />
          </div>

          {/* Desktop Nav Links with Animated Underline and Smooth Scroll */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.targetId)}
                className="relative py-1 hover:text-white transition-colors duration-200 tracking-tight group cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-400 to-sky-300 transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right CTA Action: Request a Service with Smooth Scroll */}
          <div className="hidden sm:flex items-center">
            <a
              href="/#request-service"
              onClick={(e) => handleScrollToSection(e, "request-service")}
              className="transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Button
                variant="primary"
                size="sm"
                iconRight={ArrowRight}
                className="!bg-blue-600 hover:!bg-blue-500 !border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] !rounded-full font-medium text-xs px-4 py-2 transition-all duration-300 cursor-pointer"
              >
                Request a Service
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="sm:hidden flex items-center gap-2">
            <a
              href="/#request-service"
              onClick={(e) => handleScrollToSection(e, "request-service")}
            >
              <Button size="sm" variant="primary" className="!bg-blue-600 text-xs py-1 px-3 !rounded-full">
                Request Service
              </Button>
            </a>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Glassmorphic Rounded Card) */}
        {mobileMenu && (
          <div className="sm:hidden mt-2 rounded-2xl bg-[#070A12]/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 px-5 py-4 space-y-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_20px_50px_rgba(0,0,0,0.7)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleMobileNavClick(e, link.targetId)}
                className="block text-sm text-slate-300 hover:text-white py-1.5 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="/#request-service"
                onClick={(e) => handleMobileNavClick(e, "request-service")}
                className="w-full"
              >
                <Button size="md" variant="primary" className="w-full !bg-blue-600 !rounded-xl cursor-pointer">
                  Request a Service
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
