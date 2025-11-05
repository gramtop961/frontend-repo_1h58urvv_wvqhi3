import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">Let’s build something timeless</h3>
            <p className="mt-3 text-white/70 max-w-xl">
              Available for select collaborations and commissions. I respond within 1–2 business days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@flames.blue"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90"
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get('name');
                alert(`Thanks, ${name || 'friend'} — I’ll be in touch shortly.`);
                form.reset();
              }}
              className="grid grid-cols-1 gap-4"
            >
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Message</label>
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-md bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="mt-2 inline-flex justify-center items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Flames Blue — All rights reserved.</p>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </div>
    </section>
  );
}
