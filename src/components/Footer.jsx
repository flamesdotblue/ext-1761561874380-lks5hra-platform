import { Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 bg-white border-t border-emerald-100" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold" aria-hidden="true">SN</div>
              <div>
                <p className="text-sm text-emerald-800 tracking-wide">Shree Santi Namuna</p>
                <p className="text-base font-semibold text-slate-900">Secondary School</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700 max-w-sm">A nurturing environment fostering academic excellence and character development in Rupandehi, Nepal.</p>
            <div className="mt-4 flex items-center gap-3" aria-label="Social media">
              <a href="#" className="p-2 rounded-md bg-emerald-50 text-emerald-800 hover:bg-emerald-100" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-md bg-emerald-50 text-emerald-800 hover:bg-emerald-100" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-emerald-700" /><span>Rupandehi District, Lumbini Province, Nepal</span></li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-emerald-700" /><a href="tel:+977-1-0000000" className="hover:text-emerald-800">+977 1 000 0000</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-emerald-700" /><a href="mailto:info@santinamu.na" className="hover:text-emerald-800">info@santinamu.na</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#academics" className="text-slate-700 hover:text-emerald-800">Academics</a></li>
              <li><a href="#admissions" className="text-slate-700 hover:text-emerald-800">Admissions</a></li>
              <li><a href="#news" className="text-slate-700 hover:text-emerald-800">News & Events</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-emerald-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Shree Santi Namuna Secondary School. All rights reserved.</p>
          <p className="text-xs text-slate-600">Designed with accessible, calming colors for learning.</p>
        </div>
      </div>
    </footer>
  );
}
