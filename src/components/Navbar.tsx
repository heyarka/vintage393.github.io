
import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="border-b border-accent/30">
      <nav className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-accent" />
            <span className="font-playfair text-xl font-bold uppercase tracking enabled-widest">The Daily Chronicle</span>
          </div>
          
          <div className="hidden md:flex space-x-6 uppercase text-sm tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors duration-300">Home</Link>
            <Link to="/" className="hover:text-accent transition-colors duration-300">News</Link>
            <Link to="/" className="hover:text-accent transition-colors duration-300">Society</Link>
            <Link to="/" className="hover:text-accent transition-colors duration-300">Culture</Link>
          </div>
          
          <div>
            <span className="text-sm italic">Est. 1923</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
