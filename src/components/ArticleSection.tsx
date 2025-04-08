
import React from 'react';
import { Film, Music, Book } from 'lucide-react';

const ArticleSection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-2">LATEST STORIES</h2>
        <div className="art-deco-divider mx-auto" style={{width: '200px'}}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Article 1 */}
          <article className="vintage-card animate-flicker">
            <div className="flex justify-center mb-4">
              <Film className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center uppercase">Motion Pictures Revolution</h3>
            <p className="text-sm mb-4 text-center italic">May 7th, 1923</p>
            <p className="text-center">
              The silver screen captures America's imagination as motion pictures 
              take the nation by storm. Charlie Chaplin's latest film draws crowds.
            </p>
          </article>
          
          {/* Article 2 */}
          <article className="vintage-card animate-flicker" style={{animationDelay: '1s'}}>
            <div className="flex justify-center mb-4">
              <Music className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center uppercase">Jazz Age in Full Swing</h3>
            <p className="text-sm mb-4 text-center italic">April 23rd, 1923</p>
            <p className="text-center">
              Dance halls across the city play the exciting new sounds of jazz music.
              The controversy of this new musical style continues to divide society.
            </p>
          </article>
          
          {/* Article 3 */}
          <article className="vintage-card animate-flicker" style={{animationDelay: '2s'}}>
            <div className="flex justify-center mb-4">
              <Book className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center uppercase">Literature's New Voice</h3>
            <p className="text-sm mb-4 text-center italic">April 12th, 1923</p>
            <p className="text-center">
              F. Scott Fitzgerald's newest work promises to capture the spirit of modern
              America with its tales of lavish parties and societal intrigue.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
