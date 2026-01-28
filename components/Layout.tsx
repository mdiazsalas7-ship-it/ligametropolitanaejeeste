
import React from 'react';

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-background-dark/90 border-b border-border-dark ios-blur">
    <div className="flex items-center justify-between max-w-xl mx-auto px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center bg-black">
          <img 
            alt="LMB Logo" 
            className="h-full w-full object-contain p-0.5" 
            src="https://i.postimg.cc/FKgNmFpv/Whats_App_Image_2026_01_25_at_12_07_36_AM.jpg" 
          />
        </div>
        <div className="flex flex-col leading-none">
          <h2 className="text-sm font-black tracking-tighter uppercase">LMB EJE ESTE</h2>
          <span className="text-[10px] text-primary font-bold tracking-widest uppercase">Aragua</span>
        </div>
      </div>
      <button className="p-2 hover:bg-surface-dark rounded-full transition-colors text-gray-400">
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>
    </div>
  </nav>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;
