import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm uppercase tracking-[0.3em]">Creative Portfolio</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Minimalist design meets modern technology
          </h1>
          <p className="mt-4 text-lg text-white/80">
            I craft clean interfaces, thoughtful visuals, and immersive experiences. Focused on clarity, photography-driven aesthetics, and performant code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              View work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
