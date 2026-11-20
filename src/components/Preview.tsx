import type { PreviewKind } from '../data'

interface Props {
  kind: PreviewKind
  image?: string
  alt: string
}

/** A browser frame that shows a screenshot, or a drawn sketch of the UI when there isn't one yet. */
export default function Preview({ kind, image, alt }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-mist">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      {image ? (
        <img src={image} alt={alt} loading="lazy" className="block aspect-[16/10] w-full object-cover object-top" />
      ) : (
        <div role="img" aria-label={alt} className="aspect-[16/10] w-full p-5">
          <Sketch kind={kind} />
        </div>
      )}
    </div>
  )
}

const bar = 'rounded bg-line'
const accent = 'rounded bg-pine/70'

function Sketch({ kind }: { kind: PreviewKind }) {
  if (kind === 'form') {
    return (
      <div className="grid h-full grid-cols-[1.1fr_1fr] gap-4">
        <div className="flex flex-col gap-2 rounded-lg bg-paper p-3">
          <div className={`${bar} h-2 w-1/3`} />
          <div className={`${bar} h-2 w-full`} />
          <div className={`${bar} h-2 w-5/6`} />
          <div className={`${bar} h-2 w-2/3`} />
          <div className={`${accent} mt-auto h-5 w-20`} />
        </div>
        <div className="grid grid-cols-2 content-start gap-2">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="rounded-md border border-line bg-paper p-2">
              <div className={`${bar} mb-1.5 h-1.5 w-1/2`} />
              <div className={`${i === 2 ? accent : bar} h-2 w-4/5`} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (kind === 'landing') {
    return (
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className={`${bar} h-2 w-12`} />
          <div className="flex gap-2">
            <div className={`${bar} h-2 w-8`} />
            <div className={`${accent} h-2 w-8`} />
            <div className={`${bar} h-2 w-8`} />
          </div>
        </div>
        <div className="mt-2 flex flex-col items-center gap-2">
          <div className={`${bar} h-3.5 w-2/3`} />
          <div className={`${bar} h-3.5 w-1/2`} />
          <div className={`${accent} mt-1 h-5 w-24 rounded-full`} />
        </div>
        <div className="mt-auto grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`rounded-md bg-paper p-2 ${i === 1 ? 'border-2 border-pine/70' : 'border border-line'}`}>
              <div className={`${bar} mb-2 h-1.5 w-1/2`} />
              <div className={`${bar} h-3 w-2/3`} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex gap-2">
        <div className="h-6 flex-1 rounded-md border border-line bg-paper" />
        <div className={`${accent} h-6 w-16`} />
      </div>
      <div className="flex gap-1.5">
        <div className={`${accent} h-3 w-10 rounded-full`} />
        <div className={`${bar} h-3 w-12 rounded-full`} />
        <div className={`${bar} h-3 w-9 rounded-full`} />
      </div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2.5 rounded-md border border-line bg-paper p-2">
          <div className={`${i === 0 ? accent : bar} h-5 w-5`} />
          <div className="flex-1">
            <div className={`${bar} mb-1.5 h-2 w-1/2`} />
            <div className={`${bar} h-1.5 w-3/4`} />
          </div>
        </div>
      ))}
    </div>
  )
}
