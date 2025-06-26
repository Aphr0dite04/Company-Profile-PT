'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header dengan gambar Unsplash */}
      <header className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80" // Ganti URL baru
          alt="Dashboard Background"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Admin Dashboard</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Manage your company profile and monitor operations
          </p>
        </div>
      </header>

      {/* Konten Dashboard */}
      <section className="container mx-auto px-6 py-16">
        {/* Statistik Perusahaan */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Company Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">33+</h3>
              <p className="text-gray-500">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">125+</h3>
              <p className="text-gray-500">Successful Projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">52+</h3>
              <p className="text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard/edit-profile"
              className="px-5 py-2.5 bg-blue-400 hover:bg-blue-600 text-white font-medium rounded-lg"
            >
              Edit Company Profile
            </Link>
            <Link
              href="/dashboard/reports"
              className="px-5 py-2.5 bg-blue-400 hover:bg-blue-600 text-white font-medium rounded-lg"
            >
              View Reports
            </Link>
            <Link
              href="/dashboard/projects"
              className="px-5 py-2.5 bg-blue-400 hover:bg-blue-600 text-white font-medium rounded-lg"
            >
              Manage Projects
            </Link>
          </div>
        </div>

        {/* Pesan Selamat Datang */}
        <div className="bg-primary-50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Admin!</h2>
          <p className="text-xl text-gray-700 mb-8">
            This dashboard allows you to manage PT. Brianov Egatara Nirbana Estu&apos;s online presence and
            monitor key metrics for your oil and gas industry services.
          </p>
        </div>
      </section>
    </main>
  );
}
