import { profile } from '../data'

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em]">
          Have a frontend role? Let's talk.
        </h2>
        <p className="mt-5 max-w-[56ch] text-lg text-paper/75">
          I'm in {profile.location} and can start right away. Email is the fastest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
        >
          {profile.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-6 text-sm text-paper/75">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-paper">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-paper">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.resume} download="Suyash_Nautiyal_Resume.pdf" className="underline underline-offset-4 hover:text-paper">
              Resume (PDF)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
