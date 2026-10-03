'use client';

import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { usePathname } from 'next/navigation';

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/signin' || pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="flex-1 flex flex-col min-w-0 w-full max-w-full">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
