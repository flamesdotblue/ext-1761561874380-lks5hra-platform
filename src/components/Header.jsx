import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'News & Events', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#e0f2f1]/90 backdrop-blur supports-[backdrop-filter]:bg-[#e0f2f1]/70 border-b border-emerald-100" role="banner">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Shree Santi Namuna Secondary School - Home">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold" aria-hidden="true">SN</div>
            <div className="leading-tight">
              <p className="text-sm text-emerald-800 tracking-wide">Shree Santi Namuna</p>
              <p className="text-base sm:text-lg font-semibold text-slate-900">Secondary School</p>
              <p className="text-[11px] text-slate-600 -mt-1">Rupandehi, Nepal</p>
            </div>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-700 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            onClick={() => setOpen((v) => !v)}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-emerald-100`}>
        <nav aria-label="Mobile Primary">
          <ul className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-slate-800 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
