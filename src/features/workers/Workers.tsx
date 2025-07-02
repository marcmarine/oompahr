import { useGetWorkersQuery } from './workersApiSlice'
import { NavLink } from 'react-router'

export default function Workers() {
  const { data, isError, isLoading } = useGetWorkersQuery(1)

  if (isError) return <div>An error has occurred!</div>
  if (isLoading) return <span aria-busy="true">Fetching...</span>

  return (
    <div className="tw-grid gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data?.results.map(
        ({ id, first_name, last_name, image, profession, email }) => (
          <article key={id}>
            <header className="aspect-[4/3] overflow-hidden">
              <img className="rounded-xs" src={image} alt={first_name} />
            </header>
            <hgroup>
              <NavLink to={`/${id}`} className="text-lg">
                {first_name} {last_name}
              </NavLink>
              <p>
                <small>{email.split('@')[0]}</small>
              </p>
            </hgroup>
            <footer>
              <span>
                <small>{profession}</small>
              </span>
            </footer>
          </article>
        )
      )}
    </div>
  )
}
