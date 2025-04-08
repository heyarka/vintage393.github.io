
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="vintage-card max-w-5xl mx-auto text-center py-12">
          <div className="vintage-border">
            <h1 className="vintage-header">WELCOME TO THE TWENTIES</h1>
            <div className="art-deco-divider"></div>
            <p className="vintage-subheader">The Era of Prosperity &amp; Innovation</p>
            
            <p className="mb-8 max-w-2xl mx-auto text-lg">
              Step back in time to an age of elegance, jazz music, and cultural revolution. 
              The 1920s brought unprecedented economic prosperity and social change to America.
            </p>
            
            <Button className="vintage-button">READ MORE</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
