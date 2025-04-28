"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LogoSvg } from '../utils/svgGeneralUtils';


// NavLink bileşeni - aktif durumu daha verimli kontrol eder
function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link aria-label={`Go to ${href} page`}
      href={href}
      className={`h-8 flex items-center px-4 py-2 rounded-full text-package-sm hover:bg-[rgba(248,248,248,0.12)] ${
        isActive ? "bg-[rgba(248,248,248,0.12)]" : ""
      }`}
    >
      {children}
    </Link>
  );
}
  //!   xs:  320px --
  //!   sm:  640px
  //!   md:  768px
  //!   lg:  1024px
  //!   xl:  1280px --
  //!   2xl: 1536px 

// NavbarMenu
function NavbarMenu({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="absolute w-[578px] h-fit p-2 top-11 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl shadow-[0px_1px_7px_0px_rgba(119,119,119,0.07)] border border-[#EEE] flex gap-2">
      <Image
        src="/NavbarMenu/svg/menuPointerTop.svg"
        alt="menu Pointer Top"
        width={36}
        height={14}
        className="absolute max-w-[50px] max-h-[27px] -top-[13.5px] left-1/2 -translate-x-1/2"
      />

      {/* Left: Items */}
      <div className="min-w-72 flex flex-col gap-0.25">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center p-2.5 h-16 rounded-xl gap-3 hover:bg-[#F8F8F8] cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-11 h-11 min-w-11 min-h-11 rounded-[6px] bg-white">
              <Image
                src={hoveredIndex === idx ? item.hoverIcon : item.icon}
                alt={item.title}
                width={44}
                height={44}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <div className="text-[#17181A] text-sm font-normal leading-4 tracking-[0.14px]">
                {item.title}
              </div>
              <div className="text-[#616161] text-sm font-light leading-4 tracking-[0.14px]">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Image */}
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
    </div>
  );
}

// Navbar (Main)
export default function Navbar() {
  const [hoveredNavIndex, setHoveredNavIndex] = useState(null);

  const navItems = [
    {
      label: "Product",
      href: "/product",
      menu: [
        { title: "Features", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Pricing", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Enterprise", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Changelog", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Docs", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Help", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular6.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
      ],
    },
    {
      label: "Use Cases",
      href: "/use-cases",
      menu: [
        { title: "How it works", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Product adoption", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Churn prevention", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Customer support", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "User experience", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Agentic AI", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular6.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
      ],
    },
    {
      label: "Company",
      href: "/company",
      menu: [
        { title: "About Mues", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Manifesto", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Blog", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Careers", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Brand assets", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Speak w/ founder", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular6.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      menu: [
        { title: "Feedback", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular1.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Community", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular2.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Contact us", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular3.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Status", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular4.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Privacy policy", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular5.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
        { title: "Terms of service", desc: "Discover the process" , icon: "/NavbarMenu/svg/angular6.svg", hoverIcon: "/NavbarMenu/svg/angularHover.svg" },
      ],
    },
  ];
  

  return (
    <nav className="h-auto w-full bg-[#010101] p-6 xl:py-4 xl:px-[80px]">
      <div className="w-full h-9 relative flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Go to Home Page">
            <LogoSvg width={101} height={20} fill="white" />
          </Link>s
        </div>

        {/* Nav Menu */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center ">
          <ul className="flex space-x-2 text-sm leading-4 tracking-[0.14px] text-white">
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

        {/* Login / Book Demo */}
        <div className="flex items-center space-x-2">
          {/* Login butonu şimdilik gizli - sonra gösterilecek */}
          {/* <Link href="/login" className="h-9 px-4 py-2.5 flex items-center justify-center rounded-xl text-package-sm bg-[rgba(255,255,255,0.12)] text-white">
            Login
          </Link> */}
          <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className="h-9 px-4 py-2.5 flex items-center justify-center rounded-xl text-package-sm bg-white text-black">
            Book a demo
          </a>
        </div>

      </div>
    </nav>
  );
}