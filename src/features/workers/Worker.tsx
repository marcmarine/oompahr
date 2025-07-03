import { NavLink, useParams } from 'react-router'
import { useGetWorkerByIdQuery } from './workersApiSlice'
import { getGenderName } from '../../lib/utils'

export default function Worker() {
  const params = useParams()
  const { data, isError, isLoading } = useGetWorkerByIdQuery(Number(params.id))
  const {
    first_name,
    last_name,
    description,
    image,
    email,
    quota,
    profession,
    gender,
  } = data ?? {}

  if (isError) return <div>An error has occurred!</div>
  if (isLoading) return <span aria-busy="true">Fetching...</span>

  const fullName = `${first_name} ${last_name}`
  const [username] = email?.split('@')!
  const genderName = getGenderName(gender!)

  return (
    <>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img className="rounded-xs" src={image} alt={fullName} />
        </div>
        <div className="flex-1 xl:flex-2 flex flex-col justify-center">
          <hgroup>
            <p>Worker</p>
            <h1>{fullName}</h1>
            <p>
              <small>
                {username} · {genderName}
              </small>
            </p>
          </hgroup>
          <hr />
          <div className="flex gap-4 flex-col md:items-start">
            <p>{profession}</p>
            <a href={`mailto:${email}`} role="button">
              Send a Message
            </a>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <blockquote>
          <span className="line-clamp-2">{quota}</span>
          <footer>
            <cite>— {fullName}</cite>
          </footer>
        </blockquote>
        <div
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: description as string }}
        />
        <NavLink
          to={`/?query=${profession}`}
          role="button"
          className="w-full md:w-auto outline secondary"
        >
          Find more {profession?.toLocaleLowerCase()}s
        </NavLink>
      </div>
    </>
  )
}
