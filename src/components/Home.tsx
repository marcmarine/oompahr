import Workers from '../features/workers/Workers'

export default function Home() {
  return (
    <>
      <hgroup className="py-4">
        <h1>OompaHR</h1>
        <p>Oompa Loompa 's crew of Willy Wonka's chocolate factory.</p>
      </hgroup>
      <Workers />
    </>
  )
}
