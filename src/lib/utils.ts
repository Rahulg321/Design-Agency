import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"



export const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
