"use client";

import dynamic from 'next/dynamic';

export const AnimatedText = dynamic(() => import('./components/AnimatedText'));
export const MeetMuse = dynamic(() => import('./components/MeetMuse'));
export const ModularPresentationMain = dynamic(() => import('./components/ModularPresentationMain'));
export const HowItWorks = dynamic(() => import('./components/HowItWorks'));

export const UserCursor = dynamic(() => import('./components/UserCursor'));

export const Benefits = dynamic(() => import('./components/Benefits'));
export const HeroTwo = dynamic(() => import('./components/HeroTwo'));
export const PlugAndPlay = dynamic(() => import('./components/PlugAndPlay'));
export const Steps = dynamic(() => import('./components/Steps'));
export const Comments = dynamic(() => import('./components/Comments'));
export const FAQ = dynamic(() => import('./components/FAQ.js'));
export const Footer = dynamic(() => import('./components/Footer.js'));