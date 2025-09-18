"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { HamburgerSvg } from '../utils/navbar/svgNavbar';
import useStore from '../lib/store';
import { navItemsData } from '../data/NavbarDataItems';
import { OnlyLogo } from '../utils/svgOurBrand';
import LogoName from './ui/LogoName';


// NavLink bileşeni - aktif durumu daha verimli kontrol eder - 4 buton için kullanılıyor
function NavLink({ href, children, onClick, className = '', theme }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link aria-label={`Go to ${href} page`}
      href={href}
      onClick={onClick}
      className={`h-8 flex items-center px-4 py-2 rounded-full text-package-sm ${theme.navHover} w-auto min-w-max whitespace-nowrap text-nowrap ${
        isActive ? ` ${theme.activeNavBg}` : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}

// NavbarMenu - Hover olunca açılan menü
function NavbarMenu({ items, isMobile = false, onItemClick = () => {}, theme }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`${isMobile ? "w-full" : `absolute w-[578px] ${theme?.dropdownBg || 'bg-white'} p-2 border ${theme?.dropdownBorder || 'border-[#EEE]'}`} h-fit ${isMobile ? "" : `top-11 left-1/2 -translate-x-1/2`} z-50 rounded-2xl flex ${isMobile ? "flex-col" : `gap-2 ${theme?.dropdownShadow || 'shadow-[0px_1px_7px_0px_rgba(119,119,119,0.07)]'}`}`}>
      {!isMobile && (
          <Image
            src="/NavbarMenu/svg/menuPointerTop.svg"
            alt="menu Pointer Top"
            width={36}
            height={14}
            className="absolute min-w-[36px] min-h-[14px] max-w-[50px] max-h-[27px] -top-[13.5px] left-1/2 -translate-x-1/2 px-4 box-content"
          />
      )}

      {/* Left: Items */}
      <div className={`${isMobile ? "w-full" : "min-w-[286px]"} flex flex-col gap-0.25`}>
        {items.map((item, idx) => (
          <Link 
            key={idx}
            href={item.href}
            target={item.href.startsWith('http') ? "_blank" : undefined}
            rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
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
              <div className={`${theme?.text} md:text-primary-black text-sm font-normal leading-4 tracking-[0.14px]`}>
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
        <div className="w-full h-[390px] bg-[#08090B] rounded-xl flex flex-col items-center p-5 pt-8 relative">
          <OnlyLogo width={16} height={16} fill="rgba(255, 255, 255, 0.33)" />
          <p className="text-white font-rethinkSans text-[24px] font-bold leading-[32px] tracking-[0.24px] text-center mt-10">
          Your users get stuck, <br />
            <span className="text-white font-instrumentSerif text-[24px] italic font-normal leading-[32px] tracking-[0.24px] ">
            AI Cursor solves <br /> - instantly -
            </span>
          </p>
          <Image
            src="/NavbarMenu/images/menuMouseImage.webp"
            alt="Mouse Image"
            width={266}
            height={131}
            quality={100}
            loading="lazy"
            className="rounded-xl absolute bottom-10"
          />
        </div>
      )}
    </div>
  );
}

// MobileMenu component
function MobileMenu({ navItemsData, isOpen, setIsOpen, theme }) {
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 ${theme.mobileBg} z-30 overflow-y-auto pt-4 mt-16 pb-6 px-6`}>
      <div className="flex flex-col space-y-4">
        {navItemsData.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <button 
              className={`flex justify-between items-center py-3 ${theme.mobileText} border-b border-[#EEE]`}
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
                <path d="M2 4L6 8L10 4" stroke={theme.hamburgerStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {expandedMenuIndex === idx && (
              <div className="my-4">
                <NavbarMenu 
                  items={item.menu} 
                  isMobile={true} 
                  onItemClick={() => setIsOpen(false)}
                  theme={theme}
                />
              </div>
            )}
          </div>
        ))}
        
        {/* Mobile Login / Book Demo */}
        <div className="mt-6 flex flex-col space-y-4">
          {/* Login butonu */}
          {/* Login butonu ŞİMDİLİK HİDDEN-gizli sonra gösterilecek*/}
          {/* <Link 
            href="/login" 
            className={`w-full py-3 px-4 flex justify-center items-center rounded-xl text-package-sm ${
              variant === 'dark' 
                ? 'bg-[rgba(255,255,255,0.12)] text-white' 
                : 'border border-[#F4F4F4] bg-white text-primary-black shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link> */}
          <a 
            href="https://cal.com/mues-ai/demo" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Book a demo" 
            className={`w-full py-3 px-4 flex justify-center items-center rounded-xl text-package-sm ${theme.demoBg} ${theme.demoText}`}
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
export default function Navbar({ variant = 'dark', className = '', ...rest }) {
  const [hoveredNavIndex, setHoveredNavIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isMobile = useStore((state) => state.isMobile);
  
  // Theme colors based on variant
  const themeColors = {
    dark: {
      bg: 'bg-[#010101]',
      text: 'text-white',
      logoFill: 'white',
      hamburgerStroke: 'white',
      navHover: 'hover:bg-[rgba(248,248,248,0.12)]',
      activeNavBg: 'bg-[rgba(248,248,248,0.12)]',
      loginBg: 'bg-[rgba(255,255,255,0.12)]',
      loginText: 'text-white',
      demoBg: 'bg-white hover:bg-[#FBFBFB] active:bg-[#F7F7F7]',
      demoText: 'text-black',
      mobileBg: 'bg-[#010101]',
      mobileText: 'text-white',
      dropdownBg: 'bg-white',
      dropdownBorder: 'border-[#EEE]',
      dropdownShadow: 'shadow-[0px_1px_7px_0px_rgba(119,119,119,0.07)]'
    },
    light: {
      bg: 'bg-white',
      text: 'text-primary-black',
      logoFill: '#17181A',
      hamburgerStroke: 'black',
      navHover: 'hover:bg-[#F8F8F8]',
      activeNavBg: 'bg-[#F8F8F8]',
      loginBg: 'bg-white',
      loginText: 'text-primary-black',
      demoBg: 'bg-primary-black hover:bg-[#262728] active:bg-[#484848]',
      demoText: 'text-white',
      mobileBg: 'bg-white',
      mobileText: 'text-primary-black',
      dropdownBg: 'bg-white',
      dropdownBorder: 'border-[#EEE]',
      dropdownShadow: 'shadow-[0px_1px_7px_0px_rgba(0,0,0,0.15)]'
    }
  };
  
  // Variant'a göre tema renklerini aldık
  const theme = themeColors[variant];
  
  // Otomatik mobil menü kapatma kontrolü
  useEffect(() => {
    // Mobil değilse ve menü açıksa kapat
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    // Cache the current scroll position
    const scrollY = window.scrollY;
    
    if (isMobileMenuOpen) {
      // Mobil menü açıkken scrollu engelle
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } else {
      // Mobil menü kapalıyken normal hale getir
      const savedScrollY = parseInt(document.body.style.top || '0') * -1;
      
      // Reset styles in single batch to minimize reflow
      Object.assign(document.body.style, {
        overflow: '',
        position: '',
        width: '',
        height: '',
        top: ''
      });
      
      // Restore scroll position only if it changed
      if (savedScrollY !== window.scrollY) {
        window.scrollTo(0, savedScrollY);
      }
    }
    
    return () => {
      // Temizlik - reset all at once
      Object.assign(document.body.style, {
        overflow: '',
        position: '',
        width: '',
        height: '',
        top: ''
      });
    };
  }, [isMobileMenuOpen]);


  return (
    <nav
      {...rest}
      className={`${isMobileMenuOpen ? "fixed top-0 left-0 right-0 z-40" : ""} h-auto w-full ${theme.bg} p-6 md:py-4 md:px-12 lg:px-[80px] ${className}`.trim()}
    >
      <div className="w-full h-5 md:h-9 relative z-40 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Go to Home Page">
            <LogoName 
              fontSize={isMobile ? 24 : 30}
              variant={variant}
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
              // x svg
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15" stroke={theme.hamburgerStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 5L15 15" stroke={theme.hamburgerStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <HamburgerSvg 
                stroke={theme.hamburgerStroke}
                width={20} 
                height={20} 
              />
            )}
          </button>
        </div>

        {/* Nav Menu (Desktop) */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <ul className={`flex gap-x-2 text-sm leading-4 tracking-[0.14px] ${theme.text}`}>
            {navItemsData.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredNavIndex(idx)}
                onMouseLeave={() => setHoveredNavIndex(null)}
              >
                <NavLink href={item.href} theme={theme}>{item.label}</NavLink>
                {hoveredNavIndex === idx && <NavbarMenu items={item.menu} theme={theme} />}
              </li>
            ))}
          </ul>
        </div>

        {/* Login / Book Demo (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Login butonu */}
          {/* Login butonu ŞİMDİLİK HİDDEN-gizli sonra gösterilecek*/}
          {/* <Link 
            href="/login" 
            className={`flex items-center justify-center rounded-xl text-package-sm ${
              variant === 'dark' 
                ? 'px-4 py-2 bg-[rgba(255,255,255,0.12)] text-white' 
                : 'px-4 py-2.5 border border-[#F4F4F4] bg-white text-primary-black shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]'
            }`}
          >
            Login
          </Link> */}
          <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className={`h-9 px-4 py-2.5 flex items-center justify-center rounded-xl text-package-sm ${theme.demoBg} ${theme.demoText}`}>
            Book a demo
          </a>
        </div>

      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        navItemsData={navItemsData} 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
        theme={theme}
      />
    </nav>
  );
}