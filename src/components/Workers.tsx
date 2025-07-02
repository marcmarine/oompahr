import { NavLink } from 'react-router'

export default function Workers() {
  return (
    <ul>
      {[...Array(100).keys()].map((item) => (
        <li key={item}>
          <NavLink to={`/${item + 1}`} className="underline">
            Worker #{item + 1}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
