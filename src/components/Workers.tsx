import { NavLink } from 'react-router'

export default function Workers() {
  return (
    <div>
      <ul>
        {[...Array(10).keys()].map((item) => (
          <li key={item}>
            <NavLink to={`${item + 1}`} className="underline">
              Worker #{item + 1}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
