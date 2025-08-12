"use client";
import React, { useEffect } from "react";

export default function Overlay({ isOpen, onClose, children }) {
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (isOpen) {
      document.addEventListener("keydown", onEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(17,17,17,0.55)] backdrop-blur-[48px] p-4 md:p-6 lg:p-8"
      style={{ paddingBlock: "7.843vh" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full h-full max-w-7xl bg-white rounded-[24px] border border-[#F1F1F1] shadow-[0_1px_4px_0_rgba(34,34,34,0.05)]">

        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 h-4 w-4 inline-flex items-center justify-center z-10
          text-[#979797] hover:text-primary-black active:opacity-50 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 12L12 4M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="relative w-full h-full">
          {children}
        </div>


      </div>
    </div>
  );
}
