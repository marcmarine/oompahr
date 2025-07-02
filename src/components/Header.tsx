import { useNavigate, useParams } from 'react-router'

export default function Header() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <header className="p-4 border-b sticky top-0 bg-[var(--background-color)]">
      <button
        className="cursor-pointer hover:underline"
        onClick={() => {
          params.id ? navigate(-1) : navigate('/')
        }}
        type="button"
      >
        <h1 className="text-3xl font-black">OompaHR</h1>
      </button>
    </header>
  )
}
