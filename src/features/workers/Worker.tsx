import { useParams } from 'react-router'
import { useGetWorkerByIdQuery } from './workersApiSlice'

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
  } = data ?? {}

  if (isError) return <div>An error has occurred!</div>
  if (isLoading) return <span aria-busy="true">Fetching...</span>

  const fullName = `${first_name} ${last_name}`

  return (
    <>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img className="rounded-xs" src={image} alt={fullName} />
        </div>
        <div className="flex-2">
          <hgroup>
            <h1>{fullName}</h1>
            <p>
              <small>{email?.split('@')[0]}</small>
            </p>
          </hgroup>
          <hr />
          <p>{profession}</p>
        </div>
      </div>
      <div>
        <blockquote>
          <span className="line-clamp-2">{quota}</span>
          <footer>
            <cite>— {fullName}</cite>
          </footer>
        </blockquote>
        <div dangerouslySetInnerHTML={{ __html: description as string }} />
      </div>
    </>
  )
}
