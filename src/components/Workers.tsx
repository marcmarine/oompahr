import { NavLink } from 'react-router'

export default function Workers() {
  return (
    <div className="tw-grid gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {[...Array(100).keys()].map((item) => (
        <article
          key={item}
          className="aspect-video flex items-center justify-center"
        >
          <NavLink to={`/${item + 1}`}>Worker #{item + 1}</NavLink>
        </article>
      ))}
    </div>
  )
}
