
import React, { ReactNode } from 'react';
import Navigation from '@/components/Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-event-background flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">CampusEvents - Connect with Tech Events at Colleges</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} CampusEvents. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
