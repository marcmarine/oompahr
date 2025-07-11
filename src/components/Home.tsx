import Workers from '../features/workers/Workers'
import SearchInput from './SearchInput'

export default function Home() {
  return (
    <>
      <hgroup>
        <h1>OompaHR</h1>
        <p>Oompa Loompa 's crew of Willy Wonka's 🍫 chocolate factory.</p>
      </hgroup>
      <div className="-mx-4 px-3 md:-mx-8 md:px-4 py-3 sticky top-0 bg-[var(--pico-background-color)]/80 backdrop-blur-lg z-10">
        <SearchInput />
      </div>
      <Workers />
    </>
  )
}
