import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e0f2f1] text-slate-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-slate-900 focus:px-3 focus:py-2 focus:rounded-md focus:ring-2 focus:ring-emerald-600">Skip to content</a>
      <Header />
      <Hero />
      <main id="main" role="main" className="flex-1">
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
