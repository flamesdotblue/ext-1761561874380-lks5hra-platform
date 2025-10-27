export default function Hero() {
  const bgUrl = 'https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center';

  return (
    <section id="home" className="relative w-full" aria-label="Hero">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative h-[56vh] sm:h-[64vh] md:h-[70vh] w-full overflow-hidden rounded-none md:rounded-2xl shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgUrl})` }}
            role="img"
            aria-label="Modern abstract blue to purple gradient background"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/60" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="max-w-xl md:max-w-2xl">
                <span className="inline-block rounded-full bg-[#fff9c4] text-slate-900 px-3 py-1 text-xs font-semibold tracking-wide shadow-sm">Trusted learning community in Rupandehi</span>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Shree Santi Namuna Secondary School
                </h1>
                <p className="mt-3 md:mt-4 text-slate-100/90 text-base md:text-lg">
                  Inspiring curious minds with compassionate guidance, strong values, and future-ready academics.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#admissions"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                    aria-label="Explore Admissions"
                  >
                    Explore Admissions
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center rounded-md bg-white/90 px-4 py-2 text-emerald-800 font-semibold shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                    aria-label="Learn About Us"
                  >
                    Learn About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
