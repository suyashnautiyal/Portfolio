import { profile } from '../data'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className="flex gap-4 text-sm text-slate sm:gap-7">
            {links.map((l) => (
              <li key={l.href} className={l.href === '#skills' ? 'hidden sm:block' : undefined}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
