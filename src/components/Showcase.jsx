function FeatureCard({ title, text, icon }) {
  return (
    <div className="rounded-xl bg-white shadow-sm ring-1 ring-emerald-100 p-5">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 font-bold" aria-hidden="true">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-700">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ title, img, desc, href }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-emerald-100" aria-label={title}>
      <img src={img} alt="" loading="lazy" className="h-40 w-full object-cover group-hover:scale-[1.02] transition will-change-transform" />
      <div className="p-4">
        <h4 className="text-base font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm text-slate-700">{desc}</p>
        <a href={href} className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded" aria-label={`Learn more about ${title}`}>
          Learn more →
        </a>
      </div>
    </article>
  );
}

function NewsItem({ date, title, href }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 text-center rounded-md bg-[#fff9c4] text-slate-900 px-2 py-1 leading-none font-semibold self-start ring-1 ring-yellow-200">
        <span className="block text-[10px] uppercase tracking-wide">{new Date(date).toLocaleString(undefined, { month: 'short' })}</span>
        <span className="text-sm">{new Date(date).getDate()}</span>
      </div>
      <a href={href} className="flex-1 group">
        <h4 className="text-slate-900 font-semibold group-hover:text-emerald-800">{title}</h4>
        <p className="text-sm text-slate-600">{new Date(date).toLocaleDateString()}</p>
      </a>
    </li>
  );
}

export default function Showcase() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* About / Mission Vision Values */}
      <section id="about" aria-labelledby="about-heading" className="py-12 md:py-16">
        <header className="max-w-3xl">
          <h2 id="about-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900">Our Purpose</h2>
          <p className="mt-2 text-slate-700">We cultivate resilient learners and compassionate citizens through holistic education grounded in integrity, curiosity, and community.</p>
        </header>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <FeatureCard title="Mission" text="To provide inclusive, high-quality education that nurtures academic excellence and strong character in a safe, supportive environment." icon="M" />
          <FeatureCard title="Vision" text="Empower every learner to thrive as a confident, creative, and responsible global citizen." icon="V" />
          <FeatureCard title="Values" text="Integrity, empathy, perseverance, and respect guide our decisions and relationships." icon="Va" />
        </div>
      </section>

      {/* Academics / Programs */}
      <section id="academics" aria-labelledby="academics-heading" className="py-12 md:py-16 rounded-2xl" style={{ backgroundColor: '#a5d6a7' }}>
        <div className="px-0 md:px-6">
          <header className="max-w-3xl">
            <h2 id="academics-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900">Academic Programs</h2>
            <p className="mt-2 text-slate-800">A continuum of learning from foundational literacy to advanced secondary studies, enriched by arts, sports, and technology.</p>
          </header>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <ProgramCard
              title="Primary (Grades 1–5)"
              img="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              desc="Foundational literacy, numeracy, and social skills through playful, inquiry-based learning."
              href="#admissions"
            />
            <ProgramCard
              title="Lower Secondary (6–8)"
              img="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop"
              desc="Strengthening core subjects, communication, and digital fluency with project work."
              href="#admissions"
            />
            <ProgramCard
              title="Secondary (9–12)"
              img="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
              desc="Rigorous preparation for SEE and +2 with science, management, and humanities tracks."
              href="#admissions"
            />
          </div>

          {/* Achievements */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4" aria-label="School achievements">
            {[
              { label: 'Years Serving Community', value: '35+' },
              { label: 'SEE Pass Rate', value: '98%' },
              { label: 'Clubs & Societies', value: '12' },
              { label: 'Scholarships Awarded', value: '150+' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-emerald-100 p-4 text-center">
                <div className="text-2xl font-extrabold text-emerald-800">{item.value}</div>
                <div className="mt-1 text-xs text-slate-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section aria-labelledby="life-heading" className="py-12 md:py-16">
        <header className="max-w-3xl">
          <h2 id="life-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900">Student Life</h2>
          <p className="mt-2 text-slate-700">Beyond classrooms: sports, arts, leadership, and service opportunities that build confidence and community.</p>
        </header>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1531853121101-cb39bb0d23a1?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
          ].map((src, idx) => (
            <figure key={idx} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-emerald-100">
              <img src={src} alt="Student life activity" loading="lazy" className="h-48 w-full object-cover" />
            </figure>
          ))}
        </div>
      </section>

      {/* News & Events */}
      <section id="news" aria-labelledby="news-heading" className="py-12 md:py-16">
        <header className="flex items-end justify-between gap-4">
          <div>
            <h2 id="news-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900">News & Events</h2>
            <p className="mt-2 text-slate-700">Stay informed about recent updates, celebrations, and important dates.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">View all</a>
        </header>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <article className="md:col-span-2 rounded-xl bg-white shadow-sm ring-1 ring-emerald-100 p-5" aria-label="Latest updates">
            <ul className="space-y-4" aria-live="polite">
              <NewsItem date={new Date().toISOString()} title="Admissions Open for Academic Year 2082/83" href="#admissions" />
              <NewsItem date={new Date(Date.now() - 1000*60*60*24*3).toISOString()} title="Inter-school Science Exhibition Winners Announced" href="#" />
              <NewsItem date={new Date(Date.now() - 1000*60*60*24*12).toISOString()} title="Parents-Teachers Meeting Schedule Released" href="#" />
            </ul>
          </article>
          <aside className="rounded-xl bg-white shadow-sm ring-1 ring-emerald-100 p-5" aria-label="Upcoming event">
            <h3 className="text-lg font-semibold text-slate-900">Upcoming: Annual Sports Day</h3>
            <p className="mt-1 text-sm text-slate-700">Join us for a day of teamwork and healthy competition on the school grounds.</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-md bg-[#fff9c4] px-2 py-1 text-slate-900 font-semibold ring-1 ring-yellow-200">Nov 25</div>
              <span className="text-sm text-slate-700">8:00 AM — 4:00 PM</span>
            </div>
            <a href="#" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">Event details →</a>
          </aside>
        </div>
      </section>

      {/* Admissions + Contact anchor targets for nav */}
      <section id="admissions" className="py-12 md:py-16" aria-labelledby="admissions-heading">
        <h2 id="admissions-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900">Admissions</h2>
        <p className="mt-2 max-w-2xl text-slate-700">We welcome applications for all grades. Merit- and need-based scholarships are available. Please prepare previous academic records and a recommendation letter.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500">Contact Admissions</a>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-emerald-800 font-semibold shadow-sm ring-1 ring-emerald-200 hover:bg-emerald-50">Download Prospectus</a>
        </div>
      </section>
    </div>
  );
}
