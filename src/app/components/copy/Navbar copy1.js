"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { LogoSvg } from '../../utils/svgGeneralUtils';
import useStore from '../../lib/store';


// NavLink bileşeni - aktif durumu daha verimli kontrol eder
function NavLink({ href, children, onClick, className = '' }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link aria-label={`Go to ${href} page`}
      href={href}
      onClick={onClick}
      className={`h-8 flex items-center px-4 py-2 rounded-full text-package-sm hover:bg-[rgba(248,248,248,0.12)] w-auto min-w-max whitespace-nowrap text-nowrap ${
        isActive ? " bg-[rgba(248,248,248,0.12)]" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}

// NavbarMenu
function NavbarMenu({ items, isMobile = false, onItemClick = () => {} }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`${isMobile ? "w-full" : "absolute w-[578px] bg-white p-2 border border-[#EEE]"} h-fit ${isMobile ? "" : "top-11 left-1/2 -translate-x-1/2"} z-50 rounded-2xl flex ${isMobile ? "flex-col" : "gap-2 shadow-[0px_1px_7px_0px_rgba(119,119,119,0.07)]"}`}>
      {!isMobile && (
        <Image
          src="/NavbarMenu/svg/menuPointerTop.svg"
          alt="menu Pointer Top"
          width={36}
          height={14}
          className="absolute max-w-[50px] max-h-[27px] -top-[13.5px] left-1/2 -translate-x-1/2"
        />
      )}

      {/* Left: Items */}
      <div className={`${isMobile ? "w-full" : "min-w-72"} flex flex-col gap-0.25`}>
        {items.map((item, idx) => (
          <Link 
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:p-2.5 h-16 rounded-xl gap-3 hover:bg-[#F8F8F8] cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onItemClick()}
          >
            <div className={`w-11 h-11 min-w-11 min-h-11 rounded-[6px] bg-white ${isMobile ? 'hidden' : ''}`}>
              <Image
                src={hoveredIndex === idx ? item.hoverIcon : item.icon}
                alt={item.title}
                width={44}
                height={44}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <div className="text-[#fefefe] md:text-primary-black text-sm font-normal leading-4 tracking-[0.14px]">
                {item.title}
              </div>
              <div className="text-[#999] md:text-[#616161] text-sm font-light leading-4 tracking-[0.14px]">
                {item.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right: Image (only show on desktop) */}
      {!isMobile && (
        <div className="w-full h-[390px] bg-[#191919] rounded-xl flex flex-col items-center p-6 pt-8 relative">
          <div className="text-white font-rethinkSans text-[28px] font-bold leading-[40px] tracking-[0.28px]">
            Turn your users
          </div>
          <div className="text-white font-instrumentSerif text-[28px] italic font-normal leading-[40px] tracking-[0.28px]">
            into power users.
          </div>
          <Image
            src="/NavbarMenu/images/menuMouseImage.webp"
            alt="Mouse Image"
            width={216}
            height={248}
            quality={100} priority unoptimized
            className="rounded-xl absolute bottom-0"
          />
        </div>
      )}
    </div>
  );
}

// MobileMenu component
function MobileMenu({ navItems, isOpen, setIsOpen }) {
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#010101] z-30 overflow-y-auto pt-4 mt-16 pb-6 px-6">
      <div className="flex flex-col space-y-4">
        {navItems.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <button 
              className="flex justify-between items-center py-3 text-white border-b border-gray-800"
              onClick={() => setExpandedMenuIndex(expandedMenuIndex === idx ? null : idx)}
            >
              <span className="text-lg font-medium">{item.label}</span>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                className={`transition-transform ${expandedMenuIndex === idx ? 'rotate-180' : ''}`}
              >
                <path d="M2 4L6 8L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {expandedMenuIndex === idx && (
              <div className="my-4">
                <NavbarMenu 
                  items={item.menu} 
                  isMobile={true} 
                  onItemClick={() => setIsOpen(false)}
                />
              </div>
            )}
          </div>
        ))}
        
        {/* Mobile Login / Book Demo */}
        <div className="mt-6 flex flex-col space-y-4">
          {/* Login butonu şimdilik gizli - sonra gösterilecek 
          <Link 
            href="/login" 
            className="w-full py-3 px-4 flex justify-center items-center rounded-xl text-package-sm bg-[rgba(255,255,255,0.12)] text-white"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link> */}
          <a 
            href="https://cal.com/mues-ai/demo" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Book a demo" 
            className="w-full py-3 px-4 flex justify-center items-center rounded-xl text-package-sm bg-white text-black"
            onClick={() => setIsOpen(false)}
          >
            Book a demo
          </a>
        </div>
      </div>
    </div>
  );
}

// Navbar (Main)
export default function Navbar() {
  const [hoveredNavIndex, setHoveredNavIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Zustand store'undan isMobile state'ini al
  const isMobile = useStore((state) => state.isMobile);
  
  // Otomatik mobil menü kapatma kontrolü
  useEffect(() => {
    // Mobil değilse ve menü açıksa kapat
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Mobil menü açıkken scrollu engelle
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Mobil menü kapalıyken normal hale getir
      const scrollY = parseInt(document.body.style.top || '0') * -1;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
    
    return () => {
      // Temizlik
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    {
      label: "Product",
      href: "/#",
      menu: [
        { title: "Features", desc: "Discover all features", icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Enterprise", desc: "Explore enterprise solutions", icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Pricing", desc: "View pricing options", icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Docs", desc: "Read documentation", icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://muesai.featurebase.app/en/help" },
        { title: "Feedback", desc: "Share your thoughts", icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://muesai.featurebase.app/en" },
        { title: "Changelog", desc: "Track latest updates", icon: "/NavbarMenu/svg/angular6.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://muesai.featurebase.app/en/changelog" },
      ],
    },
    {
      label: "Use Cases", 
      href: "/#",
      menu: [
        { title: "Product adoption", desc: "Boost engagement", icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Churn prevention", desc: "Retain your customers", icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Customer support", desc: "Deliver top-notch help", icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "User experience", desc: "Enhance usability fast", icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Agentic AI", desc: "Unlock AI's full potential", icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
      ],
    },
    {
      label: "Company",
      href: "/#",
      menu: [
        { title: "About Mues AI", desc: "Learn about our story", icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Manifesto", desc: "Read our vision", icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Blog", desc: "Explore our insights", icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Careers", desc: "See open positions", icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://mues-ai.notion.site/?pvs=4" },
        { title: "Speak w/ founder", desc: "Schedule a meeting", icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Contact us", desc: "Get in touch now", icon: "/NavbarMenu/svg/angular6.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "mailto:hi@mues.ai" },
      ],
    },
    {
      label: "Resources",
      href: "/#",
      menu: [
        { title: "The Muesum", desc: "Visit interaction museum", icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Community", desc: "Join our community", icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://discord.gg/GZGjemzU2H" },
        { title: "Security", desc: "Review our measures", icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Status", desc: "Check system status", icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Privacy policy", desc: "Read our policies", icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
        { title: "Terms of service", desc: "View legal terms", icon: "/NavbarMenu/svg/angular6.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg", href: "https://www.mues.ai/" },
      ],
    },
  ];
  

  return (
    <nav className={`${isMobileMenuOpen ? "fixed top-0 left-0 right-0 z-40" : ""} h-auto w-full bg-[#010101] p-6 md:py-4 md:px-12 lg:px-[80px]`}>
      <div className="w-full h-5 md:h-9 relative z-40 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Go to Home Page">
            <LogoSvg 
              width={isMobile ? 82 : 101} 
              height={isMobile ? 16 : 20} 
              fill="white" 
            />
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button 
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            className="focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <Image 
                src="/svg/hamburger.svg" 
                alt="Menu" 
                width={20} 
                height={20} 
              />
            )}
          </button>
        </div>

        {/* Nav Menu (Desktop) */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-x-2 text-sm leading-4 tracking-[0.14px] text-white">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredNavIndex(idx)}
                onMouseLeave={() => setHoveredNavIndex(null)}
              >
                <NavLink href={item.href}>{item.label}</NavLink>
                {hoveredNavIndex === idx && <NavbarMenu items={item.menu} />}
              </li>
            ))}
          </ul>
        </div>

        {/* Login / Book Demo (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Login butonu şimdilik gizli - sonra gösterilecek */}
          {/* <Link href="/login" className="h-9 px-4 py-2.5 flex items-center justify-center rounded-xl text-package-sm bg-[rgba(255,255,255,0.12)] text-white">
            Login
          </Link> */}
          <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className="h-9 px-4 py-2.5 flex items-center justify-center rounded-xl text-package-sm bg-white text-black">
            Book a demo
          </a>
        </div>

      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        navItems={navItems} 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
      />
    </nav>
  );
}