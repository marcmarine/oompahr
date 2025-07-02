import Workers from '../features/workers/Workers'
import SearchButton from './SearchButton'

export default function Home() {
  return (
    <>
      <hgroup className="mt-4">
        <h1>OompaHR</h1>
        <p>Oompa Loompa 's crew of Willy Wonka's chocolate factory.</p>
      </hgroup>
      <div className="-mx-4 px-3 md:-mx-8 md:px-4 mb-2 py-3 sticky top-0 bg-[var(--pico-background-color)]/80 backdrop-blur-lg">
        <SearchButton />
      </div>
      <Workers />
    </>
  )
}
