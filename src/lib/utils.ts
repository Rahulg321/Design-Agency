import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"



export const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
