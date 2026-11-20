import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
      <p className="mb-6 flex items-center gap-2 text-sm text-slate">
        <span className="inline-block h-2 w-2 rounded-full bg-pine" aria-hidden="true" />
        {profile.availability}
      </p>
      <h1 className="font-display text-[clamp(2.4rem,7.2vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.03em]">
        I build React interfaces, and I like fixing the ones that break.
      </h1>
      <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-slate">
        I'm Suyash, a {profile.role} in {profile.location}. I spent a year at ColoredCow shipping
        client products, including a full revamp of an NGO's website. Most recently I built an
        AI-powered complaint management system.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-pine-deep"
        >
          See my work
        </a>
        <a
          href={profile.resume}
          download="Suyash_Nautiyal_Resume.pdf"
          className="rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
        >
          Download resume
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
