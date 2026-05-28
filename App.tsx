/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#C65D3C] selection:text-white">
      <Header />
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="menu"><Menu /></div>
        <div id="amenities"><Features /></div>
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
