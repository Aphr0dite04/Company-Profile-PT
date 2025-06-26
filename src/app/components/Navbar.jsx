'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Contact', path: '/contact' },
  { title: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Fungsi untuk memeriksa status login
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  // Inisialisasi dan perbarui status login secara berkala
  useEffect(() => {
    checkLoginStatus();

    // Periksa status login setiap 100ms (opsional, bisa disesuaikan)
    const interval = setInterval(checkLoginStatus, 100);
    window.addEventListener('storage', checkLoginStatus);

    // Bersihkan interval dan event listener saat komponen dilepas
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white border border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="ml-2 text-xl font-semibold text-black">Brianov Egatara</span>
        </Link>

        <div className="lg:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            {navbarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="px-5 py-2 text-sm border rounded-md text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm border rounded-md text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-5 py-2 text-sm border rounded-md text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {navbarOpen && (
        <MenuOverlay
          links={
            isLoggedIn
              ? [
                  ...navLinks,
                  { title: 'Dashboard', path: '/dashboard' },
                  { title: 'Logout', path: '#', onClick: handleLogout },
                ]
              : [...navLinks, { title: 'Login', path: '/login' }]
          }
        />
      )}
    </nav>
  );
}