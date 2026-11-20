import { education, howIWork, publication, roles } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-mist">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>

        <ol className="mt-10 flex flex-col gap-10">
          {roles.map((r) => (
            <li key={r.title} className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-8">
              <p className="pt-1 text-sm text-slate">{r.period}</p>
              <div>
                <h3 className="text-xl font-semibold">
                  {r.title}, {r.company}
                </h3>
                <ul className="mt-3 flex max-w-[68ch] list-disc flex-col gap-1.5 pl-5 text-slate marker:text-pine">
                  {r.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-16 font-display text-2xl font-bold tracking-tight">How I work</h3>
        <ul className="mt-6 flex max-w-[68ch] list-disc flex-col gap-3 pl-5 text-slate marker:text-pine">
          {howIWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="mt-16 font-display text-2xl font-bold tracking-tight">Education</h3>
        <ul className="mt-6 flex flex-col gap-5">
          {education.map((e) => (
            <li key={e.degree} className="grid gap-1 md:grid-cols-[13rem_1fr] md:gap-8">
              <p className="pt-0.5 text-sm text-slate">{e.period}</p>
              <p>
                <span className="font-semibold">{e.degree}</span>
                <span className="block text-slate">{e.place}</span>
              </p>
            </li>
          ))}
          <li className="grid gap-1 md:grid-cols-[13rem_1fr] md:gap-8">
            <p className="pt-0.5 text-sm text-slate">Published paper</p>
            <p className="max-w-[68ch]">
              <a
                href={publication.link}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
              >
                {publication.title}
              </a>
              <span className="block text-slate">{publication.venue}</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
