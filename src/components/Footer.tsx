
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="uppercase tracking-widest text-sm mb-2">The Daily Chronicle</p>
          <div className="art-deco-divider mx-auto" style={{width: '100px'}}></div>
          <p className="mt-4 text-sm opacity-75">
            Copyright © 1923 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
