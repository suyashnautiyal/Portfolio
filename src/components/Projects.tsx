import { projects } from '../data'
import Preview from './Preview'

export default function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Work</h2>
        <p className="mt-3 max-w-[60ch] text-slate">
          Two projects I built end to end. The code for each is public.
        </p>

        <div className="mt-12 flex flex-col gap-16 sm:gap-20">
          {projects.map((p, i) => (
            <article key={p.name} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className={i % 2 === 1 ? 'md:order-2' : undefined}>
                <Preview kind={p.preview} image={p.image} alt={`Preview of ${p.name}`} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-lg leading-snug">{p.summary}</p>
                <dl className="mt-5 flex flex-col gap-4 text-[15px] leading-relaxed">
                  <div>
                    <dt className="font-semibold">The problem</dt>
                    <dd className="text-slate">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">What I decided</dt>
                    <dd className="text-slate">{p.decision}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">What I'd do next</dt>
                    <dd className="text-slate">{p.next}</dd>
                  </div>
                </dl>
                <ul className="mt-5 flex list-disc flex-col gap-1.5 pl-5 text-sm text-slate marker:text-pine">
                  {p.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate">{p.stack.join(', ')}</p>
                <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pine underline decoration-pine/40 underline-offset-4 transition-colors hover:decoration-pine"
                    >
                      Open live site
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    View code on GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
