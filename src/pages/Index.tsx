
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ArticleSection from '../components/ArticleSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ArticleSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
