import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="p-4 border-b">
      <NavLink to={import.meta.env.BASE_URL}>
        <h1 className="text-3xl font-black hover:underline">OompaHR</h1>
      </NavLink>
    </header>
  )
}
