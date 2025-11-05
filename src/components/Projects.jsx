export default function Projects() {
  const projects = [
    {
      title: 'Lens Studio — Editorial Photography',
      desc: 'A sleek showcase for a photography collective with focus on art direction and performance.',
      tags: ['Next.js', 'Tailwind', 'A11y'],
      url: '#',
    },
    {
      title: 'Monochrome Commerce',
      desc: 'Minimal e-commerce experience highlighting product storytelling and motion.',
      tags: ['React', 'Stripe', 'Framer Motion'],
      url: '#',
    },
    {
      title: 'Atlas Portfolio System',
      desc: 'Modular portfolio builder for creators with responsive, art-forward layouts.',
      tags: ['Design System', 'TypeScript', 'UX'],
      url: '#',
    },
  ];

  return (
    <section id="projects" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A curated selection exploring minimal forms, precise typography, and experiential details.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-sm text-white/70 hover:text-white underline underline-offset-4">Inquire about a project</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition-colors"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              <h3 className="mt-5 text-xl font-medium tracking-tight group-hover:opacity-90">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 text-white/80 text-xs px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
