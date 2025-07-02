import { NavLink, Outlet } from 'react-router'

export default function Detail() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
