import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
        <dl className="mt-8">
          {skills.map((g) => (
            <div key={g.label} className="grid gap-1 border-b border-line py-5 md:grid-cols-[13rem_1fr] md:gap-8">
              <dt className="font-semibold">{g.label}</dt>
              <dd className="text-slate">{g.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
